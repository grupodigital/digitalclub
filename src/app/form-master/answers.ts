/**
 * Leitura das respostas do formulário master, compartilhada pelos destinos.
 *
 * Um envio vai para três lugares — Supabase, ClickUp e e-mail — e todos
 * precisam ler o mesmo FormData da mesma maneira. Este arquivo é essa leitura;
 * cada destino formata o resultado do seu jeito.
 */

import { BLOCKS, type FMField } from "./fields";

export const normalize = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim()
    .toLowerCase();

/** Achata `row` para que a ordem das perguntas seja a ordem da tela. */
export function flatten(fields: FMField[]): Exclude<FMField, { kind: "row" }>[] {
  return fields.flatMap((field) =>
    field.kind === "row" ? flatten(field.fields) : [field]
  );
}

/** Checkbox repete o mesmo `name`; por isso getAll + junção. */
export function answerFor(data: FormData, name: string) {
  return data
    .getAll(name)
    .filter((entry): entry is string => typeof entry === "string")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .join(", ");
}

/** Todas as perguntas na ordem da tela, com `row` já achatado. */
export const ALL_FIELDS = BLOCKS.flatMap((block) => flatten(block.fields));

/**
 * As respostas preenchidas, com a pergunta como chave — o formato que vai
 * para a coluna jsonb. Pergunta em branco não entra: o registro guarda o que
 * a pessoa respondeu, não 93 strings vazias.
 */
export function buildAnswerMap(data: FormData) {
  const map: Record<string, string> = {};

  for (const field of ALL_FIELDS) {
    const value = answerFor(data, field.name);
    if (value) map[field.name] = value;
  }

  return map;
}

/**
 * As respostas agrupadas pelos mesmos blocos da tela.
 *
 * O corpo da tarefa do ClickUp aceita markdown; o comentário não — a API só
 * recebe `comment_text` puro, e os asteriscos apareceriam crus. Daí os dois
 * formatos.
 */
export function buildAnswers(data: FormData, format: "markdown" | "plain") {
  const parts: string[] = [];

  for (const block of BLOCKS) {
    const answered = flatten(block.fields)
      .map((field) => ({ label: field.label, value: answerFor(data, field.name) }))
      .filter((entry) => entry.value);

    if (!answered.length) continue;

    const heading = `${block.eyebrow} — ${block.title}`;
    parts.push(format === "markdown" ? `## ${heading}` : heading.toUpperCase());

    for (const entry of answered) {
      parts.push(
        format === "markdown"
          ? `**${entry.label}**\n\n${entry.value}`
          : `${entry.label}\n${entry.value}`
      );
    }
  }

  return parts.join("\n\n");
}
