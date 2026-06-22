"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function SeoArticle() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="relative bg-[#000000] border-t border-white/[0.04]">
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left label */}
          <div className="lg:col-span-3">
            <div data-reveal-left className="sticky top-32">
              <span className="text-accent/80 text-[11px] uppercase tracking-[0.4em]">
                Sobre o Clube
              </span>
              <div className="w-8 h-px bg-accent/30 mt-4" />
            </div>
          </div>

          {/* Right — Article content */}
          <article data-reveal className="lg:col-span-9 max-w-2xl">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white uppercase leading-[1.1] mb-8">
              O que é o <span className="text-gradient">Digital Club</span>
            </h2>

            <div className="space-y-6 text-white/50 text-[15px] leading-[2]">
              <p>
                O <strong className="text-white/70">Digital Club</strong> é uma comunidade exclusiva
                para <strong className="text-white/70">CEOs, donos e fundadores</strong> que buscam
                acesso, experiências premium e conexões estratégicas de alto valor na{" "}
                <strong className="text-white/70">Região Norte do Brasil</strong>. Reúne empresários
                que compartilham nível, visão e ambição em um ambiente pensado para gerar acesso,
                fortalecer conexões e abrir novos caminhos de crescimento.
              </p>

              <p>
                A experiência combina <strong className="text-white/70">relações estratégicas</strong>,{" "}
                <strong className="text-white/70">experiências exclusivas</strong>, acesso ao
                ecossistema do Grupo Digital, oportunidades de negócio e posicionamento. Cada encontro,
                vivência e aproximação é desenhado para ampliar a presença do membro, fortalecer sua
                influência e aproximá-lo das conversas que movem o mercado.
              </p>

              <p>
                O Digital Club não é uma comunidade aberta: cada membro passa por um processo de{" "}
                <strong className="text-white/70">curadoria</strong> que garante o nível de confiança,
                relevância e troca que a experiência exige. O clube nasce oficialmente durante o{" "}
                <strong className="text-white/70">DSX</strong>, a porta de entrada para a primeira turma
                de membros, com vagas disponibilizadas exclusivamente para participantes do evento.
              </p>
            </div>

            {/* Key facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/[0.04]">
              {[
                { label: "Comunidade", value: "Exclusiva" },
                { label: "Ingresso", value: "Curadoria" },
                { label: "Região", value: "Norte" },
                { label: "Porta de entrada", value: "DSX" },
              ].map((fact) => (
                <div key={fact.label}>
                  <span className="text-accent font-display font-bold text-xl block">
                    {fact.value}
                  </span>
                  <span className="text-white/40 text-[11px] uppercase tracking-[0.2em]">
                    {fact.label}
                  </span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
