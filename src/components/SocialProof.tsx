"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check } from "lucide-react";

const profiles = [
  "CEOs e presidentes",
  "Donos e sócios de empresas",
  "Fundadores e empreendedores",
  "Executivos com poder de decisão",
  "Empresários da Região Norte",
];

export default function SocialProof() {
  const ref = useScrollReveal();

  return (
    <section id="quem" ref={ref} className="relative bg-[#000000]">
      <div className="section-divider" />

      <div className="max-w-[1600px] mx-auto px-8 md:px-12 py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          <h2 data-reveal className="font-serif font-extralight text-[clamp(1.3rem,2.7vw,2.8rem)] text-white tracking-tight leading-[1.1]">
            O valor de uma comunidade
            <br />
            é definido por <span className="text-gradient">quem faz parte dela</span>
          </h2>
          <div className="flex items-end">
            <div data-reveal-blur className="space-y-6 max-w-md">
              <p className="text-[#EDE8D9] text-base leading-[2]">
                O Digital Club não é uma comunidade aberta. Cada membro passa por um
                processo de curadoria para garantir que as relações construídas dentro
                do clube mantenham o nível de confiança, relevância e troca que a
                experiência exige.
              </p>
              <p className="text-[#EDE8D9] text-base leading-[2]">
                A força da comunidade está na qualidade dos empresários que a compõem.
                Por isso, reunimos líderes que compartilham valores semelhantes: visão
                de longo prazo, protagonismo empresarial e desejo genuíno de construir
                relações de valor.
              </p>
            </div>
          </div>
        </div>

        {/* Member profiles — Destaques */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <span data-reveal-left className="text-accent/80 text-[11px] uppercase tracking-[0.4em]">
              Destaques
            </span>
          </div>

          <div data-stagger className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04] border border-white/[0.04]">
            {profiles.map((profile) => (
              <div
                key={profile}
                className="flex items-center gap-4 bg-[#000000] px-8 py-8 group hover:bg-[#0d0d0d] transition-colors duration-500"
              >
                <div className="w-9 h-9 flex-shrink-0 border border-accent/30 flex items-center justify-center group-hover:border-accent/60 transition-colors duration-500">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <span className="text-white/80 text-[15px] md:text-base">{profile}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
