"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Play } from "lucide-react";

const events = [
  {
    name: "DSX",
    full: "Digital Summit Experience",
    tag: "Transformação Digital",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070",
  },
  {
    name: "Amazon IA",
    full: "Amazon Inteligência Artificial",
    tag: "Inteligência Artificial",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1470",
  },
  {
    name: "Leaders AI",
    full: "Leaders AI Conference",
    tag: "Liderança & Tech",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1470",
  },
];

export default function SocialProof() {
  const ref = useScrollReveal();

  return (
    <section id="events" ref={ref} className="relative bg-[#080f13]">
      {/* Marquee divider */}
      <div className="overflow-hidden border-t border-white/[0.04] py-6">
        <div className="animate-marquee-reverse whitespace-nowrap flex">
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-16 mx-16 font-display font-bold text-[80px] md:text-[120px] text-white/[0.015] uppercase leading-none"
            >
              Eventos
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
            Prova Social
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <h2 data-reveal className="font-display font-bold text-fluid-xl text-white uppercase leading-[0.95]">
            Os maiores
            <br />
            eventos da
            <br />
            <span className="text-gradient">região Norte</span>
          </h2>
          <div className="flex items-end">
            <p data-reveal-blur className="text-white/55 text-base leading-[2] max-w-md">
              Um ambiente de crescimento, negócios e conexões reais.
              Cada evento é uma oportunidade de transformar sua visão de negócio.
            </p>
          </div>
        </div>

        {/* Video block with scale-in */}
        <div data-reveal-scale className="relative aspect-video md:aspect-[21/9] overflow-hidden mb-32 group cursor-pointer">
          <div data-scale-in className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070"
              alt="Eventos Digital Club"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-[#080f13]/50 group-hover:bg-[#080f13]/30 transition-colors duration-700" />

          {/* Play */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-20" />
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent/60 group-hover:scale-110 transition-all duration-700 backdrop-blur-sm bg-white/5">
                <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="white" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
            <span className="text-white/55 text-[10px] uppercase tracking-[0.3em]">
              Highlights 2025
            </span>
          </div>
        </div>

        {/* Events grid — asymmetric with parallax */}
        <div data-stagger className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {events.map((event, i) => {
            const colSpan = i === 0 ? "md:col-span-6" : "md:col-span-3";
            const aspect = i === 0 ? "aspect-[4/3]" : "aspect-[3/4]";
            const parallax = i === 0 ? "0.04" : i === 1 ? "-0.03" : "0.05";

            return (
              <div key={event.name} className={`${colSpan} group cursor-pointer`}>
                <div data-parallax={parallax} className={`relative ${aspect} overflow-hidden mb-6`} data-scale-in>
                  <Image
                    src={event.image}
                    alt={event.full}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                    sizes={i === 0 ? "50vw" : "25vw"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080f13]/80 to-transparent" />

                  <div className="absolute top-6 left-6">
                    <span className="text-white/55 text-[10px] uppercase tracking-[0.3em] border border-white/10 px-3 py-1">
                      {event.tag}
                    </span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-2xl md:text-3xl uppercase text-white group-hover:text-accent transition-colors duration-500">
                  {event.name}
                </h3>
                <p className="text-white/50 text-sm mt-2">{event.full}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
