import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Heart, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Obrigado - Mensagem Recebida",
  description: "A sua mensagem foi recebida com sucesso. Entraremos em contacto em breve.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-[#24322c] overflow-hidden">
      {/* Background — cobre a página inteira */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/banner-dsx.jpg"
          alt="Digital Club — comunidade exclusiva para quem move o Norte do Brasil"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />
      </div>

      {/* Conteúdo — sem fundo, sobre o background */}
      <div className="relative z-10 w-full max-w-2xl mx-6 p-8 md:p-14 text-center">
        {/* Header with icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 flex items-center justify-center bg-primary">
            <Check size={32} color="#fff" />
          </div>
        </div>

        {/* Main title */}
        <h1 className="font-serif font-extralight text-[clamp(2rem,5vw,3.5rem)] mb-4 text-balance text-white leading-[1.1]">
          Muito <span className="text-gradient">Obrigado!</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg mb-10 leading-[1.9] text-[#EDE8D9]">
          A sua mensagem foi recebida com sucesso. Agradecemos por entrar em contacto connosco.
        </p>

        {/* Confirmation card */}
        <div className="p-8 mb-10 bg-white/[0.03]">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart size={24} className="text-accent" />
            <p className="text-lg font-semibold text-white">A sua solicitação é importante para nós</p>
          </div>
          <p className="text-sm text-white/50">
            Receberá uma resposta em breve. Verifique o seu email para atualizações.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex justify-center">
          <Link
            href="/"
            className="btn-fill group inline-flex items-center gap-5 px-10 py-6 border border-accent/40 text-accent hover:text-black text-[12px] uppercase tracking-[0.25em] font-medium transition-colors duration-500"
          >
            Voltar para Home
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
          </Link>
        </div>

        {/* Decorative footer */}
        <div className="mt-14 pt-8 border-t border-white/[0.08]">
          <p className="text-sm text-white/40">
            Precisa de ajuda?{" "}
            <a
              href="https://wa.me/5592991112802"
              className="font-semibold hover:underline text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              Entre em contacto
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
