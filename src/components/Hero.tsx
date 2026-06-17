"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-[#080f13]">
      {/* ── Full-bleed background image ── */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070"
          alt="Evento de negócios e networking empresarial"
          fill
          className={`object-cover transition-all duration-[3s] ease-out ${imgLoaded ? "opacity-40 scale-100" : "opacity-0 scale-105"}`}
          priority
          sizes="100vw"
          onLoad={() => setImgLoaded(true)}
        />
        <div className="absolute inset-0 bg-[#080f13]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080f13] via-transparent to-[#080f13]/80" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 h-full flex flex-col justify-between max-w-[1600px] mx-auto px-8 md:px-12 w-full">
        {/* Top — spacer + eyebrow */}
        <div className="pt-32">
          <div
            className={`flex items-center gap-5 transition-all duration-1000 delay-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="w-10 h-px bg-accent" />
            <span className="text-accent text-[11px] uppercase tracking-[0.5em] font-medium">
              Digital Club
            </span>
          </div>
        </div>

        {/* Center — headline */}
        <div className="flex-1 flex items-center -mt-10">
          <h1 className="sr-only">
            Digital Club — Comunidade exclusiva para CEOs, donos e fundadores que movem o Norte do Brasil
          </h1>
          <div aria-hidden="true">
            {/* Each line animates separately */}
            <div className="overflow-hidden z-[1] relative">
              <p className={`font-display font-bold text-[9vw] md:text-[8vw] lg:text-[7vw] text-white uppercase leading-[1.1] tracking-tight transition-all duration-[1.4s] delay-[0.3s] ease-[cubic-bezier(0.16,1,0.3,1)] ${loaded ? "translate-y-0" : "translate-y-[120%]"}`}>
                O ambiente certo
              </p>
            </div>
            <div className="overflow-hidden z-[2] relative">
              <p className={`font-display font-bold text-[9vw] md:text-[8vw] lg:text-[7vw] uppercase leading-[1.1] tracking-tight transition-all duration-[1.4s] delay-[0.5s] ease-[cubic-bezier(0.16,1,0.3,1)] ${loaded ? "translate-y-0" : "translate-y-[120%]"}`}>
                <span className="text-gradient">para quem move</span>
              </p>
            </div>
            <div className="overflow-hidden z-[1] relative">
              <p className={`font-display font-bold text-[9vw] md:text-[8vw] lg:text-[7vw] text-white uppercase leading-[1.1] tracking-tight transition-all duration-[1.4s] delay-[0.7s] ease-[cubic-bezier(0.16,1,0.3,1)] ${loaded ? "translate-y-0" : "translate-y-[120%]"}`}>
                o Norte do Brasil<span className="text-accent">.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={`pb-10 transition-all duration-1000 delay-[1.4s] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-white/[0.08] pt-8">
            {/* Left — positioning */}
            <div className="flex items-center gap-8">
              <p className="text-white/50 text-sm md:text-[15px] max-w-xl leading-relaxed">
                O Digital Club é uma comunidade exclusiva para CEOs, donos e
                fundadores que buscam acesso, experiências premium e conexões
                estratégicas de alto valor.
              </p>
            </div>

            {/* Right — CTA */}
            <a
              href="#cta"
              className="btn-fill inline-flex items-center gap-4 px-10 py-5 border border-accent/40 text-accent hover:text-white text-[11px] uppercase tracking-[0.3em] font-medium transition-colors duration-500 w-fit group whitespace-nowrap"
            >
              Solicite sua aplicação
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Scroll line ── */}
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 delay-[2s] ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-accent/50" />
      </div>
    </section>
  );
}
