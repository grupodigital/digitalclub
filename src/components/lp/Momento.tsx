import Image from "next/image";
import Reveal from "./Reveal";

/**
 * Seção 2 — "Chega um momento em que crescer exige um novo ambiente".
 *
 * Fundo creme com texto à esquerda e mosaico de fotos P&B à direita.
 */

type Foto = { src: string; w: number; h: number; alt: string };

// Duas colunas explícitas para o mosaico (staggered, estilo Pinterest).
const COL_A: Foto[] = [
  { src: "/mosaico/m4.jpg", w: 760, h: 1140, alt: "Profissionais em conversa no escritório" },
  { src: "/mosaico/m14.jpg", w: 760, h: 511, alt: "Reunião de negócios" },
  { src: "/mosaico/m35.jpg", w: 760, h: 508, alt: "Empresário trabalhando" },
  { src: "/mosaico/m1.jpg", w: 760, h: 1140, alt: "Empresário sorrindo" },
];

const COL_B: Foto[] = [
  { src: "/mosaico/m16.jpg", w: 760, h: 511, alt: "Pessoas se cumprimentando" },
  { src: "/mosaico/m2.jpg", w: 760, h: 1140, alt: "Plateia atenta em evento" },
  { src: "/mosaico/m30.jpg", w: 760, h: 500, alt: "Equipe de negócios" },
  { src: "/mosaico/m12.jpg", w: 760, h: 511, alt: "Networking em evento" },
];

export default function Momento() {
  return (
    <section
      id="momento"
      className="relative overflow-hidden text-primary"
      style={{
        background:
          "linear-gradient(105deg, #ece4d8 0%, #f4efe6 52%, #f8f5ef 100%)",
      }}
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-14 px-6 py-20 sm:px-10 lg:grid-cols-[1.8fr_1fr] lg:gap-16 lg:px-16 lg:py-28">
        {/* Coluna de texto */}
        <Reveal className="flex flex-col lg:min-h-[70vh]">
          <Image
            src="/logo-dark.png"
            alt="Digital Club"
            width={1920}
            height={432}
            className="h-auto w-[160px] sm:w-[190px]"
          />

          <h2 className="mt-10 max-w-[60rem] text-[2rem] font-bold uppercase leading-[1.1] tracking-[-0.01em] sm:text-5xl lg:mt-14 lg:text-[3rem]">
            Chega um momento em que{" "}
            <br className="hidden lg:block" />
            crescer exige um novo ambiente
          </h2>

          <div className="mt-12 max-w-[46rem] space-y-7 lg:mt-24">
            <p className="text-base font-medium uppercase leading-relaxed tracking-wide text-primary/75 sm:text-xl lg:text-[1.5rem]">
              Mais esforço nem sempre gera uma decisão melhor.
            </p>
            <p className="text-base font-bold uppercase leading-relaxed tracking-wide sm:text-xl lg:text-[1.5rem]">
              Novas referências, boas conversas e as pessoas certas podem
              encurtar caminhos.
            </p>
          </div>
        </Reveal>

        {/* Mosaico */}
        <Reveal
          delay={0.15}
          className="grid grid-cols-2 gap-3 sm:gap-4 lg:pl-6"
        >
          {[COL_A, COL_B].map((coluna, ci) => (
            <div
              key={ci}
              className={`flex flex-col gap-3 sm:gap-4 ${
                ci === 1 ? "sm:mt-10" : ""
              }`}
            >
              {coluna.map((f) => (
                <div
                  key={f.src}
                  className="overflow-hidden rounded-[18px] shadow-sm ring-1 ring-black/5"
                >
                  <Image
                    src={f.src}
                    alt={f.alt}
                    width={f.w}
                    height={f.h}
                    sizes="(max-width: 1024px) 45vw, 300px"
                    className="h-auto w-full object-cover"
                  />
                </div>
              ))}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
