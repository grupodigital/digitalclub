import Image from "next/image";
import Reveal from "./Reveal";

/**
 * Seção 4 — "O que movimenta essa comunidade".
 *
 * Fundo em foto clara (high-key) + logo e headline no topo, três cards
 * escuros ("apoio à decisão + conexões + geração de negócios") no centro.
 */

const CARDS = [
  "Apoio à tomada de decisão.",
  "Conexões estratégicas.",
  "Geração de negócios e oportunidades.",
];

export default function Comunidade() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden text-primary">
      {/* Foto de fundo */}
      <Image
        src="/comunidade-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none select-none object-cover object-top"
      />
      {/* Lavagem clara + tint verde à esquerda */}
      <div className="pointer-events-none absolute inset-0 bg-[#f4f1ea]/78" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(36,50,44,0.20) 0%, rgba(244,241,234,0.10) 40%, rgba(244,241,234,0.30) 100%)",
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1500px] flex-1 flex-col px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
        {/* Topo: logo + headline */}
        <Reveal>
          <Image
            src="/logo-dark.png"
            alt="Digital Club"
            width={1920}
            height={432}
            className="h-auto w-[150px] sm:w-[170px]"
          />
          <h2 className="mt-8 max-w-2xl text-[1.9rem] font-bold uppercase leading-[1.12] tracking-[-0.01em] sm:text-4xl lg:text-[2.9rem]">
            O que movimenta essa comunidade
          </h2>
        </Reveal>

        {/* Centro: cards */}
        <Reveal
          delay={0.15}
          className="flex flex-1 flex-col items-stretch justify-center gap-4 py-12 sm:flex-row sm:items-center sm:gap-3 lg:gap-6"
        >
          {CARDS.map((texto, i) => (
            <div key={texto} className="contents">
              <div
                className="flex items-center justify-center rounded-[22px] p-8 text-center shadow-xl sm:aspect-[4/3] sm:flex-1 sm:p-6 lg:max-w-[360px]"
                style={{
                  background:
                    "linear-gradient(160deg, #16241d 0%, #0c1611 100%)",
                }}
              >
                <p className="text-lg font-medium uppercase leading-snug tracking-wide text-white sm:text-xl lg:text-2xl">
                  {texto}
                </p>
              </div>
              {i < CARDS.length - 1 && (
                <span className="mx-auto text-3xl font-light text-primary sm:text-4xl">
                  +
                </span>
              )}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
