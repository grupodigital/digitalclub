import type { Metadata } from "next";
import Image from "next/image";
import DSXLeadForm from "@/components/DSXLeadForm";

export const metadata: Metadata = {
  title: "Faça parte do Digital Club",
  description:
    "O Digital Club é uma comunidade exclusiva para CEOs, donos e fundadores que movem o Norte do Brasil. Envie sua aplicação e faça parte de um ambiente de acesso, experiências premium e conexões estratégicas de alto valor.",
  alternates: {
    canonical: "/dsx",
  },
  openGraph: {
    title: "Faça parte do Digital Club",
    description:
      "Comunidade exclusiva para CEOs, donos e fundadores. Acesso, experiências premium e conexões estratégicas de alto valor. Ingresso por curadoria.",
    url: "/dsx",
  },
};

export default function DSXPage() {
  return (
    <main className="bg-[#24322c]">
      {/* ══════════════ HERO + FORMULÁRIO — split 50/50 ══════════════ */}
      <section className="relative grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Background — cobre a página inteira (as duas colunas) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/banner-dsx.jpg"
            alt="Digital Club — comunidade exclusiva para quem move o Norte do Brasil"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />
        </div>

        {/* Left — Hero */}
        <div className="relative z-10 min-h-[50vh] lg:min-h-screen flex items-center">
          {/* Content */}
          <div className="relative z-10 w-full px-8 md:px-16 lg:px-20 py-24 lg:py-0">
            <h1 className="font-serif font-extralight text-[clamp(2.4rem,5.5vw,5rem)] text-white leading-[1.05] tracking-tight">
              Você no
              <br />
              <span className="text-gradient">próximo nível</span>
            </h1>

            <p className="mt-10 max-w-lg text-[#EDE8D9] text-base md:text-lg leading-[1.9]">
              Ambiente exclusivo para empresários que desejam acelerar seus
              negócios por meio de{" "}
              <span className="text-accent">
                conteúdo, conexões e experiências exclusivas.
              </span>
            </p>
          </div>
        </div>

        {/* Right — Form */}
        <div className="relative z-10 flex items-center justify-center p-8 md:p-16 lg:p-20">
          <div className="divider-glow absolute top-0 left-0 right-0 lg:hidden" />
          {/* Card com fundo escuro — apenas o formulário */}
          <div className="w-full max-w-md bg-[#0d0d0d] p-8 md:p-10">
            <div className="mb-12">
              <Image
                src="/LOGO-DIGITAL-CLUB-PNG.png"
                alt="Digital Club"
                width={140}
                height={50}
                className="w-[100px] h-auto brightness-0 invert"
              />
            </div>

            <DSXLeadForm />
          </div>
        </div>
      </section>
    </main>
  );
}
