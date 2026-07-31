import Image from "next/image";
import Reveal from "./Reveal";

/**
 * Seção 5 — "Nossa Missão".
 *
 * Quatro colunas: card (ícone de linha + texto) e foto abaixo.
 * (Sem logo e sem endereço do site, conforme solicitado.)
 */

const IC = {
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

function IconRede() {
  return (
    <svg viewBox="0 0 24 24" width="42" height="42" {...IC}>
      <line x1="8" y1="7" x2="15.5" y2="9" />
      <line x1="8" y1="7" x2="11" y2="16.5" />
      <line x1="15.5" y1="9" x2="11" y2="16.5" />
      <circle cx="7" cy="5.6" r="1.7" />
      <path d="M4.3 9.4a2.8 2.8 0 0 1 5.4 0" />
      <circle cx="16.6" cy="7.4" r="1.7" />
      <path d="M13.9 11.2a2.8 2.8 0 0 1 5.4 0" />
      <circle cx="11" cy="15.4" r="1.7" />
      <path d="M8.3 19.2a2.8 2.8 0 0 1 5.4 0" />
    </svg>
  );
}

function IconGlobo() {
  return (
    <svg viewBox="0 0 24 24" width="42" height="42" {...IC}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a13.5 13.5 0 0 1 0 18 13.5 13.5 0 0 1 0-18" />
    </svg>
  );
}

function IconConversa() {
  return (
    <svg viewBox="0 0 24 24" width="42" height="42" {...IC}>
      <path d="M13 4a1.5 1.5 0 0 1 1.5 1.5v4A1.5 1.5 0 0 1 13 11H9l-3 2.5V5.5A1.5 1.5 0 0 1 7.5 4z" />
      <path d="M17 8h.5A1.5 1.5 0 0 1 19 9.5v6.5L16 13.5" />
      <circle cx="8.5" cy="17.5" r="2" />
      <path d="M5 22a3.5 3.5 0 0 1 7 0" />
    </svg>
  );
}

function IconAperto() {
  return (
    <svg viewBox="0 0 24 24" width="42" height="42" {...IC}>
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="m21 3 1 11h-2" />
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
      <path d="M3 4h8" />
    </svg>
  );
}

const ITENS = [
  {
    icon: <IconRede />,
    texto: "Conectar empresários do Norte.",
    img: "/mosaico/m16.jpg",
    alt: "Empresários se cumprimentando",
  },
  {
    icon: <IconGlobo />,
    texto: "Trazer conhecimento aplicável à realidade da nossa região.",
    img: "/mosaico/m14.jpg",
    alt: "Apresentação em reunião",
  },
  {
    icon: <IconConversa />,
    texto:
      "Criar pontes com empresários, especialistas e empresas de referência no Brasil.",
    img: "/mosaico/m30.jpg",
    alt: "Networking entre profissionais",
  },
  {
    icon: <IconAperto />,
    texto: "Fomentar negócios e oportunidades para a região.",
    img: "/mosaico/m12.jpg",
    alt: "Conexões de negócio",
  },
];

export default function Missao() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 55% 0%, #223129 0%, #16221b 45%, #0e1712 100%)",
      }}
    >
      <div className="mx-auto max-w-[1500px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <Reveal>
          <h2 className="text-3xl font-bold uppercase tracking-[-0.01em] sm:text-4xl lg:text-5xl">
            Nossa Missão
          </h2>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:grid-rows-[1fr_auto]"
        >
          {ITENS.map((it) => (
            <div
              key={it.texto}
              className="grid gap-4 sm:gap-5 lg:row-span-2 lg:grid-rows-subgrid"
            >
              <div className="flex h-full flex-col rounded-[22px] border border-white/12 bg-white/[0.025] p-7">
                <span className="text-accent/90">{it.icon}</span>
                <p className="mt-9 text-lg font-light leading-snug text-white/90 sm:text-xl">
                  {it.texto}
                </p>
              </div>
              <div className="relative aspect-[3/2] overflow-hidden rounded-[16px] ring-1 ring-white/10">
                <Image
                  src={it.img}
                  alt={it.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
