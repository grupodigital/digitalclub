"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const offerings = [
  {
    name: "DSX Mastermind",
    lead: "Quatro encontros presenciais exclusivos por ano.",
    copy: "Ambiente reservado para empresários discutirem desafios estratégicos, compartilharem experiências e tomarem melhores decisões para suas empresas.",
  },
  {
    name: "DSX Inside",
    lead: "Visitas técnicas aos bastidores de empresas referência.",
    copy: "Acesso a processos, estratégias, cultura e indicadores diretamente com empresários que estão construindo negócios de sucesso.",
  },
  {
    name: "DSX Advisory",
    lead: "Mentorias estratégicas mensais em grupo.",
    copy: "Encontros recorrentes para discutir temas essenciais ao crescimento do negócio, como vendas, marketing, gestão, liderança, finanças, inteligência artificial, pessoas e estratégia.",
  },
  {
    name: "Digital Educa",
    lead: "Acesso ilimitado à plataforma educacional do Grupo Digital.",
    copy: "Além do acesso do membro, o conteúdo pode ser disponibilizado para até 4 colaboradores da empresa.",
    tagsLabel: "Trilhas",
    tags: ["Gestão", "Vendas", "Marketing", "Liderança", "Tecnologia", "IA", "Estratégia"],
  },
  {
    name: "Digital Hub + DSX Connect",
    lead: "Aplicativo e comunidade exclusiva dos membros.",
    copy: "Uma plataforma para fortalecer networking empresarial, diretório de membros, grupo fechado, oportunidades de negócio, indicações e parcerias.",
  },
  {
    name: "DSX Experiences",
    lead: "Experiências exclusivas para fortalecer conexões genuínas.",
    copy: "Momentos presenciais criados para aproximar membros em ambientes mais leves, sofisticados e relacionais.",
    tagsLabel: "Experiências previstas",
    tags: ["DSX Chef", "DSX Fishing", "DSX Wine Experience", "DSX Family Day"],
  },
];

const bonuses = [
  {
    name: "DSX Summit 2027",
    copy: "2 ingressos VIP para o DSX Summit 2027.",
  },
  {
    name: "Amazon IA Summit 2026 e 2027",
    copy: "2 ingressos VIP para o Amazon IA Summit 2026 e 2027.",
  },
  {
    name: "Sintonia de Mulher 2027",
    copy: "2 ingressos VIP para o Sintonia de Mulher 2027.",
  },
  {
    name: "Imersões e formações do Grupo Digital",
    copy: "Acesso ilimitado a todas as imersões e formações do Grupo Digital durante a vigência ativa no Club.",
  },
];

export default function ExperienciaMembro() {
  const ref = useScrollReveal();

  return (
    <section id="experiencia" ref={ref} className="relative bg-[#000000]">
      <div className="section-divider" />

      <div className="max-w-[1600px] mx-auto px-8 md:px-12 py-40">
        {/* Header — eyebrow */}
        <div data-reveal-left className="flex items-center gap-6 mb-16">
          <span className="text-accent/80 text-[11px] uppercase tracking-[0.4em]">
            O que você recebe como membro
          </span>
          <div className="flex-1">
            <div data-line-grow className="h-px bg-white/[0.06]" />
          </div>
        </div>

        {/* Headline + intro — coluna única */}
        <div className="mb-24">
          <h2 data-reveal className="font-serif font-extralight text-[clamp(0.5rem,2vw,2.4rem)] whitespace-nowrap text-white tracking-tight leading-[1.1]">
            Uma comunidade exclusiva para acessar repertório, conexões e{" "}
            <span className="text-gradient">oportunidades de alto valor</span>
          </h2>

          <div className="mt-10 space-y-6 max-w-3xl">
            <p className="text-[#EDE8D9] text-base leading-[2]">
              O Digital Club reúne encontros estratégicos, mentorias,
              experiências, formações e uma comunidade ativa para aproximar
              empresários das pessoas, conversas e decisões certas.
            </p>
            <p className="text-[#EDE8D9] text-base leading-[2]">
              Cada entrega foi desenhada para ampliar visão, fortalecer
              relacionamento e gerar mais acesso dentro do ecossistema do Grupo
              Digital.
            </p>
          </div>
        </div>

        {/* Offering cards */}
        <div data-stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {offerings.map((item) => (
            <div
              key={item.name}
              className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-8 transition-colors duration-500 hover:bg-white/[0.04] hover:border-white/[0.14]"
            >
              {/* Label + divider */}
              <span className="text-accent text-[11px] uppercase tracking-[0.25em]">
                {item.name}
              </span>
              <div className="h-px bg-white/[0.1] my-5 group-hover:bg-accent/30 transition-colors duration-500" />

              {/* Lead */}
              <p className="text-white text-[17px] leading-snug font-light mb-4">
                {item.lead}
              </p>

              {/* Description */}
              <p className="text-[#EDE8D9]/70 text-[14px] leading-[1.8]">
                {item.copy}
              </p>

              {/* Tags / chips */}
              {item.tags && (
                <div className="mt-7">
                  <span className="text-white/40 text-[10px] uppercase tracking-[0.3em]">
                    {item.tagsLabel}
                  </span>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[0.12] bg-white/[0.03] px-3 py-1.5 text-[12px] text-[#EDE8D9]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bônus exclusivos */}
        <div className="mt-20 rounded-2xl border border-accent/20 bg-accent/[0.03] p-8 md:p-12">
          <div className="flex items-center gap-5 mb-10">
            <span className="text-accent text-[11px] uppercase tracking-[0.35em]">
              Bônus exclusivos
            </span>
            <div className="flex-1 h-px bg-accent/15" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {bonuses.map((bonus) => (
              <div key={bonus.name} className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <div>
                  <p className="text-white text-[15px] font-medium mb-1">
                    {bonus.name}
                  </p>
                  <p className="text-[#EDE8D9]/70 text-[14px] leading-[1.7]">
                    {bonus.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing + fine print */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">
          <div className="lg:col-span-7">
            <p className="text-[#EDE8D9] text-base md:text-lg leading-[1.9]">
              O Digital Club foi estruturado para entregar presença contínua no
              ecossistema, desenvolvimento empresarial, relacionamento qualificado
              e acesso a experiências que ampliam o valor de cada membro.
            </p>
          </div>
          <div className="lg:col-span-5 flex items-start">
            <p className="text-[#EDE8D9]/45 text-[13px] leading-[1.9] border-l border-accent/20 pl-6">
              Acessos, bônus, encontros, experiências, formações e benefícios
              seguem o calendário oficial do Grupo Digital e podem estar sujeitos à
              confirmação de datas, disponibilidade, regras específicas de cada
              evento e vigência ativa do membro no Digital Club.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
