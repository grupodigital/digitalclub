import Image from "next/image";
import Reveal from "./Reveal";

/**
 * Seção 2 — "Chega um momento em que crescer exige um novo ambiente".
 *
 * Fundo creme com texto à esquerda e mosaico de fotos P&B à direita.
 */

type Foto = { src: string; w: number; h: number; alt: string };

const MOSAICO: Foto[] = [
  { src: "/mosaico/m4.jpg", w: 760, h: 1140, alt: "Profissionais em conversa no escritório" },
  { src: "/mosaico/m14.jpg", w: 760, h: 511, alt: "Reunião de negócios" },
  { src: "/mosaico/m1.jpg", w: 760, h: 1140, alt: "Empresário sorrindo" },
  { src: "/mosaico/m16.jpg", w: 760, h: 511, alt: "Pessoas se cumprimentando" },
  { src: "/mosaico/m2.jpg", w: 760, h: 1140, alt: "Plateia atenta em evento" },
  { src: "/mosaico/m35.jpg", w: 760, h: 508, alt: "Empresário trabalhando" },
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
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-14 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-28">
        {/* Coluna de texto */}
        <Reveal className="flex flex-col lg:min-h-[70vh]">
          <Image
            src="/logo-dark.png"
            alt="Digital Club"
            width={1920}
            height={432}
            className="h-auto w-[150px] sm:w-[170px]"
          />

          <h2 className="mt-10 max-w-xl text-[1.9rem] font-bold uppercase leading-[1.12] tracking-[-0.01em] sm:text-4xl lg:mt-14 lg:text-[2.9rem]">
            Chega um momento em que crescer exige um novo ambiente
          </h2>

          <div className="mt-10 max-w-lg space-y-6 lg:mt-16">
            <p className="text-sm font-medium uppercase leading-relaxed tracking-wide text-primary/75 sm:text-base">
              Mais esforço nem sempre gera uma decisão melhor.
            </p>
            <p className="text-sm font-bold uppercase leading-relaxed tracking-wide sm:text-base">
              Novas referências, boas conversas e as pessoas certas podem
              encurtar caminhos.
            </p>
          </div>
        </Reveal>

        {/* Mosaico */}
        <Reveal delay={0.15} className="columns-2 gap-3 sm:gap-4 lg:pl-6">
          {MOSAICO.map((f) => (
            <div
              key={f.src}
              className="mb-3 overflow-hidden rounded-[18px] shadow-sm ring-1 ring-black/5 sm:mb-4"
            >
              <Image
                src={f.src}
                alt={f.alt}
                width={f.w}
                height={f.h}
                sizes="(max-width: 1024px) 45vw, 25vw"
                className="h-auto w-full object-cover"
              />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
