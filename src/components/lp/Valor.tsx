import Image from "next/image";
import Reveal from "./Reveal";

/**
 * Seção 9 — "O maior valor é quem está ao seu lado".
 *
 * Fundo em foto clara (high-key) dos empresários, logo no topo e
 * headline + subtítulo centralizados. Sem URL.
 */
export default function Valor() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden text-primary">
      {/* Foto de fundo */}
      <Image
        src="/valor-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none select-none object-cover object-top"
      />
      {/* Lavagem clara */}
      <div className="pointer-events-none absolute inset-0 bg-[#f5f2ec]/82" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(245,242,236,0.12) 0%, rgba(245,242,236,0.55) 100%)",
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1500px] flex-1 flex-col px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
        <Reveal>
          <Image
            src="/logo-dark.png"
            alt="Digital Club"
            width={1920}
            height={432}
            className="h-auto w-[150px] sm:w-[170px]"
          />
        </Reveal>

        <div className="flex flex-1 items-center justify-center">
          <Reveal className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold uppercase leading-tight tracking-[-0.01em] sm:text-4xl lg:text-5xl">
              O maior valor é quem está ao seu lado
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-sm uppercase leading-relaxed tracking-wide text-primary/75 sm:mt-8 sm:text-lg">
              Uma conversa pode ampliar sua visão. Uma conexão pode abrir um
              caminho. Uma decisão pode mudar o rumo da sua empresa.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
