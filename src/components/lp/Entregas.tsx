import Image from "next/image";
import Reveal from "./Reveal";

/**
 * Seção 6 — "Entregas confirmadas para 2026".
 *
 * Fundo creme. Logo + headline no topo, três cards (texto + foto),
 * endereço do site no rodapé.
 */

const CARDS = [
  {
    titulo: "1 passaporte para a Imersão Founder Led Growth",
    data: "12 de setembro",
    img: "/entregas/e17.jpg",
    alt: "Imersão Founder Led Growth",
  },
  {
    titulo: "1 passaporte para a Imersão Seja Alta Performance",
    data: "7, 8 e 9 de Outubro",
    img: "/entregas/e18.jpg",
    alt: "Imersão Seja Alta Performance",
  },
  {
    titulo: "1 passaporte VIP para o Amazon.IA",
    data: "Dezembro",
    img: "/entregas/e19.jpg",
    alt: "Amazon.IA",
  },
];

export default function Entregas() {
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
          <h2 className="mt-8 text-3xl font-bold uppercase leading-[1.1] tracking-[-0.01em] sm:text-4xl lg:text-[3rem]">
            Entregas confirmadas para 2026
          </h2>
        </Reveal>

        {/* Cards */}
        <Reveal
          delay={0.1}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3"
        >
          {CARDS.map((c) => (
            <div
              key={c.titulo}
              className="flex flex-col rounded-[24px] border border-primary/25 p-5"
            >
              <div className="min-h-[7.5rem] px-2 pt-2 sm:min-h-[8.5rem]">
                <p className="text-xl font-bold leading-snug sm:text-2xl">
                  {c.titulo}
                </p>
                <p className="mt-1 text-xl font-normal text-primary/80 sm:text-2xl">
                  {c.data}
                </p>
              </div>
              <div className="relative mt-4 aspect-[5/6] overflow-hidden rounded-[16px]">
                <Image
                  src={c.img}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 30vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
