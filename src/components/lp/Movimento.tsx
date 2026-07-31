import Image from "next/image";
import Reveal from "./Reveal";

/**
 * Seção 8 — "Uma comunidade em movimento".
 *
 * Texto à esquerda (logo + headline + 2 parágrafos) e 3 fotos
 * empilhadas à direita. Sem URL.
 */

const FOTOS = [
  { src: "/movimento/v29.jpg", alt: "Empresários em reunião" },
  { src: "/movimento/v32.jpg", alt: "Empresário em ambiente de trabalho" },
  { src: "/movimento/v33.jpg", alt: "Executivo em viagem de negócios" },
];

export default function Movimento() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(105deg, #0c1510 0%, #12201a 55%, #1c2c24 100%)",
      }}
    >
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-24">
        {/* Texto */}
        <Reveal className="flex flex-col justify-center">
          <Image
            src="/LOGO-DIGITAL-CLUB-PNG.png"
            alt="Digital Club"
            width={1920}
            height={432}
            className="h-auto w-[150px] sm:w-[170px]"
          />

          <h2 className="mt-8 max-w-xl text-4xl font-bold uppercase leading-[1.12] tracking-[-0.01em] sm:text-5xl lg:text-[3.35rem]">
            Uma comunidade em movimento
          </h2>

          <div className="mt-10 max-w-lg space-y-6 lg:mt-12">
            <p className="text-sm uppercase leading-relaxed tracking-wide text-white/75 sm:text-base">
              Além das experiências confirmadas, novas conexões, encontros e
              oportunidades poderão fazer parte da jornada.
            </p>
            <p className="text-sm font-bold uppercase leading-relaxed tracking-wide sm:text-base">
              Cada nova experiência será comunicada aos membros quando estiver
              estruturada e fizer sentido para a comunidade.
            </p>
          </div>
        </Reveal>

        {/* Fotos empilhadas */}
        <Reveal delay={0.15} className="flex flex-col gap-4 sm:gap-5">
          {FOTOS.map((f) => (
            <div
              key={f.src}
              className="relative aspect-[16/9] overflow-hidden rounded-[18px] ring-1 ring-white/10"
            >
              <Image
                src={f.src}
                alt={f.alt}
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
