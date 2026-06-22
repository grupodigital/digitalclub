import type { Metadata } from "next";
import Link from "next/link";
import { Check, Heart } from "lucide-react";

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
    <main
      className="min-h-screen flex items-center justify-center bg-[#24322c]"
    >
      <div className="w-full max-w-3xl px-6 py-12 text-center">
        {/* Header with icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-primary">
            <Check size={32} color="#fff" />
          </div>
        </div>

        {/* Main title */}
        <h1 className="text-4xl font-bold mb-4 text-balance text-accent">
          Muito Obrigado!
        </h1>

        {/* Subtitle */}
        <p className="text-xl mb-8 leading-relaxed text-white/70">
          A sua mensagem foi recebida com sucesso. Agradecemos por entrar em contacto connosco.
        </p>

        {/* Confirmation card */}
        <div className="rounded-lg p-8 mb-8 border border-white/10 bg-white/[0.03]">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart size={24} className="text-accent" />
            <p className="text-lg font-semibold text-white">A sua solicitação é importante para nós</p>
          </div>
          <p className="text-sm text-white/50">
            Receberá uma resposta em breve. Verifique o seu email para atualizações.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg bg-accent text-white"
          >
            Voltar para Home
          </Link>
        </div>

        {/* Decorative footer */}
        <div className="mt-16 pt-8 border-t border-white/10">
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
