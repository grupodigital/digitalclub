/**
 * ─────────────────────────────────────────────────────────────
 * FORMULÁRIO MASTER (/form-master)
 * ─────────────────────────────────────────────────────────────
 * As respostas são enviadas via formsubmit.co — o atributo `name`
 * de cada campo vira o rótulo na tabela do e-mail recebido, por
 * isso os names são numerados ("01. Nome completo", …): garantem
 * a ordem e a leitura no e-mail.
 *
 * Para adicionar / remover / reordenar perguntas, edite apenas
 * BLOCKS abaixo. A renderização é dirigida por esta configuração.
 */

export type FMOption = string | { value: string; label: string };

export type FMField =
  | {
      kind: "input";
      type: "text" | "email" | "tel" | "url" | "date";
      name: string;
      label: string;
      required?: boolean;
      placeholder?: string;
    }
  | {
      kind: "textarea";
      name: string;
      label: string;
      hint?: string;
      minHeight?: number;
    }
  | { kind: "select"; name: string; label: string; options: string[] }
  | {
      kind: "choices";
      input: "radio" | "checkbox";
      name: string;
      label: string;
      options: FMOption[];
      stack?: boolean;
    }
  | { kind: "scale"; name: string; label: string }
  | { kind: "row"; fields: FMField[] };

export interface FMBlock {
  eyebrow: string;
  title: string;
  note?: string;
  fields: FMField[];
}

/** Destino do espelho por e-mail (canal secundário do envio). */
export const EMAIL_TO = "matheusferreiravxx@gmail.com";

export const HIDDEN_FIELDS: Record<string, string> = {
  _subject: "Nova resposta — Formulário Master Digital Club",
  _template: "table",
  _captcha: "false",
};

/** Campo invisível: se vier preenchido, quem respondeu foi um robô. */
export const HONEYPOT = "_confirme";

export const HERO = {
  eyebrow: "Formulário Master",
  title: "Queremos te conhecer de verdade.",
  paragraphs: [
    "Este formulário é a base do seu relacionamento com o Digital Club. Quanto mais completo, mais preciso será o seu acompanhamento — nas conexões que fazemos, nas oportunidades que trazemos e nas experiências que convidamos você a viver.",
    "Leva entre 15 e 20 minutos. Não existe resposta errada — apenas quanto mais honesta, melhor.",
  ],
};

export const SUBMIT_NOTE =
  "Ao enviar, suas respostas seguem diretamente para a equipe do Digital Club e passam a orientar todo o seu acompanhamento como membro.";

