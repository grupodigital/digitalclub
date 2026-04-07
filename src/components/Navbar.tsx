"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Sobre", href: "#about" },
  { label: "Benefícios", href: "#benefits" },
  { label: "Eventos", href: "#events" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 mix-blend-difference ${
          scrolled ? "" : ""
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-8 md:px-12 flex items-center justify-between h-24">
          {/* Logo */}
          <a href="#" className="relative z-10">
            <Image
              src="/logo.svg"
              alt="Digital Club"
              width={120}
              height={40}
              className="h-8 w-auto brightness-0 invert"
              priority
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-12">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="link-underline text-white text-[12px] uppercase tracking-[0.25em] font-light transition-opacity duration-500 hover:opacity-60"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.25em] font-light text-white transition-opacity duration-500 hover:opacity-60"
            >
              Aplicar
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-10 text-white mix-blend-difference"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#080f13] flex flex-col justify-center items-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          clipPath: menuOpen ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
          transition: "clip-path 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s",
        }}
      >
        <div className="flex flex-col items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display font-bold text-5xl uppercase text-white hover:text-accent transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setMenuOpen(false)}
            className="mt-8 px-12 py-4 border border-accent/40 text-accent text-[12px] uppercase tracking-[0.3em] hover:bg-accent hover:text-white transition-all duration-500"
          >
            Aplicar agora
          </a>
        </div>
      </div>
    </>
  );
}
