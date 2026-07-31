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
import Fecho from "@/components/lp/Fecho";

/**
 * /nova — Prévia temporária da nova landing do Digital Club.
 *
 * Página fora dos índices de busca (noindex/nofollow). Montada
 * seção por seção em src/components/lp. Enquanto isso, a home (/)
 * segue exibindo a página "Em Breve".
 */
export const metadata: Metadata = {
  title: "Digital Club | Prévia",
  description:
    "Prévia da nova landing do Digital Club — o clube de empresários da Região Norte.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Nova() {
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
        <Fecho />
      </main>
    </div>
  );
}