export const BLOCKS: FMBlock[] = [
  {
    eyebrow: "Bloco 01",
    title: "Dados pessoais",
    fields: [
      {
        kind: "input",
        type: "text",
        name: "01. Nome completo",
        label: "Nome completo",
        required: true,
      },
      {
        kind: "input",
        type: "text",
        name: "02. Como prefere ser chamado",
        label: "Como prefere ser chamado?",
      },
      {
        kind: "row",
        fields: [
          {
            kind: "input",
            type: "tel",
            name: "03. WhatsApp",
            label: "WhatsApp",
            required: true,
            placeholder: "(00) 00000-0000",
          },
          {
            kind: "input",
            type: "email",
            name: "04. E-mail",
            label: "E-mail",
            required: true,
          },
        ],
      },
      {
        kind: "row",
        fields: [
          {
            kind: "input",
            type: "date",
            name: "05. Data de nascimento",
            label: "Data de nascimento",
          },
          {
            kind: "input",
            type: "text",
            name: "06. Cidade onde mora",
            label: "Cidade onde mora",
          },
        ],
      },
      {
        kind: "row",
        fields: [
          {
            kind: "input",
            type: "text",
            name: "07. Instagram",
            label: "Instagram",
            placeholder: "@usuario",
          },
          {
            kind: "input",
            type: "text",
            name: "08. LinkedIn",
            label: "LinkedIn",
            placeholder: "linkedin.com/in/...",
          },
        ],
      },
      {
        kind: "select",
        name: "09. Estado civil",
        label: "Estado civil",
        options: ["Solteiro", "Casado", "União estável", "Divorciado", "Outro"],
      },
      {
        kind: "choices",
        input: "radio",
        name: "10. Filhos",
        label: "Filhos?",
        options: [
          "Não",
          { value: "Sim - 1", label: "Sim — 1" },
          { value: "Sim - 2", label: "Sim — 2" },
          { value: "Sim - 3+", label: "Sim — 3+" },
          "Prefiro não informar",
        ],
      },
    ],
  },
  {
    eyebrow: "Bloco 02",
    title: "Perfil profissional",
    fields: [
      {
        kind: "input",
        type: "text",
        name: "11. Profissão ou cargo atual",
        label: "Qual é sua profissão/cargo atual?",
      },
      {
        kind: "select",
        name: "12. Você é",
        label: "Você é:",
        options: [
          "Fundador",
          "Sócio",
          "CEO",
          "Diretor",
          "Gerente",
          "Executivo",
          "Investidor",
          "Consultor",
          "Profissional liberal",
          "Outro",
        ],
      },
      {
        kind: "select",
        name: "13. Há quanto tempo empreende",
        label: "Há quanto tempo você empreende?",
        options: [
          "Menos de 1 ano",
          "1–3 anos",
          "3–5 anos",
          "5–10 anos",
          "10–20 anos",
          "Mais de 20 anos",
        ],
      },
      {
        kind: "input",
        type: "text",
        name: "14. Quantidade de empresas",
        label: "Quantas empresas você possui atualmente?",
      },
      {
        kind: "choices",
        input: "radio",
        name: "15. Participa de outras comunidades",
        label: "Você participa de outras comunidades ou grupos empresariais?",
        options: ["Sim", "Não"],
      },
      {
        kind: "input",
        type: "text",
        name: "16. Quais comunidades",
        label: "Se sim, quais?",
      },
      {
        kind: "input",
        type: "text",
        name: "17. O que mais valoriza nessas comunidades",
        label: "O que você mais valoriza nessas comunidades?",
      },
    ],
  },
  {
    eyebrow: "Bloco 03",
    title: "Empresa",
    fields: [
      {
        kind: "input",
        type: "text",
        name: "18. Nome da empresa principal",
        label: "Nome da empresa principal",
      },
      {
        kind: "row",
        fields: [
          {
            kind: "input",
            type: "url",
            name: "19. Site da empresa",
            label: "Site da empresa",
          },
          {
            kind: "input",
            type: "text",
            name: "20. Instagram da empresa",
            label: "Instagram da empresa",
          },
        ],
      },
      {
        kind: "input",
        type: "text",
        name: "21. LinkedIn da empresa",
        label: "LinkedIn da empresa",
      },
      {
        kind: "row",
        fields: [
          {
            kind: "input",
            type: "text",
            name: "22. Segmento principal",
            label: "Segmento principal",
          },
          {
            kind: "input",
            type: "text",
            name: "23. Subsegmento ou nicho",
            label: "Subsegmento/nicho",
          },
        ],
      },
      {
        kind: "input",
        type: "text",
        name: "24. Descrição da empresa em uma frase",
        label: "Descreva sua empresa em uma frase.",
      },
      {
        kind: "input",
        type: "text",
        name: "25. Principal produto ou serviço",
        label: "Qual é o principal produto/serviço?",
      },
      {
        kind: "input",
        type: "text",
        name: "26. Principal cliente da empresa",
        label: "Quem é o principal cliente da empresa?",
      },
      {
        kind: "input",
        type: "text",
        name: "27. Perfil do cliente ideal",
        label: "Qual é o perfil do cliente ideal?",
      },
      {
        kind: "input",
        type: "text",
        name: "28. Principal diferencial da empresa",
        label: "Qual é o principal diferencial da empresa?",
      },
      {
        kind: "input",
        type: "text",
        name: "29. Principal concorrente ou referência",
        label: "Qual é o principal concorrente ou referência de mercado?",
      },
    ],
  },
  {
    eyebrow: "Bloco 04",
    title: "Tamanho do negócio",
    fields: [
      {
        kind: "select",
        name: "30. Quantidade de funcionários",
        label: "Quantidade de funcionários",
        options: ["1–5", "6–10", "11–30", "31–50", "51–100", "101–300", "300+"],
      },
      {
        kind: "select",
        name: "31. Faixa de faturamento anual",
        label: "Faixa de faturamento anual",
        options: [
          "Até R$ 500 mil",
          "R$ 500 mil – R$ 1 milhão",
          "R$ 1–5 milhões",
          "R$ 5–10 milhões",
          "R$ 10–30 milhões",
          "R$ 30–100 milhões",
          "Acima de R$ 100 milhões",
          "Prefiro não informar",
        ],
      },
      {
        kind: "choices",
        input: "radio",
        stack: true,
        name: "32. Momento da empresa",
        label: "A empresa está crescendo, estável ou retraindo?",
        options: [
          "Crescendo fortemente",
          "Crescendo",
          "Estável",
          "Retraindo",
          "Em reestruturação",
        ],
      },
      {
        kind: "input",
        type: "text",
        name: "33. Principal indicador acompanhado",
        label: "Qual é o principal indicador que você acompanha na empresa?",
      },
      {
        kind: "input",
        type: "text",
        name: "34. Principal meta empresarial do ano",
        label: "Qual é a sua principal meta empresarial para este ano?",
      },
    ],
  },
  {
    eyebrow: "Bloco 05",
    title: "Momento atual",
    fields: [
      {
        kind: "textarea",
        name: "35. Maior desafio da empresa hoje",
        label: "Qual é hoje o maior desafio da sua empresa?",
      },
      {
        kind: "textarea",
        name: "36. Maior desafio pessoal como líder",
        label: "Qual é hoje o maior desafio pessoal como empresário/líder?",
      },
      {
        kind: "textarea",
        name: "37. Único problema a resolver em 90 dias",
        label:
          "Se você pudesse resolver apenas UM problema da empresa nos próximos 90 dias, qual seria?",
      },
      {
        kind: "textarea",
        name: "38. O que impede resolver isso hoje",
        label: "O que está impedindo você de resolver isso hoje?",
      },
      {
        kind: "choices",
        input: "checkbox",
        name: "39. Área que mais precisa de evolução",
        label: "Qual área mais precisa de evolução?",
        options: [
          "Estratégia",
          "Gestão",
          "Liderança",
          "Comercial",
          "Marketing",
          "Financeiro",
          "Pessoas",
          "Processos",
          "Tecnologia",
          "Operação",
          "Cultura",
          "Governança",
          "Outro",
        ],
      },
    ],
  },
  {
    eyebrow: "Bloco 06",
    title: "Objetivos",
    fields: [
      {
        kind: "textarea",
        name: "40. Objetivo para os próximos 90 dias",
        label: "Qual é seu principal objetivo para os próximos 90 dias?",
      },
      {
        kind: "textarea",
        name: "41. Objetivo para os próximos 12 meses",
        label: "Qual é seu principal objetivo para os próximos 12 meses?",
      },
      {
        kind: "textarea",
        name: "42. Maior objetivo da empresa em 3 anos",
        label: "Qual é o maior objetivo da empresa para os próximos 3 anos?",
      },
      {
        kind: "textarea",
        name: "43. O que torna este ano excepcional",
        label:
          "O que precisa acontecer para você considerar este ano um ano excepcional?",
      },
    ],
  },
  {
    eyebrow: "Bloco 07",
    title: "Gargalos",
    fields: [
      {
        kind: "input",
        type: "text",
        name: "44. Onde perde mais dinheiro",
        label: "Onde você sente que está perdendo mais dinheiro atualmente?",
      },
      {
        kind: "input",
        type: "text",
        name: "45. Onde perde mais tempo",
        label: "Onde você sente que está perdendo mais tempo?",
      },
      {
        kind: "input",
        type: "text",
        name: "46. Processo que mais incomoda",
        label: "Qual processo da empresa mais te incomoda hoje?",
      },
      {
        kind: "input",
        type: "text",
        name: "47. Decisão importante sendo adiada",
        label: "Qual decisão importante você está adiando?",
      },
      {
        kind: "input",
        type: "text",
        name: "48. O que gostaria de delegar",
        label: "O que você gostaria de delegar, mas ainda não conseguiu?",
      },
      {
        kind: "input",
        type: "text",
        name: "49. Habilidade a desenvolver",
        label:
          "Qual habilidade você acredita que precisa desenvolver como empresário?",
      },
    ],
  },
  {
    eyebrow: "Bloco 08",
    title: "Comercial",
    fields: [
      {
        kind: "scale",
        name: "50. Nota área comercial",
        label: "Como você avalia hoje a área comercial da sua empresa? (0 a 10)",
      },
      {
        kind: "choices",
        input: "checkbox",
        name: "51. Principal desafio comercial",
        label: "Qual é o principal desafio comercial?",
        options: [
          "Prospecção",
          "Geração de leads",
          "Conversão",
          "Ticket médio",
          "Retenção",
          "Recorrência",
          "Equipe comercial",
          "Gestão",
          "Processo",
          "CRM",
          "Outro",
        ],
      },
      {
        kind: "choices",
        input: "radio",
        name: "52. Buscando novos clientes",
        label: "Você está buscando novos clientes atualmente?",
        options: ["Sim", "Não"],
      },
      {
        kind: "input",
        type: "text",
        name: "53. Tipo de cliente que gostaria de conquistar",
        label: "Que tipo de cliente você gostaria de conquistar?",
      },
      {
        kind: "input",
        type: "text",
        name: "54. Segmentos que gostaria de acessar",
        label: "Quais segmentos você gostaria de acessar?",
      },
      {
        kind: "input",
        type: "text",
        name: "55. Regiões que gostaria de acessar",
        label: "Quais regiões você gostaria de acessar?",
      },
    ],
  },
  {
    eyebrow: "Bloco 09",
    title: "Networking",
    note: "Essa parte é fundamental para o Digital Club.",
    fields: [
      {
        kind: "choices",
        input: "checkbox",
        name: "56. Quem gostaria de conhecer no Club",
        label: "Quem você gostaria de conhecer dentro do Club?",
        options: [
          "Empresários",
          "CEOs",
          "Sócios",
          "Investidores",
          "Executivos",
          "Especialistas",
          "Fornecedores",
          "Potenciais clientes",
          "Parceiros estratégicos",
          "Outro",
        ],
      },
      {
        kind: "textarea",
        name: "57. Segmentos que gostaria de conhecer",
        label: "Quais segmentos você gostaria de conhecer?",
      },
      {
        kind: "textarea",
        name: "58. Empresas que gostaria de acessar",
        label: "Quais empresas você gostaria de acessar?",
      },
      {
        kind: "textarea",
        name: "59. Pessoa específica que gostaria de conhecer",
        label: "Existe alguma pessoa específica que você gostaria de conhecer?",
      },
      {
        kind: "textarea",
        name: "60. Tipo de parceria procurando",
        label: "Que tipo de parceria você está procurando?",
      },
      {
        kind: "textarea",
        name: "61. O que pode oferecer aos demais membros",
        label: "O que você pode oferecer aos demais membros?",
        hint: "Essa pergunta é essencial para criar uma matriz de reciprocidade.",
      },
    ],
  },
  {
    eyebrow: "Bloco 10",
    title: "O que você pode gerar para o Club",
    fields: [
      {
        kind: "input",
        type: "text",
        name: "62. Assuntos para compartilhar conhecimento",
        label:
          "Em quais assuntos você poderia compartilhar conhecimento com outros membros?",
      },
      {
        kind: "choices",
        input: "checkbox",
        name: "63. Interesse em",
        label: "Você teria interesse em:",
        options: [
          "Dar uma palestra",
          "Participar de painel",
          "Compartilhar case",
          "Ser mentor",
          "Participar de mastermind",
          "Receber empresários na empresa",
          "Participar de podcast",
          "Produzir conteúdo",
          "Fazer parceria",
          "Outro",
        ],
      },
      {
        kind: "textarea",
        name: "64. Case ou resultado para compartilhar",
        label: "Você possui algum case ou resultado que gostaria de compartilhar?",
      },
    ],
  },
  {
    eyebrow: "Bloco 11",
    title: "Interesses",
    fields: [
      {
        kind: "choices",
        input: "checkbox",
        name: "65. Temas de interesse",
        label: "Quais temas mais interessam a você?",
        options: [
          "Estratégia",
          "Gestão",
          "Liderança",
          "Vendas",
          "Marketing",
          "Finanças",
          "Investimentos",
          "Tecnologia",
          "IA",
          "Pessoas",
          "Cultura",
          "ESG",
          "M&A",
          "Governança",
          "Networking",
          "Internacionalização",
          "Outro",
        ],
      },
      {
        kind: "input",
        type: "text",
        name: "66. Assuntos que gostaria de aprender",
        label: "Quais assuntos você gostaria de aprender nos próximos meses?",
      },
    ],
  },
  {
    eyebrow: "Bloco 12",
    title: "Experiência Digital Club",
    fields: [
      {
        kind: "textarea",
        name: "67. Por que decidiu entrar no Digital Club",
        label: "Por que você decidiu entrar no Digital Club?",
      },
      {
        kind: "textarea",
        name: "68. O que espera encontrar aqui",
        label: "O que você espera encontrar aqui?",
      },
      {
        kind: "textarea",
        name: "69. O que tornaria a experiência excepcional",
        label: "O que faria sua experiência no Club ser excepcional?",
      },
      {
        kind: "textarea",
        name: "70. O que faria dizer que gerou mais valor que o esperado",
        label:
          'O que faria você dizer: "Minha participação no Digital Club gerou muito mais valor do que eu esperava."?',
      },
      {
        kind: "choices",
        input: "checkbox",
        name: "71. Tipo de experiência mais valorizada",
        label: "Qual tipo de experiência você mais valoriza?",
        options: [
          "Networking",
          "Conteúdo",
          "Negócios",
          "Eventos",
          "Jantares",
          "Imersões",
          "Mastermind",
          "Benchmarking",
          "Parcerias",
          "Acesso a empresários",
          "Outro",
        ],
      },
    ],
  },
  {
    eyebrow: "Bloco 13",
    title: "Disponibilidade",
    fields: [
      {
        kind: "choices",
        input: "radio",
        name: "72. Frequência de participação",
        label: "Com que frequência você pretende participar das experiências?",
        options: [
          "Toda semana",
          { value: "2-3 vezes por mês", label: "2–3 vezes por mês" },
          "1 vez por mês",
          "Eventualmente",
        ],
      },
      {
        kind: "choices",
        input: "checkbox",
        name: "73. Melhor período",
        label: "Melhor período",
        options: ["Manhã", "Almoço", "Tarde", "Noite"],
      },
      {
        kind: "choices",
        input: "checkbox",
        name: "74. Melhor dia",
        label: "Melhor dia",
        options: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"],
      },
    ],
  },
  {
    eyebrow: "Bloco 14",
    title: "Relacionamento",
    fields: [
      {
        kind: "choices",
        input: "checkbox",
        name: "75. Como prefere ser acompanhado",
        label: "Como prefere ser acompanhado pelo Digital Club?",
        options: [
          "WhatsApp",
          "Ligação",
          "E-mail",
          "Presencial",
          "Não tenho preferência",
        ],
      },
      {
        kind: "choices",
        input: "radio",
        name: "76. Frequência de contato individual",
        label:
          "Com que frequência gostaria de receber contato individual do seu responsável pelo Club?",
        options: [
          "Toda semana",
          "Quinzenal",
          "Mensal",
          {
            value: "Somente quando houver algo relevante",
            label: "Somente quando relevante",
          },
        ],
      },
    ],
  },
  {
    eyebrow: "Bloco 15",
    title: "Experiência e expectativas",
    fields: [
      {
        kind: "scale",
        name: "77. Nota contribuição para objetivos",
        label:
          "De 0 a 10, quanto você acredita que o Digital Club pode contribuir para seus objetivos?",
      },
      {
        kind: "scale",
        name: "78. Nota disposição de participação",
        label:
          "De 0 a 10, quanto você está disposto a participar ativamente da comunidade?",
      },
      {
        kind: "textarea",
        name: "79. O que espera receber do Club",
        label: "O que você espera receber do Club?",
      },
      {
        kind: "textarea",
        name: "80. O que espera entregar ao Club",
        label: "O que você espera entregar ao Club?",
      },
    ],
  },
  {
    eyebrow: "Bloco 16",
    title: "Sucesso",
    note: "Essa é a pergunta que deve orientar todo o trabalho do CS.",
    fields: [
      {
        kind: "textarea",
        name: "81. O que precisa acontecer em 12 meses para ser sucesso",
        label:
          "Daqui a 12 meses, o que precisa ter acontecido para você dizer que sua participação no Digital Club foi um sucesso?",
      },
      {
        kind: "choices",
        input: "checkbox",
        name: "82. Resultados desejados via Club",
        label: "Quais resultados você gostaria de gerar através do Club?",
        options: [
          "Novos clientes",
          "Novas vendas",
          "Parcerias",
          "Investimentos",
          "Contratações",
          "Conhecimento",
          "Networking",
          "Acesso",
          "Desenvolvimento pessoal",
          "Desenvolvimento empresarial",
          "Outro",
        ],
      },
      {
        kind: "choices",
        input: "radio",
        stack: true,
        name: "83. Valor de oportunidade ideal",
        label:
          "Você conseguiria estimar o valor financeiro de uma oportunidade ideal gerada através do Club?",
        options: [
          "Até R$ 10 mil",
          { value: "R$ 10-50 mil", label: "R$ 10–50 mil" },
          { value: "R$ 50-100 mil", label: "R$ 50–100 mil" },
          { value: "R$ 100-500 mil", label: "R$ 100–500 mil" },
          "Acima de R$ 500 mil",
          "Não sei",
        ],
      },
    ],
  },
  {
    eyebrow: "Bloco 17",
    title: "NPS e percepção",
    fields: [
      {
        kind: "scale",
        name: "84. NPS",
        label:
          "De 0 a 10, quanto você recomendaria o Digital Club para outro empresário?",
      },
      {
        kind: "textarea",
        name: "85. O que faria dar nota maior",
        label: "O que mais poderia fazer você dar uma nota maior?",
      },
      {
        kind: "textarea",
        name: "86. O que não gostaria que acontecesse",
        label:
          "O que você não gostaria que acontecesse na sua experiência como membro?",
      },
    ],
  },
  {
    eyebrow: "Bloco 18",
    title: "Perguntas de ouro",
    fields: [
      {
        kind: "textarea",
        name: "87. Maior problema tentando resolver",
        label: "Qual é o maior problema que você está tentando resolver atualmente?",
      },
      {
        kind: "textarea",
        name: "88. Maior oportunidade tentando aproveitar",
        label: "Qual é a maior oportunidade que você está tentando aproveitar?",
      },
      {
        kind: "textarea",
        name: "89. Quem gostaria muito de conhecer",
        label: "Quem você gostaria muito de conhecer?",
      },
      {
        kind: "textarea",
        name: "90. O que pode oferecer para outros membros",
        label: "O que você pode oferecer para outros membros?",
      },
      {
        kind: "textarea",
        name: "91. O que precisa acontecer para ser sucesso",
        label:
          "O que precisa acontecer para você considerar sua participação no Digital Club um sucesso?",
      },
      {
        kind: "textarea",
        name: "92. Uma coisa nos próximos 30 dias",
        label:
          "Se pudéssemos fazer uma única coisa por você nos próximos 30 dias, o que deveria ser?",
      },
    ],
  },
  {
    eyebrow: "Bloco 19 — Pergunta final",
    title: "Uma última pergunta",
    fields: [
      {
        kind: "textarea",
        name: "93. Assunto que colocaria na mesa com os principais empresários",
        label:
          "Se você pudesse sentar hoje com os principais empresários do Digital Club e tivesse 30 minutos para pedir ajuda, trocar experiências ou buscar uma oportunidade, qual seria o assunto que você colocaria na mesa? Conte para nós.",
        minHeight: 110,
      },
    ],
  },
];
