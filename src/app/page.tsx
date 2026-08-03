import type { Metadata } from "next";
import Hero from "@/components/lp/Hero";
import Momento from "@/components/lp/Momento";
import Apoio from "@/components/lp/Apoio";
import Comunidade from "@/components/lp/Comunidade";
import Missao from "@/components/lp/Missao";
import Entregas from "@/components/lp/Entregas";
import Experiencias from "@/components/lp/Experiencias";
import Movimento from "@/components/lp/Movimento";
import Valor from "@/components/lp/Valor";
import Crescimento from "@/components/lp/Crescimento";
import Aplicacao from "@/components/lp/Aplicacao";
import Fecho from "@/components/lp/Fecho";

/**
 * Home — nova landing do Digital Club.
 *
 * Montada seção por seção em src/components/lp. Substitui a antiga
 * página "Em Breve". A landing anterior segue em stand by em /preview.
 */
export const metadata: Metadata = {
  title: "Digital Club | O clube de empresários da Região Norte",
  description:
    "O Digital Club é o clube de empresários da Região Norte. Um ambiente para ampliar visão, construir conexões e gerar novas oportunidades de negócio.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Digital Club | O clube de empresários da Região Norte",
    description:
      "Um ambiente para ampliar visão, construir conexões e gerar novas oportunidades de negócio.",
  },
};

export default function Home() {
  return (
    <div className="grain">
      <main>
        <Hero />
        <Momento />
        <Apoio />
        <Comunidade />
        <Missao />
        <Entregas />
        <Experiencias />
        <Movimento />
        <Valor />
        <Crescimento />
        <Aplicacao />
        <Fecho />
      </main>
    </div>
  );
}
