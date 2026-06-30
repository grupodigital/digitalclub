"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Envie sua aplicação",
    copy: "Preencha o formulário compartilhando informações sobre sua trajetória, atuação empresarial e interesse em fazer parte do Digital Club.",
  },
  {
    num: "02",
    title: "Avaliação do perfil",
    copy: "Nossa equipe realiza uma análise para entender a aderência do candidato ao momento da comunidade, ao perfil dos membros e aos objetivos do clube.",
  },
  {
    num: "03",
    title: "Convite para ingresso",
    copy: "Os candidatos aprovados recebem o convite para integrar o Digital Club e iniciar sua jornada como membro.",
  },
];

export default function ComoEntrar() {
  const ref = useScrollReveal();

  return (
    <section id="como" ref={ref} className="relative bg-[#24322c]">
      <div className="section-divider" />

      <div className="max-w-[1600px] mx-auto px-8 md:px-12 py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20 items-start">
          {/* Esquerda — título + descrição */}
          <div>
            {/* Kicker decorativo */}
            <div aria-hidden="true" className="mb-10 flex items-center gap-3">
              <span className="h-px w-12 bg-accent/50" />
              <span className="h-1 w-1 rounded-full bg-accent/50" />
            </div>

            <h2 className="font-serif font-extralight text-[clamp(1.3rem,2.7vw,2.8rem)] text-white tracking-tight leading-[1.1]">
              A entrada acontece
              <br />
              por aplicação e <span className="text-gradient">curadoria</span>
            </h2>

            <div className="mt-10 space-y-6 max-w-lg">
              <p className="text-[#EDE8D9] text-base leading-[2]">
                O Digital Club foi criado para preservar a qualidade das relações
                entre seus membros.
              </p>
              <p className="text-[#EDE8D9] text-base leading-[2]">
                Por isso, o processo de entrada não funciona como uma compra comum.
                Cada aplicação passa por análise para entender a aderência do
                candidato ao momento, aos objetivos e ao nível da comunidade.
              </p>
            </div>

            {/* Traços decorativos */}
            <div aria-hidden="true" className="mt-16 flex items-center gap-2">
              <span className="h-px w-24 bg-gradient-to-r from-accent/40 to-transparent" />
              <span className="h-px w-6 bg-accent/25" />
              <span className="h-px w-2 bg-accent/15" />
            </div>
          </div>

          {/* Direita — timeline vertical */}
          <div className="relative">
            <div className="absolute left-8 top-8 bottom-8 w-px overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-accent/0 via-accent/30 to-accent/0" />
              <div className="timeline-streak-y absolute left-0 w-full h-[18%] bg-gradient-to-b from-transparent via-accent to-transparent" />
            </div>
            <div className="space-y-12">
              {steps.map((step) => (
                <div key={step.num} className="relative pl-24">
                  <div className="absolute left-0 top-0 z-10 flex h-16 w-16 items-center justify-center rounded-full border border-accent/40 bg-[#1f2b25] shadow-[0_0_0_8px_#24322c]">
                    <span className="font-display font-bold text-xl text-accent">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="font-serif font-extralight text-xl text-white tracking-tight leading-tight mt-1 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#EDE8D9] text-sm leading-[1.9]">{step.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div data-reveal className="flex justify-center">
          <a
            href="#cta"
            className="btn-fill group inline-flex items-center gap-5 px-12 py-6 border border-accent/40 text-accent hover:text-black text-[12px] uppercase tracking-[0.3em] font-medium transition-colors duration-500"
          >
            Aplicar para o Digital Club
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
          </a>
        </div>
      </div>
    </section>
  );
}
