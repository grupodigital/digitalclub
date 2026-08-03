import Image from "next/image";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import Reveal from "./Reveal";
import AplicacaoForm from "./AplicacaoForm";

/* Mesmas fontes de /form — carregadas aqui para o escopo .dc-form da home. */
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

/**
 * Seção "Aplicação" — fundo creme com o mesmo formulário de /form dentro
 * de um card escuro (escopo .dc-form). Fica entre Crescimento e Fecho.
 */
export default function Aplicacao() {
  return (
    <section
      id="aplicacao"
      className="relative overflow-hidden text-primary"
      style={{
        background:
          "linear-gradient(120deg, #ece4d8 0%, #f4efe6 55%, #f8f5ef 100%)",
      }}
    >
      <div className="mx-auto max-w-[1500px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        {/* Topo: logo + headline sobre o creme */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <Image
            src="/logo-dark.png"
            alt="Digital Club"
            width={1920}
            height={432}
            className="mx-auto h-auto w-[150px] sm:w-[170px]"
          />
          <h2 className="mt-8 text-3xl font-bold uppercase leading-[1.1] tracking-[-0.01em] sm:text-4xl lg:text-[3.4rem]">
            Faça parte do Digital Club
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-primary/75 sm:text-base">
            O ingresso é por curadoria. Envie sua aplicação e nossa equipe
            avalia seu perfil.
          </p>
        </Reveal>

        {/* Card com o formulário (idêntico ao de /form) */}
        <Reveal delay={0.1} className="mx-auto mt-12 max-w-3xl lg:mt-16">
          <div
            className={`dc-form ${dmSans.variable} ${instrumentSerif.variable} overflow-hidden rounded-[24px] border border-dc-border shadow-[0_30px_80px_-40px_rgba(20,28,24,0.55)]`}
          >
            <AplicacaoForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
