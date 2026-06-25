import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Digital Club | Em Breve",
  description:
    "O Digital Club está preparando algo novo. Em breve, o ecossistema de experiências para CEOs, Fundadores e Donos de negócios no Brasil.",
};

export default function ComingSoon() {
  return (
    <div className="grain relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(241, 231, 219,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Animated accent line top */}
      <div className="absolute top-0 left-0 right-0 h-px animate-line-expand bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="animate-hero-up animate-hero-up-d1 mb-12">
          <Image
            src="/LOGO-DIGITAL-CLUB-PNG.png"
            alt="Digital Club"
            width={180}
            height={60}
            priority
            className="opacity-90 brightness-0 invert"
          />
        </div>

        {/* Divider */}
        <div className="animate-hero-up animate-hero-up-d2 mb-10 h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent" />

        {/* Main heading */}
        <h1 className="animate-hero-up animate-hero-up-d2 font-display text-fluid-lg uppercase tracking-wider text-white/90">
          Em Breve
        </h1>

        {/* Subtitle */}
        <p className="animate-hero-up animate-hero-up-d3 mt-6 max-w-md text-base leading-relaxed text-white/50 sm:text-lg">
          Estamos preparando algo extraordinário.
          <br />
          O ecossistema de experiências volta em breve.
        </p>

        {/* Divider */}
        <div className="animate-hero-up animate-hero-up-d4 mt-10 h-px w-16 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        {/* Contact hint */}
        <p className="animate-hero-up animate-hero-up-d5 mt-8 text-xs tracking-widest text-white/25 uppercase">
          Digital Club &mdash; Amazonas
        </p>
      </div>

      {/* Animated accent line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px animate-line-expand bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
    </div>
  );
}
