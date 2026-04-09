"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function SeoArticle() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="relative bg-[#080f13] border-t border-white/[0.04]">
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
                O <strong className="text-white/70">Digital Club</strong> é um ecossistema exclusivo
                de experiências para <strong className="text-white/70">CEOs, Fundadores e Donos de
                negócios no Amazonas, Brasil</strong>. Fundado em 2023, reúne mais de 100 membros
                empresariais com acesso aos maiores eventos de negócios, imersões técnicas aplicadas,
                networking estratégico e educação contínua de mercados.
              </p>

              <p>
                Os membros têm acesso VIP a três grandes eventos:{" "}
                <strong className="text-white/70">DSX — Digital Summit Experience</strong> (Transformação
                Digital), <strong className="text-white/70">Amazon IA</strong> (Inteligência Artificial
                aplicada a negócios) e <strong className="text-white/70">Leaders AI Conference</strong>{" "}
                (Liderança e Tecnologia). Além dos eventos, o clube oferece 4 imersões técnicas anuais
                em Negócios, Gestão, Marketing e Vendas, jantar exclusivo com líderes do mercado e
                acesso à plataforma <strong className="text-white/70">Digital Educa</strong> com
                conteúdos e formação contínua para toda a equipe.
              </p>

              <p>
                A adesão inclui 9 ingressos VIP, 12 ingressos para imersões, acesso antecipado a
                pré-eventos e a possibilidade de levar +1 da empresa sem custo adicional. O Digital
                Club está sediado no Amazonas e é o ecossistema de referência para líderes que
                valorizam acesso exclusivo, networking estratégico e crescimento real dos seus negócios.
              </p>
            </div>

            {/* Key facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/[0.04]">
              {[
                { label: "Fundado", value: "2023" },
                { label: "Membros", value: "100+" },
                { label: "Eventos VIP", value: "3" },
                { label: "Imersões/ano", value: "4" },
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
