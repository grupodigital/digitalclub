import Image from "next/image";
import Reveal from "./Reveal";

/**
 * Seção final (fecho) — logo centralizado, assinatura e © 2026, sobre
 * foto dos empresários com duotone verde. Sem URL.
 */
export default function Fecho() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-primary-dark text-white">
      {/* Foto de fundo */}
      <Image
        src="/fecho-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none select-none object-cover object-top"
      />
      {/* Duotone verde + escurecimento */}
      <div className="pointer-events-none absolute inset-0 bg-primary/55 mix-blend-multiply" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 65% at 50% 45%, rgba(9,16,12,0.55) 0%, rgba(9,16,12,0.80) 100%)",
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        <Reveal className="flex flex-col items-center">
          <Image
            src="/LOGO-DIGITAL-CLUB-PNG.png"
            alt="Digital Club"
            width={1920}
            height={432}
            priority={false}
            className="h-auto w-[min(72vw,620px)]"
          />

          <p className="mt-4 text-lg font-light tracking-wide text-white/85 sm:mt-6 sm:text-2xl">
            Empresários do Norte crescendo juntos.
          </p>

          <div className="mt-12 h-px w-full max-w-[360px] bg-gradient-to-r from-transparent via-accent/50 to-transparent sm:mt-16" />
        </Reveal>
      </div>

      {/* Rodapé: copyright */}
      <div className="relative z-10 px-6 pb-10 text-center">
        <span className="text-xs tracking-widest text-white/50 sm:text-sm">
          © 2026
        </span>
      </div>
    </section>
  );
}
