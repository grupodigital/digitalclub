"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useRef, useEffect, useState } from "react";

const benefits = [
  {
    num: "01",
    title: "Relações\nEstratégicas",
    highlight: "Conexões de alto valor",
    copy: "Conecte-se a empresários, fundadores e líderes que compartilham ambição, visão de crescimento e capacidade de gerar oportunidades relevantes.",
    image: "/RELACOES-ESTRATEGICAS.png",
  },
  {
    num: "02",
    title: "Experiências\nExclusivas",
    highlight: "Vivências selecionadas",
    copy: "Participe de encontros, viagens, eventos e experiências cuidadosamente selecionadas para promover convivência, troca e acesso.",
    image: "/experiencia_digital_club.png",
  },
  {
    num: "03",
    title: "Acesso ao\nEcossistema",
    highlight: "Grupo Digital",
    copy: "Esteja próximo dos bastidores, eventos, iniciativas e conexões que fazem parte do maior ecossistema de negócios e inovação da Região Norte.",
    image: "/ecossistema_digital_club.png",
  },
  {
    num: "04",
    title: "Oportunidades\nde Negócio",
    highlight: "Apresentações estratégicas",
    copy: "Amplie seu alcance por meio de apresentações estratégicas, conexões qualificadas e relacionamentos construídos com confiança.",
    image: "/oportunidade_digital_club.png",
  },
  {
    num: "05",
    title: "Posicionamento",
    highlight: "Comunidade de referência",
    copy: "Faça parte de uma comunidade reconhecida por reunir empresários que lideram empresas relevantes e contribuem para o desenvolvimento da região.",
    image: "/posicionamento_digital_club.png",
  },
];

export default function Benefits() {
  const sectionRef = useScrollReveal();
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const wrapper = scrollRef.current;
    if (!container || !wrapper) return;

    const calculateWidth = () => {
      setScrollWidth(container.scrollWidth - window.innerWidth);
    };
    calculateWidth();
    window.addEventListener("resize", calculateWidth);

    const handleScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const windowH = window.innerHeight;
      const wrapperH = wrapper.offsetHeight;

      const start = rect.top;
      const travel = wrapperH - windowH;

      if (start <= 0 && start >= -travel) {
        const progress = Math.abs(start) / travel;
        if (container) {
          container.style.transform = `translateX(${-progress * scrollWidth}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", calculateWidth);
    };
  }, [scrollWidth]);

  return (
    <section id="benefits" ref={sectionRef} className="relative bg-[#24322c]">
      {/* Section header */}
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 pt-40 pb-20">
        <h2 data-reveal className="font-serif font-extralight text-[clamp(0.7rem,4.5vw,5rem)] whitespace-nowrap text-white tracking-tight">
          Um ambiente criado para gerar <span className="text-gradient">valor</span>
        </h2>

        <div data-reveal-blur className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-12 max-w-5xl">
          <p className="text-[#EDE8D9] text-base leading-[2]">
            O Digital Club foi desenhado para aproximar empresários em contextos
            onde relações ganham profundidade, oportunidades surgem naturalmente e
            novas perspectivas são construídas.
          </p>
          <p className="text-[#EDE8D9] text-base leading-[2]">
            A experiência combina relacionamento estratégico, acesso privilegiado e
            vivências exclusivas que fortalecem o capital relacional de cada membro.
          </p>
        </div>
      </div>

      {/* Horizontal scroll area */}
      <div ref={scrollRef} className="relative" style={{ height: `${benefits.length * 100}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          <div
            ref={containerRef}
            className="flex items-center h-full gap-8 px-8 md:px-12 will-change-transform"
            style={{ width: `${benefits.length * 70}vw` }}
          >
            {benefits.map((b) => (
              <div
                key={b.num}
                className="relative flex-shrink-0 w-[85vw] md:w-[65vw] h-[75vh] group"
              >
                {/* Image with scale on scroll */}
                <div className="absolute inset-0 overflow-hidden" data-scale-in>
                  <Image
                    src={b.image}
                    alt={b.title}
                    fill
                    quality={100}
                    className="object-cover transition-transform duration-[2s]"
                    sizes="80vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                </div>

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-14">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-accent text-[11px] font-mono tracking-wider">
                      {b.num}
                    </span>
                    <div className="w-8 h-px bg-accent/40" />
                  </div>

                  <h3 className="font-serif font-extralight text-4xl md:text-6xl lg:text-7xl text-white whitespace-pre-line tracking-tight leading-[0.95] mb-6">
                    {b.title}
                  </h3>

                  <p className="text-[#EDE8D9] text-sm md:text-base max-w-lg leading-relaxed">
                    {b.copy}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20">
                  <div className="absolute top-6 right-6 w-8 h-px bg-accent/30" />
                  <div className="absolute top-6 right-6 w-px h-8 bg-accent/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
