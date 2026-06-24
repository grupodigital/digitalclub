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

export const metadata: Metadata = {
  title: "Digital Club | Comunidade exclusiva para quem move o Norte do Brasil",
  description:
    "O Digital Club é uma comunidade exclusiva para CEOs, donos e fundadores que buscam acesso, experiências premium e conexões estratégicas de alto valor na Região Norte. Ingresso por curadoria. O clube nasce durante o DSX.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
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
