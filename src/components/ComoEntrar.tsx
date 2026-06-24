"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Envie sua aplicação",
    copy: "Preencha o formulário compartilhando informações sobre sua trajetória e atuação empresarial.",
  },
  {
    num: "02",
    title: "Avaliação do perfil",
    copy: "Nossa equipe realiza uma análise para entender a aderência do candidato ao momento e aos objetivos da comunidade.",
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
        {/* Header */}
        <div data-reveal-left className="flex items-center gap-6 mb-16">
          <span className="font-display font-bold text-[80px] md:text-[120px] leading-none text-white/[0.06]">
            04
          </span>
          <div className="flex-1">
            <div data-line-grow className="h-px bg-white/[0.06]" />
          </div>
          <span className="text-accent/80 text-[11px] uppercase tracking-[0.4em]">
            Como entrar
          </span>
        </div>

        <h2 data-reveal className="font-display font-bold text-fluid-xl text-white uppercase max-w-4xl mb-24">
          Um processo
          <br />
          feito por <span className="text-gradient">curadoria.</span>
        </h2>

        {/* Steps */}
        <div data-stagger className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.04] border border-white/[0.04] mb-20">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[#24322c] p-10 md:p-12 group hover:bg-[#1f2b25] transition-colors duration-500"
            >
              <div className="flex items-center gap-4 mb-10">
                <span className="font-display font-bold text-5xl md:text-6xl text-accent/80 leading-none">
                  {step.num}
                </span>
                <div className="flex-1 h-px bg-white/[0.06] group-hover:bg-accent/20 transition-colors duration-500" />
              </div>
              <h3 className="font-display font-bold text-xl md:text-2xl text-white uppercase leading-tight mb-5">
                {step.title}
              </h3>
              <p className="text-white/50 text-sm md:text-[15px] leading-[1.9]">
                {step.copy}
              </p>
            </div>
          ))}
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
