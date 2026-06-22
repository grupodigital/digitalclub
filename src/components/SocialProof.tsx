"use client";

import Image from "next/image";
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
      {/* Marquee divider */}
      <div className="overflow-hidden border-t border-white/[0.04] py-6">
        <div className="animate-marquee-reverse whitespace-nowrap flex">
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-16 mx-16 font-display font-bold text-[80px] md:text-[120px] text-white/[0.015] uppercase leading-none"
            >
              Curadoria
              <span className="text-accent/[0.12]">·</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 md:px-12 py-40">
        {/* Header */}
        <div data-reveal-left className="flex items-center gap-6 mb-16">
          <span className="font-display font-bold text-[80px] md:text-[120px] leading-none text-white/[0.06]">
            03
          </span>
          <div className="flex-1">
            <div data-line-grow className="h-px bg-white/[0.06]" />
          </div>
          <span className="text-accent/80 text-[11px] uppercase tracking-[0.4em]">
            Quem está na sala
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          <h2 data-reveal className="font-display font-bold text-fluid-xl text-white uppercase leading-[0.95]">
            O valor de uma
            <br />
            comunidade é definido
            <br />
            por <span className="text-gradient">quem faz parte dela</span>
          </h2>
          <div className="flex items-end">
            <div data-reveal-blur className="space-y-6 max-w-md">
              <p className="text-white/55 text-base leading-[2]">
                O Digital Club não é uma comunidade aberta. Cada membro passa por um
                processo de curadoria para garantir que as relações construídas dentro
                do clube mantenham o nível de confiança, relevância e troca que a
                experiência exige.
              </p>
              <p className="text-white/55 text-base leading-[2]">
                A força da comunidade está na qualidade dos empresários que a compõem.
                Por isso, reunimos líderes que compartilham valores semelhantes: visão
                de longo prazo, protagonismo empresarial e desejo genuíno de construir
                relações de valor.
              </p>
            </div>
          </div>
        </div>

        {/* Ambient image band */}
        <div data-reveal-scale className="relative aspect-video md:aspect-[21/9] overflow-hidden mb-32">
          <div data-scale-in className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069"
              alt="Empresários e líderes em ambiente de curadoria do Digital Club"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-[#000000]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
            <span className="text-white/55 text-[10px] uppercase tracking-[0.3em]">
              Comunidade por curadoria
            </span>
          </div>
        </div>

        {/* Member profiles — Destaques */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <span data-reveal-left className="text-accent/80 text-[11px] uppercase tracking-[0.4em]">
              Destaques
            </span>
            <p data-reveal-blur className="text-white/40 text-sm leading-[1.9] mt-6 max-w-xs">
              Perfis que compõem a primeira turma de membros do Digital Club.
            </p>
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
