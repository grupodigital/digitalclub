import Image from "next/image";
import Reveal from "./Reveal";

/**
 * Seção 7 — "Entregas: experiências ao longo da jornada".
 *
 * Dois cards (Visit Days) + uma coluna com card escuro e card de bullets.
 */

const VISITS = [
  {
    titulo: "1 Visit Day no G4 Business",
    local: "São Paulo",
    img: "/experiencias/x20.jpg",
    alt: "G4 Business — São Paulo",
  },
  {
    titulo: "1 Visit Day na China Link",
    local: "Santos",
    img: "/experiencias/x21.jpg",
    alt: "China Link — Santos",
  },
];

export default function Experiencias() {
  return (
    <section
      className="relative overflow-hidden text-primary"
      style={{
        background:
          "linear-gradient(115deg, #ece4d8 0%, #f4efe6 55%, #f8f5ef 100%)",
      }}
    >
      <div className="mx-auto max-w-[1500px] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        {/* Topo: logo + headline */}
        <Reveal>
          <Image
            src="/logo-dark.png"
            alt="Digital Club"
            width={1920}
            height={432}
            className="h-auto w-[150px] sm:w-[170px]"
          />
          <h2 className="mt-8 text-3xl uppercase leading-[1.1] tracking-[-0.01em] sm:text-4xl lg:text-[3.3rem]">
            <span className="font-bold">Entregas:</span>{" "}
            <span className="font-light">experiências ao longo da jornada</span>
          </h2>
        </Reveal>

        {/* Grid */}
        <Reveal
          delay={0.1}
          className="mt-12 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3"
        >
          {/* Cards de Visit Day */}
          {VISITS.map((v) => (
            <div
              key={v.titulo}
              className="flex h-full flex-col rounded-[24px] border border-primary/25 p-5"
            >
              <div className="min-h-[6rem] px-2 pt-2">
                <p className="text-xl font-bold leading-snug sm:text-2xl">
                  {v.titulo}
                </p>
                <p className="mt-1 text-xl font-normal text-primary/80 sm:text-2xl">
                  {v.local}
                </p>
              </div>
              <div className="relative mt-4 min-h-[300px] flex-1 overflow-hidden rounded-[16px]">
                <Image
                  src={v.img}
                  alt={v.alt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 30vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              </div>
            </div>
          ))}

          {/* Coluna 3: card escuro + card de bullets */}
          <div className="flex flex-col gap-6 sm:col-span-2 lg:col-span-1">
            <div
              className="rounded-[22px] p-7 text-white"
              style={{
                background:
                  "linear-gradient(160deg, #16241d 0%, #0c1611 100%)",
              }}
            >
              <p className="text-lg font-light leading-relaxed sm:text-xl">
                Novas visitas e experiências poderão ser incluídas quando
                estiverem confirmadas.
              </p>
            </div>

            <div className="flex flex-1 flex-col justify-center rounded-[22px] border border-primary/25 p-7">
              <ul className="space-y-7">
                {[
                  "Grupo exclusivo de empresários.",
                  "Encontros presenciais entre membros.",
                ].map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-1 text-lg leading-none">•</span>
                    <span className="text-lg font-bold leading-snug sm:text-xl">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
