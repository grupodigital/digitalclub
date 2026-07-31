import Image from "next/image";

/**
 * Hero — Seção 1 da nova landing (home).
 *
 * Reproduz o slide de abertura da apresentação Digital Club:
 * fachada de vidro olhando para cima + céu verde, título em prata,
 * subtítulo, divisor e tagline na base.
 *
 * Fundo: /public/hero-building.jpg (placa limpa extraída do slide,
 * sem texto), tratada com tint verde + vinheta via CSS.
 */
export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#0c1511]">
      {/* Foto de fundo — prédio + céu */}
      <Image
        src="/hero-building.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none select-none object-cover object-[28%_top] opacity-90 sm:object-top"
      />

      {/* Tint verde por cima da foto */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(12,21,17,0.35) 0%, rgba(18,28,23,0.55) 45%, rgba(12,21,17,0.92) 100%)",
        }}
      />

      {/* Vinheta radial para foco no centro */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 45%, transparent 0%, rgba(10,18,14,0.55) 100%)",
        }}
      />

      {/* Grão sutil / linha superior */}
      <div className="animate-line-expand absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />

      {/* Copyright topo-direita */}
      <span className="animate-hero-up animate-hero-up-d1 absolute right-6 top-6 z-20 text-xs tracking-widest text-white/45 sm:right-10 sm:top-8 sm:text-sm">
        © 2026
      </span>

      {/* Conteúdo central */}
      <div className="relative z-20 flex w-full flex-1 flex-col items-center justify-center px-6 text-center">
        <h1 className="animate-hero-up animate-hero-up-d2 m-0 w-[min(82vw,820px)] max-w-full">
          <span className="sr-only">Digital Club</span>
          <Image
            src="/LOGO-DIGITAL-CLUB-PNG.png"
            alt="Digital Club"
            width={1920}
            height={432}
            priority
            className="h-auto w-full"
          />
        </h1>

        <p className="animate-hero-up animate-hero-up-d3 mt-4 max-w-[92%] text-base font-light tracking-wide text-white/75 sm:mt-6 sm:max-w-none sm:text-xl">
          O clube de empresários da Região Norte
        </p>

        <div className="animate-hero-up animate-hero-up-d4 mt-10 h-px w-full max-w-[360px] bg-gradient-to-r from-transparent via-accent/45 to-transparent sm:mt-14" />
      </div>

      {/* Tagline base */}
      <div className="relative z-20 px-6 pb-8 sm:pb-12">
        <p className="animate-hero-up animate-hero-up-d5 mx-auto max-w-5xl text-center text-[0.7rem] uppercase leading-relaxed tracking-[0.18em] text-white/70 sm:text-sm sm:tracking-[0.22em]">
          Um ambiente para ampliar visão, construir conexões e gerar novas
          oportunidades de negócio.
        </p>
      </div>

      {/* Linha inferior */}
      <div className="animate-line-expand absolute inset-x-0 bottom-0 z-20 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />
    </section>
  );
}
