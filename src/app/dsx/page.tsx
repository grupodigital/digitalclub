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
      {/* ══════════════ HERO ══════════════ */}
      <section className="relative min-h-screen overflow-hidden bg-[#24322c]">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/DOBRA-1-digitalclub.png"
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

        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col justify-between max-w-[1600px] mx-auto px-8 md:px-12 w-full">
          <div className="pt-32" />

          <div className="flex-1 flex items-center">
            <div className="max-w-4xl">
              <span className="inline-block text-accent text-[12px] uppercase tracking-[0.35em] mb-8">
                Ingresso por curadoria · Região Norte
              </span>

              <h1 className="font-serif font-extralight text-[clamp(2.4rem,7vw,6rem)] text-white leading-[1.05] tracking-tight">
                Faça parte do
                <br />
                <span className="text-gradient">Digital Club</span>
              </h1>

              <p className="mt-10 max-w-xl text-[#EDE8D9] text-base md:text-lg leading-[1.9]">
                Uma comunidade exclusiva para CEOs, donos e fundadores que buscam
                acesso, experiências premium e conexões estratégicas de alto
                valor. Envie sua aplicação e faça parte de{" "}
                <span className="text-accent">
                  um ambiente criado para quem move o Norte do Brasil.
                </span>
              </p>

              <a
                href="#form"
                className="btn-fill group mt-12 inline-flex items-center gap-5 px-12 py-6 border border-accent/40 text-accent hover:text-black text-[12px] uppercase tracking-[0.3em] font-medium transition-colors duration-500"
              >
                Enviar minha aplicação
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="pb-10">
            <div className="border-t border-white/[0.08]" />
          </div>
        </div>
      </section>

      {/* ══════════════ FORMULÁRIO ══════════════ */}
      <section id="form" className="relative bg-[#000000]">
        <div className="divider-glow" />

        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left — Image + copy */}
          <div className="relative min-h-[50vh] lg:min-h-screen overflow-hidden">
            <Image
              src="/image-form.png"
              alt="Digital Club — comunidade empresarial exclusiva"
              fill
              quality={100}
              className="object-cover"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/70 to-[#000000]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 lg:p-20">
              <h2 className="font-serif font-extralight text-fluid-lg text-white tracking-tight leading-[1] mb-8 max-w-lg">
                Envie sua aplicação para o{" "}
                <span className="text-gradient">Digital Club</span>
              </h2>
              <div className="space-y-5 max-w-md">
                <p className="text-[#EDE8D9] text-[15px] leading-[1.9]">
                  O Digital Club é para empresários que entendem que crescimento
                  também depende de acesso, relacionamento e presença nos
                  ambientes certos.
                </p>
                <p className="text-[#EDE8D9] text-[15px] leading-[1.9]">
                  Ingresso por curadoria — a avaliação prioriza CEOs, donos e
                  fundadores comprometidos com crescimento.
                </p>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="flex items-center justify-center p-8 md:p-16 lg:p-20 bg-[#0d0d0d]">
            <div className="w-full max-w-md">
              <div className="mb-14">
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
      </section>
    </main>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}
