import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import SocialProof from "@/components/SocialProof";
import CTAFinal from "@/components/CTAFinal";
import FAQ from "@/components/FAQ";
import SeoArticle from "@/components/SeoArticle";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Digital Club | O Ecossistema de Experiências do Norte",
  description:
    "O Digital Club é um ecossistema exclusivo para CEOs, Fundadores e Donos de negócios no Amazonas, Brasil. Eventos VIP (DSX, Amazon IA, Leaders AI Conference), 4 imersões técnicas, networking estratégico e plataforma Digital Educa. Mais de 100 membros desde 2023.",
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
          <SocialProof />
          <CTAFinal />
          <FAQ />
          <SeoArticle />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
