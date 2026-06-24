"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" ref={ref} className="relative bg-[#000000]">
      {/* Top divider */}
      <div className="section-divider" />

      {/* Sticky text + scroll images */}
      <div className="min-h-screen flex flex-col justify-center py-40">
        <div className="max-w-[1600px] mx-auto px-8 md:px-12 w-full">
          {/* Split layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            {/* Left — Headline */}
            <div>
              <h2 data-reveal className="font-serif font-extralight text-fluid-xl text-white tracking-tight leading-[0.95]">
                Relações certas
                <br />
                geram
                <br />
                <span className="text-gradient">oportunidades</span>
                <br />
                maiores
              </h2>

              <div data-reveal-blur className="space-y-6 mt-12 max-w-md">
                <p className="text-white/55 text-base leading-[2]">
                  O Digital Club reúne empresários que compartilham nível, visão e
                  ambição em uma comunidade pensada para gerar acesso, fortalecer
                  conexões e abrir novos caminhos de crescimento.
                </p>
                <p className="text-white/55 text-base leading-[2]">
                  Cada encontro, experiência e aproximação é desenhado para ampliar
                  a presença do membro, fortalecer sua influência e aproximá-lo das
                  conversas que movem o mercado.
                </p>
              </div>
            </div>

            {/* Right — Staggered images with parallax + scale */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div data-img-reveal data-scale-in data-parallax="0.06" className="relative aspect-[3/4] mt-12">
                  <Image
                    src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1470"
                    alt="Networking"
                    fill
                    loading="eager"
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div data-img-reveal data-scale-in data-parallax="-0.04" className="relative aspect-[3/4]">
                  <Image
                    src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1470"
                    alt="Palestras"
                    fill
                    loading="eager"
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>

              {/* Rotating accent element */}
              <div
                data-rotate="0.03"
                className="absolute -top-8 -right-8 w-24 h-24 border border-accent/10 rounded-full pointer-events-none"
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
