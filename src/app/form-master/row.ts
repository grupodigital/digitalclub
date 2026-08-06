/**
 * Traduz as respostas do formulário master para a linha do Supabase.
 *
 * As 93 respostas vão inteiras na coluna jsonb `respostas`; as colunas
 * tipadas são um espelho do punhado que se filtra em relatório. Acrescentar
 * pergunta no formulário não exige migration — só regerar a view plana se
 * você quiser a pergunta nova como coluna. Ver a migration
 * `20260806190000_form_master_respostas.sql`.
 */

import { answerFor, buildAnswerMap } from "./answers";

export const TABLE = "form_master_respostas";

/** Pergunta do formulário → coluna tipada da tabela. */
const COLUMNS = {
  nome: "01. Nome completo",
  email: "04. E-mail",
  whatsapp: "03. WhatsApp",
  cidade: "06. Cidade onde mora",
  empresa: "18. Nome da empresa principal",
  cargo: "11. Profissão ou cargo atual",
  segmento: "22. Segmento principal",
  faturamento: "31. Faixa de faturamento anual",
  funcionarios: "30. Quantidade de funcionários",
} as const;

export interface SubmissionMeta {
  clickupUrl?: string;
  clickupMode?: string;
  origin?: string;
  userAgent?: string;
}

export function buildRow(data: FormData, meta: SubmissionMeta = {}) {
  const row: Record<string, unknown> = {
    respostas: buildAnswerMap(data),
    clickup_url: meta.clickupUrl ?? null,
    clickup_modo: meta.clickupMode ?? null,
    origem: meta.origin ?? null,
    user_agent: meta.userAgent ?? null,
  };

  for (const [column, question] of Object.entries(COLUMNS)) {
    row[column] = answerFor(data, question) || null;
  }

  // `nome` é NOT NULL na tabela: sem ele o registro não identifica ninguém.
  row.nome = answerFor(data, COLUMNS.nome) || "Sem nome";

  // NPS é smallint; texto não numérico vira null em vez de derrubar o insert.
  const nps = Number(answerFor(data, "84. NPS"));
  row.nps = Number.isInteger(nps) ? nps : null;

  return row;
}
