"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";

export default function DSX() {
  const ref = useScrollReveal();

  return (
    <section id="dsx" ref={ref} className="relative bg-[#24322c] overflow-hidden">
      <div className="divider-glow" />

      {/* Background */}
      <div className="absolute inset-0">
        <div data-scale-in className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070"
            alt="DSX — lançamento do Digital Club na Região Norte"
            fill
            className="object-cover opacity-30"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-12 py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-end">
          {/* Left — Headline */}
          <h2 data-reveal className="font-serif font-extralight text-fluid-xl text-white tracking-tight leading-[0.95]">
            O Digital Club
            <br />
            nasce oficialmente
            <br />
            durante o <span className="text-gradient">DSX</span>
          </h2>

          {/* Right — Body */}
          <div data-reveal-blur className="space-y-6 max-w-lg">
            <p className="text-[#EDE8D9] text-base md:text-lg leading-[1.9]">
              Nos dias <strong className="text-white">23 e 24</strong>, empresários,
              fundadores e líderes da Região Norte terão acesso à apresentação da
              comunidade e ao processo de ingresso para a primeira turma de membros.
            </p>
            <p className="text-[#EDE8D9] text-base leading-[2]">
              Mais do que um lançamento, este será o início de um ambiente criado
              para conectar quem influencia o desenvolvimento da região.
            </p>
          </div>
        </div>

        {/* Highlight + CTA */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border-t border-white/[0.08] pt-16">
          <div data-reveal-left className="flex items-start gap-5">
            <div className="w-10 h-px bg-accent mt-4 flex-shrink-0" />
            <p className="text-white/80 text-lg md:text-xl leading-[1.6] font-light max-w-md">
              As primeiras aplicações serão abertas{" "}
              <span className="text-accent">exclusivamente para participantes do DSX.</span>
            </p>
          </div>

          <div data-reveal-right className="flex lg:justify-end">
            <a
              href="#cta"
              className="btn-fill group inline-flex items-center gap-5 px-12 py-6 border border-accent/40 text-accent hover:text-white text-[12px] uppercase tracking-[0.3em] font-medium transition-colors duration-500"
            >
              Participar do DSX
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
