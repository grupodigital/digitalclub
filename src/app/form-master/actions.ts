"use server";

import {
  clickUpConfig,
  createComment,
  createTask,
  getListFields,
  listTasks,
} from "@/lib/clickup/client";
import {
  buildAnswers,
  buildCustomFields,
  buildTaskName,
  matchMemberTask,
} from "./task";
import { EMAIL_TO, HIDDEN_FIELDS, HONEYPOT } from "./fields";

export interface SubmitState {
  status: "idle" | "success" | "error";
  message?: string;
}

/**
 * Registra as respostas no ClickUp.
 *
 * A lista de destino é o cadastro de membros, com uma tarefa por pessoa: se o
 * membro já existe, as respostas viram comentário na tarefa dele em vez de uma
 * segunda tarefa com o mesmo nome. Só quem não é encontrado gera tarefa nova.
 */
async function sendToClickUp(data: FormData) {
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

/** Espelha o envio por e-mail, via endpoint AJAX do FormSubmit. */
async function sendToEmail(data: FormData) {
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

export async function submitFormMaster(
  _prev: SubmitState,
  data: FormData
): Promise<SubmitState> {
  // Isca de bot: o campo é invisível, então só um robô o preenche.
  if ((data.get(HONEYPOT) as string)?.trim()) {
    return { status: "success" };
  }

  if (!(data.get("01. Nome completo") as string)?.trim()) {
    return { status: "error", message: "Informe seu nome completo para enviar." };
  }

  const [clickUp, email] = await Promise.allSettled([
    sendToClickUp(data),
    sendToEmail(data),
  ]);

  if (clickUp.status === "fulfilled") {
    console.info(
      `[form-master] ClickUp: ${clickUp.value.mode} — ${clickUp.value.url}`
    );
  } else {
    console.error("[form-master] ClickUp:", clickUp.reason);
  }
  if (email.status === "rejected") console.error("[form-master] e-mail:", email.reason);

  // Um canal entregue já garante que a resposta não se perdeu.
  if (clickUp.status === "fulfilled" || email.status === "fulfilled") {
    return { status: "success" };
  }

  return {
    status: "error",
    message:
      "Não conseguimos registrar suas respostas agora. Tente novamente em instantes — suas respostas continuam preenchidas.",
  };
}
