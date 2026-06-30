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

      <div className="max-w-[1600px] mx-auto px-8 md:px-12 pt-20 pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center justify-center">
          {/* Esquerda — título + descrição */}
          <div>
            <h2 className="font-serif font-extralight text-[clamp(1.3rem,2.7vw,2.8rem)] text-white tracking-tight leading-[1.1]">
              O valor de uma comunidade
              <br />
              é definido por <span className="text-gradient">quem faz parte dela</span>
            </h2>

            <div className="mt-10 space-y-6 max-w-md">
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

          {/* Direita — Destaques */}
          <div className="relative">
            {/* Glow ambiente para realçar o vidro */}
            <div className="pointer-events-none absolute -inset-6 -z-10 overflow-hidden">
              <div className="absolute -top-10 right-0 h-64 w-64 rounded-full bg-[#5F8970]/25 blur-[110px]" />
              <div className="absolute bottom-0 -left-10 h-72 w-72 rounded-full bg-[#5F8970]/30 blur-[120px]" />
            </div>

            <span className="text-accent/80 text-[11px] uppercase tracking-[0.4em]">
              Destaques
            </span>
            <div className="mt-6 space-y-4">
              {profiles.map((profile) => (
                <div
                  key={profile}
                  className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-gradient-to-b from-[#2f4138]/70 to-[#24322c]/35 backdrop-blur-xl px-7 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] transition-all duration-500 hover:border-white/30 hover:from-[#36493f]/85 hover:to-[#24322c]/50"
                >
                  <div className="w-10 h-10 flex-shrink-0 rounded-xl border border-white/20 bg-white/[0.08] flex items-center justify-center group-hover:border-accent/60 transition-colors duration-500">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-white text-[15px] md:text-base">{profile}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
