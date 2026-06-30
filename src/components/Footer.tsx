"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#24322c] border-t border-white/[0.04]">
      {/* Big logo watermark */}
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 py-20 md:py-28">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <Image
            src="/LOGO-DIGITAL-CLUB-PNG.png"
            alt="Digital Club"
            width={200}
            height={70}
            className="w-[160px] md:w-[200px] h-auto brightness-0 invert"
          />
          <a
            href="#"
            className="text-accent/80 text-[11px] uppercase tracking-[0.3em] hover:text-accent transition-colors duration-500"
          >
            Voltar ao topo ↑
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/[0.03]">
        <div className="max-w-[1600px] mx-auto px-8 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white/[0.35] text-[11px] tracking-wider">
            &copy; {new Date().getFullYear()} Digital Club
          </span>
          <nav aria-label="Links legais">
            <div className="flex items-center gap-8">
              <a href="#" className="link-underline text-white/[0.35] hover:text-white/30 text-[11px] uppercase tracking-wider transition-colors">
                Termos
              </a>
              <a href="#" className="link-underline text-white/[0.35] hover:text-white/30 text-[11px] uppercase tracking-wider transition-colors" rel="nofollow">
                Privacidade
              </a>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}
