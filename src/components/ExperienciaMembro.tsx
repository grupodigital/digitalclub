"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  {
    num: "01",
    title: "Acessos VIP ao Digital Summit Experience",
    copy: "O membro conta com 3 acessos VIP para o DSX, o principal evento de negócios, marketing, vendas e inovação da Região Norte. Uma oportunidade para estar no maior ambiente de conexão empresarial do ecossistema Digital.",
  },
  {
    num: "02",
    title: "Acessos VIP ao Amazon IA Summit",
    copy: "O membro conta com 3 acessos VIP para o Amazon IA Summit, evento voltado à inteligência artificial, tecnologia, inovação e transformação dos negócios. Uma entrega pensada para ampliar repertório, visão de futuro e proximidade com tendências que impactam empresas e lideranças.",
  },
  {
    num: "03",
    title: "Acessos VIP ao Sintonia de Mulher",
    copy: "O membro conta com 3 acessos VIP para o Sintonia de Mulher, uma das principais experiências do Grupo Digital voltada a liderança, empreendedorismo, desenvolvimento e protagonismo feminino. Uma oportunidade de relacionamento, posicionamento e conexão com uma audiência empresarial relevante.",
  },
  {
    num: "04",
    title: "Acessos para imersões presenciais",
    copy: "O membro conta com 3 acessos para cada imersão realizada ao longo do ano, considerando uma programação de 4 imersões anuais. Essas experiências aproximam empresários de conteúdos, especialistas, práticas e ambientes pensados para gerar desenvolvimento, troca e novas perspectivas de crescimento.",
  },
  {
    num: "05",
    title: "Viagem anual de networking",
    copy: "Uma vez ao ano, o Digital Club promove uma viagem de networking para fortalecer a convivência entre membros, ampliar repertório e criar relações em um ambiente fora da rotina empresarial. Uma experiência criada para gerar proximidade, confiança e conversas de maior profundidade.",
  },
  {
    num: "06",
    title: "Acesso ao Digital Educa",
    copy: "O membro tem acesso ao Digital Educa, a frente de educação do ecossistema Digital, com conteúdos, formações e experiências voltadas ao desenvolvimento empresarial, liderança, gestão, marketing, inovação e crescimento. Uma camada contínua de conhecimento para fortalecer repertório e tomada de decisão.",
  },
  {
    num: "07",
    title: "Encontros presenciais mensais",
    copy: "O Digital Club realiza 2 encontros por mês, em formatos como jantares, happy hours, encontros reservados e experiências presenciais. Esses momentos são criados para aproximar membros, estimular conversas estratégicas e gerar relações com mais contexto, confiança e intenção.",
  },
];

export default function ExperienciaMembro() {
  const ref = useScrollReveal();

  return (
    <section id="experiencia" ref={ref} className="relative bg-[#000000]">
      <div className="section-divider" />

      <div className="max-w-[1600px] mx-auto px-8 md:px-12 py-40">
        {/* Header — eyebrow (consta na copy) */}
        <div data-reveal-left className="flex items-center gap-6 mb-16">
          <span className="text-accent/80 text-[11px] uppercase tracking-[0.4em]">
            A experiência do membro
          </span>
          <div className="flex-1">
            <div data-line-grow className="h-px bg-white/[0.06]" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-28">
          <h2 data-reveal className="font-serif font-extralight text-fluid-xl text-white tracking-tight leading-[0.95]">
            Uma comunidade
            <br />
            exclusiva, operada
            <br />
            com <span className="text-gradient">intenção</span>
          </h2>

          <div className="flex items-end">
            <div data-reveal-blur className="space-y-6 max-w-lg">
              <p className="text-[#EDE8D9] text-base leading-[2]">
                O Digital Club combina relacionamento estratégico, encontros
                presenciais, experiências exclusivas e acesso ao ecossistema do
                Grupo Digital.
              </p>
              <p className="text-[#EDE8D9] text-base leading-[2]">
                Cada entrega foi pensada para aproximar o membro de ambientes,
                pessoas e oportunidades que ampliam seu capital relacional e
                fortalecem sua presença no mercado.
              </p>
              <p className="text-[#EDE8D9] text-base leading-[2]">
                Mais do que benefícios isolados, a experiência cria uma jornada
                contínua de acesso, convivência e relacionamento de alto valor.
              </p>
            </div>
          </div>
        </div>

        {/* Numbered list of deliverables */}
        <div data-stagger className="border-t border-white/[0.06]">
          {items.map((item) => (
            <div
              key={item.num}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-12 border-b border-white/[0.06] hover:bg-white/[0.015] transition-colors duration-500 px-2 md:px-4"
            >
              <div className="md:col-span-1 flex items-start">
                <span className="font-display font-bold text-2xl md:text-3xl text-accent/70 leading-none group-hover:text-accent transition-colors duration-500">
                  {item.num}
                </span>
              </div>
              <div className="md:col-span-5">
                <h3 className="font-serif font-extralight text-xl md:text-2xl text-white tracking-tight leading-[1.15]">
                  {item.title}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-[#EDE8D9] text-sm md:text-[15px] leading-[1.9] max-w-xl">
                  {item.copy}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing note */}
        <div data-reveal-blur className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-[#EDE8D9] text-base md:text-lg leading-[1.8]">
              O Digital Club foi desenhado para entregar presença contínua no
              ecossistema, relacionamento qualificado e acesso a experiências que
              ampliam o valor de cada membro.
            </p>
            <p className="text-[#EDE8D9] text-base leading-[2]">
              Tudo existe para fortalecer o mesmo objetivo: aproximar empresários
              das pessoas, conversas e oportunidades certas.
            </p>
          </div>
          <div className="lg:col-span-5 flex items-start">
            <p className="text-[#EDE8D9] text-[13px] leading-[1.9] border-l border-accent/20 pl-6">
              Os acessos, encontros e experiências seguem o calendário oficial do
              Grupo Digital e podem estar sujeitos à confirmação de datas,
              disponibilidade e regras específicas de cada evento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
