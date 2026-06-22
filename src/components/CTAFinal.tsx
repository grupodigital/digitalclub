"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function CTAFinal() {
  const ref = useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="cta" ref={ref} className="relative bg-[#000000]">
      {/* Divider glow */}
      <div className="divider-glow" />

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left — Image + text overlay */}
        <div className="relative min-h-[60vh] lg:min-h-screen overflow-hidden">
          <div data-scale-in className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069"
              alt="Evento exclusivo"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/70 to-[#000000]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent" />

          {/* Content over image */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 lg:p-20">
            <div data-reveal-left>
              <div className="flex items-center gap-4 mb-10">
                <span className="text-accent/80 text-[11px] uppercase tracking-[0.4em]">
                  05 — Aplicação
                </span>
              </div>

              <h2 className="font-display font-bold text-fluid-lg text-white uppercase leading-[1] mb-8 max-w-lg">
                Solicite sua aplicação e entre para uma comunidade construída por{" "}
                <span className="text-gradient">acesso, relações e curadoria.</span>
              </h2>

              {/* Minimal checklist */}
              <div data-stagger className="space-y-3">
                {[
                  "Relações estratégicas",
                  "Experiências exclusivas",
                  "Acesso ao ecossistema do Grupo Digital",
                  "Oportunidades de negócio",
                  "Posicionamento",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-accent rounded-full" />
                    <span className="text-white/55 text-[13px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div className="flex items-center justify-center p-8 md:p-16 lg:p-20 bg-[#0d0d0d]">
          <div data-reveal-right className="w-full max-w-md">
            {/* Logo watermark */}
            <div data-reveal-blur className="mb-16">
              <Image
                src="/logo.svg"
                alt="Digital Club"
                width={140}
                height={50}
                className="w-[100px] h-auto opacity-20"
              />
            </div>

            <h3 className="font-display font-bold text-3xl md:text-4xl uppercase text-white mb-3">
              Envie sua
              <br />
              <span className="text-accent">aplicação</span>
            </h3>
            <p className="text-white/50 text-sm mb-12">
              Compartilhe sua trajetória e atuação empresarial. Sua aplicação passa
              por curadoria e retornamos em até 48h.
            </p>

            <form onSubmit={handleSubmit} className="space-y-0" aria-label="Formulário de candidatura ao Digital Club">
              {[
                { name: "name", placeholder: "Nome completo", type: "text" },
                { name: "email", placeholder: "Melhor e-mail", type: "email" },
                { name: "phone", placeholder: "WhatsApp com DDD", type: "tel" },
                { name: "company", placeholder: "Empresa", type: "text" },
                { name: "role", placeholder: "Cargo", type: "text" },
              ].map((field) => (
                <div key={field.name}>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="w-full px-0 py-6 bg-transparent border-b border-white/[0.06] text-white placeholder-white/40 text-[15px] focus:outline-none focus:border-accent/40 transition-colors duration-700 hover:border-white/15"
                  />
                </div>
              ))}

              <div className="pt-12">
                <button
                  type="submit"
                  className="btn-fill group w-full flex items-center justify-between px-10 py-6 border border-accent/40 text-accent hover:text-white text-[12px] uppercase tracking-[0.25em] font-medium transition-colors duration-500"
                >
                  <span>Solicitar aplicação</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                </button>
              </div>

              <p className="text-white/[0.3] text-[11px] text-center mt-8 tracking-wider">
                Dados seguros · Aplicação por curadoria
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
