/**
 * Traduz as respostas do formulário master para uma tarefa do ClickUp.
 *
 * As 93 respostas são agrupadas pelos mesmos blocos do formulário — como
 * comentário na tarefa do membro, quando ele já existe no cadastro, ou como
 * corpo de uma tarefa nova. Os campos personalizados recebem só o punhado de
 * respostas que se filtra em dashboard: criar 93 custom fields esbarraria no
 * limite de campos do plano e seria impossível de manter.
 */

import { answerFor, normalize } from "./answers";
import type { ClickUpCustomFieldValue, ClickUpField } from "@/lib/clickup/client";

/**
 * Campo personalizado no ClickUp → pergunta do formulário.
 *
 * A ligação é pelo NOME do campo no ClickUp (sem diferenciar maiúsculas nem
 * acentos), não pelo id: assim você cria os campos na lista quando quiser e
 * eles passam a ser preenchidos sozinhos. Campo que não existir é ignorado.
 */
const CUSTOM_FIELD_MAP: Record<string, string> = {
  nome: "01. Nome completo",
  "e-mail": "04. E-mail",
  email: "04. E-mail",
  whatsapp: "03. WhatsApp",
  telefone: "03. WhatsApp",
  cidade: "06. Cidade onde mora",
  empresa: "18. Nome da empresa principal",
  cargo: "11. Profissão ou cargo atual",
  segmento: "22. Segmento principal",
  faturamento: "31. Faixa de faturamento anual",
  funcionarios: "30. Quantidade de funcionários",
  nps: "84. NPS",
  instagram: "07. Instagram",
  linkedin: "08. LinkedIn",
};

/**
 * Normaliza nome de pessoa: sem acento, sem espaço duplicado e sem
 * tratamento na frente. O cadastro tem "Dr. Thales Schincariol" e a pessoa
 * digita "Thales Schincariol" — sem isso, viraria uma tarefa duplicada.
 */
const normalizeName = (text: string) =>
  normalize(text)
    .replace(/\b(dr|dra|sr|sra|srta|prof|profa|eng)\.?\s+/g, "")
    .replace(/\s+/g, " ")
    .trim();

/** Segue a convenção da lista: as tarefas são nomeadas só com o nome do membro. */
export function buildTaskName(data: FormData) {
  return answerFor(data, "01. Nome completo") || "Membro sem nome";
}

/**
 * Acha a tarefa do membro que enviou o formulário.
 *
 * Deliberadamente conservador: casa o nome inteiro ou, na falta dele, primeiro
 * e último nome — e só quando essa combinação identifica uma pessoa só. Anexar
 * as respostas na tarefa do membro errado é pior do que criar uma tarefa nova.
 */
export function matchMemberTask<T extends { id: string; name: string }>(
  tasks: T[],
  data: FormData
): T | undefined {
  const answer = normalizeName(answerFor(data, "01. Nome completo"));
  if (!answer) return undefined;

  const exact = tasks.filter((task) => normalizeName(task.name) === answer);
  if (exact.length === 1) return exact[0];
  if (exact.length > 1) return undefined;

  const ends = (text: string) => {
    const words = text.split(/\s+/).filter(Boolean);
    return words.length > 1 ? `${words[0]} ${words[words.length - 1]}` : null;
  };

  const target = ends(answer);
  if (!target) return undefined;

  const partial = tasks.filter((task) => ends(normalizeName(task.name)) === target);
  return partial.length === 1 ? partial[0] : undefined;
}

/**
 * Converte a resposta para o formato que cada tipo de campo espera.
 * Tipo não suportado devolve null e o campo é simplesmente pulado.
 */
function coerce(field: ClickUpField, value: string): ClickUpCustomFieldValue["value"] | null {
  switch (field.type) {
    case "drop_down": {
      const option = field.type_config?.options?.find(
        (candidate) => normalize(candidate.name ?? candidate.label ?? "") === normalize(value)
      );
      return option ? option.id : null;
    }
    case "number":
    case "currency": {
      const number = Number(value.replace(/[^\d,.-]/g, "").replace(",", "."));
      return Number.isFinite(number) ? number : null;
    }
    case "text":
    case "short_text":
    case "email":
    case "phone":
    case "url":
    case "location":
      return value;
    default:
      return null;
  }
}

export function buildCustomFields(data: FormData, fields: ClickUpField[]) {
  const values: ClickUpCustomFieldValue[] = [];

  for (const field of fields) {
    const question = CUSTOM_FIELD_MAP[normalize(field.name)];
    if (!question) continue;

    const answer = answerFor(data, question);
    if (!answer) continue;

    const value = coerce(field, answer);
    if (value === null) continue;

    values.push({ id: field.id, value });
  }

  return values;
}
