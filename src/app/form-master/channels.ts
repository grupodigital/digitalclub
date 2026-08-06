/**
 * Os três destinos de um envio do formulário master.
 *
 * Ficam fora de `actions.ts` porque aquele arquivo é `"use server"` — lá todo
 * export vira uma Server Action exposta ao cliente. Aqui são funções comuns
 * de servidor: a Action apenas as orquestra, e elas podem ser exercitadas em
 * isolamento sem virar endpoint.
 */

import "server-only";

import {
  clickUpConfig,
  createComment,
  createTask,
  getListFields,
  listTasks,
} from "@/lib/clickup/client";
import { insertRow } from "@/lib/supabase/client";
import { buildAnswers } from "./answers";
import { buildCustomFields, buildTaskName, matchMemberTask } from "./task";
import { TABLE, buildRow, type SubmissionMeta } from "./row";
import { EMAIL_TO, HIDDEN_FIELDS, HONEYPOT } from "./fields";

/**
 * Registra as respostas no ClickUp.
 *
 * A lista de destino é o cadastro de membros, com uma tarefa por pessoa: se o
 * membro já existe, as respostas viram comentário na tarefa dele em vez de uma
 * segunda tarefa com o mesmo nome. Só quem não é encontrado gera tarefa nova.
 */
export async function sendToClickUp(data: FormData) {
  const { token, listId, enabled } = clickUpConfig();
  if (!enabled) throw new Error("ClickUp não configurado (CLICKUP_TOKEN / CLICKUP_LIST_ID).");

  const existing = await listTasks(listId!, token!)
    .then((tasks) => matchMemberTask(tasks, data))
    .catch(() => undefined);

  if (existing) {
    const date = new Date().toLocaleDateString("pt-BR", { timeZone: "America/Manaus" });
    await createComment(
      existing.id,
      token!,
      `FORMULÁRIO MASTER — respostas enviadas em ${date}\n\n${buildAnswers(data, "plain")}`
    );
    return { url: existing.url, mode: "comentário" as const };
  }

  // Sem os campos personalizados a tarefa ainda é criada: eles são
  // enriquecimento, não podem derrubar o envio de um membro.
  const fields = await getListFields(listId!, token!).catch(() => []);

  const task = await createTask(listId!, token!, {
    name: buildTaskName(data),
    markdown_content: buildAnswers(data, "markdown"),
    custom_fields: buildCustomFields(data, fields),
  });

  return { url: task.url, mode: "tarefa nova" as const };
}

/**
 * Grava a resposta no Supabase — a garantia de que nada se perde.
 *
 * É o canal que não depende de serviço de terceiro para guardar o dado, então
 * roda em paralelo com os outros e nunca espera por eles.
 */
export async function sendToSupabase(data: FormData, meta: SubmissionMeta = {}) {
  return insertRow(TABLE, buildRow(data, meta));
}

/** Espelha o envio por e-mail, via endpoint AJAX do FormSubmit. */
export async function sendToEmail(data: FormData) {
  const payload: Record<string, string> = { ...HIDDEN_FIELDS };
  for (const [key, value] of data.entries()) {
    if (typeof value !== "string" || !value.trim()) continue;
    if (key.startsWith("_") || key === HONEYPOT) continue;
    // Checkbox repete a chave; acumula em vez de sobrescrever.
    payload[key] = payload[key] ? `${payload[key]}, ${value}` : value;
  }

  const response = await fetch(`https://formsubmit.co/ajax/${EMAIL_TO}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) throw new Error(`FormSubmit respondeu ${response.status}`);
}
