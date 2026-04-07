import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import SocialProof from "@/components/SocialProof";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

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
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
