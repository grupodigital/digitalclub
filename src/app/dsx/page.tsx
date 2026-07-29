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
      {/* ══════════════ HERO + FORMULÁRIO ══════════════ */}
      <section className="relative min-h-screen overflow-hidden bg-[#24322c]">
        {/* Background — foto na página toda */}
        <div className="absolute inset-0">
          {/* Mobile */}
          <Image
            src="/bg-dsx/mosaico-mobile.jpg.jpeg"
            alt="Digital Club — comunidade exclusiva para quem move o Norte do Brasil"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover md:hidden"
          />
          {/* Desktop */}
          <Image
            src="/bg-dsx/mosaico.jpg.jpeg"
            alt="Digital Club — comunidade exclusiva para quem move o Norte do Brasil"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="hidden object-cover md:block"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen max-w-[1600px] mx-auto px-8 md:px-12 py-24 lg:py-0 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
            {/* Left — Hero */}
            <div>
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

            {/* Right — Form (bg preto só ao redor do form) */}
            <div className="w-full flex lg:justify-end">
              <div className="w-full max-w-md rounded-2xl border border-white/[0.08] bg-black/80 backdrop-blur-md p-8 md:p-10 lg:p-12">
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
          </div>
        </div>
      </section>
    </main>
  );
}
