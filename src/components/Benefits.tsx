"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useRef, useEffect, useState } from "react";

const benefits = [
  {
    num: "01",
    title: "Eventos",
    highlight: "9 VIPs",
    copy: "3 VIPs para o DSX · 3 VIPs para o Amazon IA · 3 VIPs para o Leaders AI Conference. Acesso completo aos maiores eventos de negócios, inovação e tecnologia do Norte.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070",
  },
  {
    num: "02",
    title: "Imersões",
    highlight: "4 imersões",
    copy: "3 ingressos para quatro imersões técnicas em Negócios, Gestão, Marketing e Vendas.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070",
  },
  {
    num: "03",
    title: "Convidado",
    highlight: "+1 grátis",
    copy: "Leve mais um da sua empresa sem custo adicional. Multiplique o valor do seu investimento compartilhando a experiência com quem faz acontecer ao seu lado.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070",
  },
  {
    num: "04",
    title: "Jantar\nExclusivo",
    highlight: "À mesa",
    copy: "Enquanto a maioria assiste palestras de longe, você está à mesa com os maiores nomes do mercado. É nesse círculo que as conversas mais importantes acontecem, onde negócios são discutidos, parcerias são formadas e oportunidades são criadas.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070",
  },
  {
    num: "05",
    title: "Pré-eventos",
    highlight: "Acesso antecipado",
    copy: "Acesso aos pré-eventos de lançamento das nossas imersões e eventos inclusos. Você sabe sobre eventos antes de qualquer pessoa, escolhe os melhores horários e locais, traz convidados especiais e tem vantagem competitiva sobre quem não está no Digital Club.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2070",
  },
  {
    num: "06",
    title: "Digital\nEduca",
    highlight: "Plataforma",
    copy: "Acesso à plataforma Digital Educa com conteúdos dos eventos e aulas exclusivas para todo o seu time. Revise aulas quantas vezes quiser, aprenda no seu ritmo, acesse conteúdo de especialistas, compartilhe com seu time e implemente o conhecimento imediatamente.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070",
  },
  {
    num: "07",
    title: "Networking",
    highlight: "Comunidade",
    copy: "Grupo de networking e negócios com todos os membros do Digital Club.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070",
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
    <section id="benefits" ref={sectionRef} className="relative bg-[#080f13]">
      {/* Section header */}
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 pt-40 pb-20">
        <div data-reveal-left className="flex items-center gap-6 mb-16">
          <span className="font-display font-bold text-[80px] md:text-[120px] leading-none text-white/[0.06]">
            02
          </span>
          <div className="flex-1">
            <div data-line-grow className="h-px bg-white/[0.06]" />
          </div>
          <span className="text-accent/80 text-[11px] uppercase tracking-[0.4em]">
            Benefícios
          </span>
        </div>

        <h2 data-reveal className="font-display font-bold text-fluid-xl text-white uppercase max-w-4xl">
          Tudo que está
          <br />
          <span className="text-gradient">dentro</span> do clube.
        </h2>
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
                    className="object-cover transition-transform duration-[2s]"
                    sizes="80vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080f13] via-[#080f13]/60 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#080f13]/40 to-transparent" />
                </div>

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-14">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-accent text-[11px] font-mono tracking-wider">
                      {b.num}
                    </span>
                    <div className="w-8 h-px bg-accent/40" />
                    <span className="text-accent/60 text-[11px] uppercase tracking-[0.3em]">
                      {b.highlight}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white uppercase whitespace-pre-line leading-[0.95] mb-6">
                    {b.title}
                  </h3>

                  <p className="text-white/50 text-sm md:text-base max-w-lg leading-relaxed">
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
