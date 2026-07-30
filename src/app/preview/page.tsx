import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import ExperienciaMembro from "@/components/ExperienciaMembro";
import SocialProof from "@/components/SocialProof";
import ComoEntrar from "@/components/ComoEntrar";
import DSX from "@/components/DSX";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

/**
 * Landing completa do Digital Club — EM STAND BY.
 *
 * Enquanto a home (/) exibe a página "Em Breve", esta página permanece
 * acessível apenas em /preview, fora dos índices de busca.
 *
 * Para voltar a publicá-la como home: mover este conteúdo para
 * src/app/page.tsx (restaurando o metadata original com canonical "/"),
 * remover o disallow de /preview em robots.ts e repor as URLs no sitemap.ts.
 */
export const metadata: Metadata = {
  title: "Digital Club | Comunidade exclusiva para quem move o Norte do Brasil",
  description:
    "O Digital Club é uma comunidade exclusiva para CEOs, donos e fundadores que buscam acesso, experiências premium e conexões estratégicas de alto valor na Região Norte. Ingresso por curadoria. O clube nasce durante o DSX.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Preview() {
  return (
    <SmoothScroll>
      <div className="grain">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Benefits />
          <ExperienciaMembro />
          <SocialProof />
          <ComoEntrar />
          <DSX />
          <CTAFinal />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
