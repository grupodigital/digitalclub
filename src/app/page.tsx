import type { Metadata } from "next";
import Image from "next/image";

/**
 * Home atual — página "Em Breve".
 *
 * A landing completa não foi removida: está em stand by em /preview
 * (src/app/preview/page.tsx), fora dos índices de busca.
 */
export const metadata: Metadata = {
  title: "Digital Club | Em Breve",
  description:
    "O Digital Club está preparando algo novo. Em breve, a comunidade exclusiva para CEOs, fundadores e donos de negócios da Região Norte do Brasil.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Digital Club | Em Breve",
    description:
      "O Digital Club está preparando algo novo. Em breve, a comunidade exclusiva para CEOs, fundadores e donos de negócios da Região Norte do Brasil.",
  },
};

export default function Home() {
  return (
    <div className="grain relative flex min-h-screen flex-col overflow-hidden">
      {/* Glow radial de fundo */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(241, 231, 219, 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Linha de destaque — topo */}
      <div className="animate-line-expand absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      {/* Conteúdo */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        {/* Logo */}
        <div className="animate-hero-up animate-hero-up-d1 mb-14">
          <Image
            src="/LOGO-DIGITAL-CLUB-PNG.png"
            alt="Digital Club"
            width={200}
            height={68}
            priority
            className="h-auto w-[150px] opacity-90 brightness-0 invert sm:w-[200px]"
          />
        </div>

        {/* Divisor */}
        <div className="animate-hero-up animate-hero-up-d2 mb-10 h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent" />

        {/* Título */}
        <h1 className="animate-hero-up animate-hero-up-d2 font-display text-fluid-lg uppercase tracking-wider text-white/90">
          Em Breve
        </h1>

        {/* Subtítulo */}
        <p className="animate-hero-up animate-hero-up-d3 mt-8 max-w-xl text-base leading-relaxed text-white/50 sm:text-lg">
          Estamos preparando algo extraordinário.
          <br className="hidden sm:block" />
          A comunidade que reúne quem move o Norte do Brasil volta em breve.
        </p>

        {/* Divisor */}
        <div className="animate-hero-up animate-hero-up-d4 mt-12 h-px w-16 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </main>

      {/* Linha de destaque — base */}
      <div className="animate-line-expand absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
    </div>
  );
}
