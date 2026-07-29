/**
 * ─────────────────────────────────────────────────────────────
 * CONFIGURAÇÃO DO FORMULÁRIO DE APLICAÇÃO (/form)
 * ─────────────────────────────────────────────────────────────
 * Portado de dsx-club-form. Todas as perguntas vieram do formulário
 * original: https://api.leadconnectorhq.com/widget/form/sKs8D7g4cdsZRMTZdF0P
 *
 * Para adicionar / remover / reordenar perguntas, edite apenas o
 * array FIELDS abaixo. O restante da experiência é dirigido por
 * esta configuração.
 *
 * `ghlKey` é a chave que o LeadConnector (GoHighLevel) espera no
 * payload enviado ao webhook.
 */

export type FieldType = "text" | "email" | "tel" | "textarea" | "select";

export interface FormField {
  name: string;
  ghlKey: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  span?: "half" | "full";
  mask?: "phone-br";
  rows?: number;
  maxLength?: number;
  options?: string[];
}

export type FormValues = Record<string, string>;

export const SITE = {
  brand: "Digital Club",
  siteUrl: "/",
};

export const FORM_INTRO =
  "Olá! Para entendermos melhor o seu momento atual e personalizar sua experiência dentro do Digital Club, responda algumas perguntas rápidas:";

/**
 * Campos de contato (e-mail / WhatsApp).
 *
 * O formulário original não pede e-mail nem telefone, mas o
 * LeadConnector precisa de ao menos um identificador para criar o
 * contato no CRM. Deixe `true` para incluí-los; mude para `false`
 * se quiser fidelidade absoluta ao formulário original.
 */
export const INCLUDE_CONTACT_FIELDS = true;

const CONTACT_FIELDS: FormField[] = [
  {
    name: "email",
    ghlKey: "email",
    label: "E-mail",
    type: "email",
    placeholder: "voce@empresa.com.br",
    required: true,
    autoComplete: "email",
    span: "half",
  },
  {
    name: "phone",
    ghlKey: "phone",
    label: "WhatsApp",
    type: "tel",
    placeholder: "(92) 90000-0000",
    required: true,
    autoComplete: "tel",
    mask: "phone-br",
    span: "half",
  },
];

const QUESTION_FIELDS: FormField[] = [
  {
    name: "fullName",
    ghlKey: "full_name",
    label: "Nome Completo",
    type: "text",
    placeholder: "Como você se chama?",
    required: true,
    autoComplete: "name",
    span: "half",
  },
  {
    name: "company",
    ghlKey: "company_name",
    label: "Empresa",
    type: "text",
    placeholder: "Nome da sua empresa",
    required: true,
    autoComplete: "organization",
    span: "half",
  },
  {
    name: "objective",
    ghlKey: "objetivo_dsx_club",
    label: "Qual seu principal objetivo ao entrar no Digital Club?",
    type: "textarea",
    placeholder: "Descreva o que você busca ao fazer parte da comunidade.",
    required: true,
    rows: 4,
    maxLength: 600,
    span: "full",
  },
  {
    name: "companyStage",
    ghlKey: "momento_atual_da_empresa",
    label: "Qual o momento atual da sua empresa?",
    type: "textarea",
    placeholder: "Ex.: expansão, reestruturação, consolidação de mercado…",
    required: true,
    rows: 4,
    maxLength: 600,
    span: "full",
  },
  {
    name: "biggestChallenge",
    ghlKey: "maior_desafio_do_negocio",
    label: "Qual é hoje o maior desafio do seu negócio?",
    type: "textarea",
    placeholder: "Seja específico — isso ajuda na curadoria.",
    required: true,
    rows: 4,
    maxLength: 600,
    span: "full",
  },
  {
    name: "teamSize",
    ghlKey: "tamanho_da_equipe",
    label: "Quantas pessoas fazem parte da sua equipe atualmente?",
    type: "select",
    placeholder: "Selecione uma faixa",
    required: true,
    span: "half",
    options: [
      "Somente eu",
      "2 a 5 pessoas",
      "6 a 20 pessoas",
      "21 a 50 pessoas",
      "51 a 100 pessoas",
      "101 a 500 pessoas",
      "Mais de 500 pessoas",
    ],
  },
  {
    name: "monthlyRevenue",
    ghlKey: "faturamento_medio_mensal",
    label: "Qual o faturamento médio mensal da empresa?",
    type: "select",
    placeholder: "Selecione uma faixa",
    required: true,
    span: "half",
    options: [
      "Até R$ 50 mil",
      "R$ 50 mil a R$ 100 mil",
      "R$ 100 mil a R$ 500 mil",
      "R$ 500 mil a R$ 1 milhão",
      "R$ 1 milhão a R$ 5 milhões",
      "R$ 5 milhões a R$ 10 milhões",
      "Acima de R$ 10 milhões",
      "Prefiro não informar",
    ],
  },
  {
    name: "twelveMonthGoal",
    ghlKey: "resultado_12_meses",
    label: "Qual resultado você deseja alcançar nos próximos 12 meses?",
    type: "textarea",
    placeholder: "Metas de faturamento, expansão, time, posicionamento…",
    required: true,
    rows: 4,
    maxLength: 600,
    span: "full",
  },
  {
    name: "expectations",
    ghlKey: "expectativas_dsx_club",
    label: "O que você espera encontrar no Digital Club?",
    type: "textarea",
    placeholder: "Conexões, aprendizado, oportunidades de negócio…",
    required: true,
    rows: 4,
    maxLength: 600,
    span: "full",
  },
];

export const FIELDS: FormField[] = INCLUDE_CONTACT_FIELDS
  ? [...QUESTION_FIELDS.slice(0, 2), ...CONTACT_FIELDS, ...QUESTION_FIELDS.slice(2)]
  : QUESTION_FIELDS;

export const INITIAL_VALUES: FormValues = Object.fromEntries(
  FIELDS.map((f) => [f.name, ""])
);
