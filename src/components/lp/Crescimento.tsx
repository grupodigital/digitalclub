import Image from "next/image";
import Reveal from "./Reveal";

/**
 * Seção 10 — "Quanto vale o crescimento do seu negócio?".
 *
 * Fundo full-bleed com duotone verde, logo no topo e headline +
 * subtítulo centralizados. Sem URL.
 */
export default function Crescimento() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-primary-dark text-white">
      {/* Foto de fundo */}
      <Image
        src="/crescimento-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none select-none object-cover"
      />
      {/* Duotone verde */}
      <div className="pointer-events-none absolute inset-0 bg-primary/55 mix-blend-multiply" />
      <div className="pointer-events-none absolute inset-0 bg-primary-dark/35" />
      {/* Scrim central para o texto */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 50% 55%, rgba(9,16,12,0.62) 0%, rgba(9,16,12,0.30) 55%, transparent 100%)",
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1500px] flex-1 flex-col px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
        <Reveal>
          <Image
            src="/LOGO-DIGITAL-CLUB-PNG.png"
            alt="Digital Club"
            width={1920}
            height={432}
            className="h-auto w-[150px] sm:w-[170px]"
          />
        </Reveal>

        <div className="flex flex-1 items-center justify-center">
          <Reveal className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold uppercase leading-tight tracking-[-0.01em] sm:text-4xl lg:text-[3rem]">
              Quanto vale o crescimento do seu negócio?
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-sm uppercase leading-relaxed tracking-wide text-white/80 sm:mt-8 sm:text-lg">
              Crescer não é uma questão de sorte. É resultado de estar no
              ambiente certo, cercado pelas pessoas certas.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
