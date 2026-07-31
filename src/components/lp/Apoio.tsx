import Image from "next/image";
import Reveal from "./Reveal";

/**
 * Seção 3 — "Um ponto de apoio para quando você precisar".
 *
 * Faixa de 4 painéis verticais de fotos com tint verde-escuro e
 * headline + subtítulo centralizados por cima.
 * (Sem logo e sem endereço do site, conforme solicitado.)
 */

const PANEIS = [
  { src: "/apoio/a8.jpg", alt: "Empresários conversando em evento" },
  { src: "/apoio/a9.jpg", alt: "Convidadas brindando em confraternização" },
  { src: "/apoio/a10.jpg", alt: "Profissionais sorrindo em networking" },
  { src: "/apoio/a11.jpg", alt: "Networking em ambiente de negócios" },
];

export default function Apoio() {
  return (
    <section className="relative overflow-hidden bg-primary-dark">
      {/* Painéis de fundo */}
      <div className="absolute inset-0 grid grid-cols-2 gap-2 p-2 sm:gap-3 sm:p-3 lg:grid-cols-4">
        {PANEIS.map((p) => (
          <div
            key={p.src}
            className="relative overflow-hidden rounded-[16px]"
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
            {/* Tint verde por painel */}
            <div className="absolute inset-0 bg-primary/45 mix-blend-multiply" />
            <div className="absolute inset-0 bg-primary-dark/25" />
          </div>
        ))}
      </div>

      {/* Scrim para legibilidade do texto */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 50% 55%, rgba(13,23,18,0.72) 0%, rgba(13,23,18,0.35) 55%, transparent 100%)",
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 flex min-h-[88vh] items-center justify-center px-6 py-24">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold uppercase leading-tight tracking-[-0.01em] text-white sm:text-4xl lg:text-[3rem]">
            Um ponto de apoio para quando você precisar
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm uppercase leading-relaxed tracking-wide text-white/75 sm:mt-7 sm:text-lg">
            Para ampliar a visão, trocar experiências e chegar às pessoas certas
            em cada momento do seu negócio.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
