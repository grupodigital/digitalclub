"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  revenue: string;
  employees: string;
  challenge: string;
};

const INITIAL: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  revenue: "",
  employees: "",
  challenge: "",
};

const REVENUE_OPTIONS = [
  "Até R$ 500 mil",
  "R$ 500 mil – R$ 2 milhões",
  "R$ 2 milhões – R$ 10 milhões",
  "R$ 10 milhões – R$ 50 milhões",
  "Acima de R$ 50 milhões",
];

const EMPLOYEE_OPTIONS = [
  "1 – 10",
  "11 – 50",
  "51 – 200",
  "201 – 500",
  "Mais de 500",
];

const CHALLENGE_OPTIONS = [
  { value: "marketing", label: "Marketing" },
  { value: "vendas", label: "Vendas" },
  { value: "gestao", label: "Gestão" },
  { value: "tech", label: "Tech" },
];

const WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/gI9AcwOIJ3ZRh6TVrrsf/webhook-trigger/a1500751-89ba-4aa1-ad00-94238238be84";

export default function DSXLeadForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);

    const challengeLabel =
      CHALLENGE_OPTIONS.find((o) => o.value === formData.challenge)?.label ??
      formData.challenge;

    const source = "digital-club-landing";

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          revenue: formData.revenue,
          employees: formData.employees,
          challenge: challengeLabel,
          source,
          submitted_at: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error(`Webhook respondeu ${res.status}`);

      router.push("/obrigado");
    } catch (err) {
      console.error("Falha ao enviar lead DSX:", err);
      setError(
        "Não foi possível enviar seus dados. Tente novamente em instantes."
      );
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-0 py-6 bg-transparent border-b border-white/[0.06] text-white placeholder-white/40 text-[15px] focus:outline-none focus:border-accent/40 transition-colors duration-700 hover:border-white/15";

  const selectClass =
    "w-full px-0 py-6 bg-transparent border-b border-white/[0.06] text-[15px] focus:outline-none focus:border-accent/40 transition-colors duration-700 hover:border-white/15 appearance-none cursor-pointer [&>option]:bg-[#0d0d0d] [&>option]:text-white";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-0"
      aria-label="Formulário de aplicação ao Digital Club"
    >
      {[
        { name: "name", placeholder: "Nome completo", type: "text", autoComplete: "name" },
        { name: "email", placeholder: "Melhor e-mail", type: "email", autoComplete: "email" },
        { name: "phone", placeholder: "WhatsApp com DDD", type: "tel", autoComplete: "tel" },
        { name: "company", placeholder: "Empresa", type: "text", autoComplete: "organization" },
      ].map((field) => (
        <input
          key={field.name}
          type={field.type}
          name={field.name}
          autoComplete={field.autoComplete}
          value={formData[field.name as keyof FormData]}
          onChange={handleChange}
          placeholder={field.placeholder}
          required
          className={inputClass}
        />
      ))}

      {/* Faturamento anual */}
      <div className="relative">
        <select
          name="revenue"
          value={formData.revenue}
          onChange={handleChange}
          required
          className={`${selectClass} ${formData.revenue ? "text-white" : "text-white/40"}`}
        >
          <option value="" disabled>
            Faturamento anual
          </option>
          {REVENUE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
      </div>

      {/* Número de funcionários */}
      <div className="relative">
        <select
          name="employees"
          value={formData.employees}
          onChange={handleChange}
          required
          className={`${selectClass} ${formData.employees ? "text-white" : "text-white/40"}`}
        >
          <option value="" disabled>
            Número de funcionários
          </option>
          {EMPLOYEE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
      </div>

      {/* Principal desafio */}
      <div className="relative">
        <select
          name="challenge"
          value={formData.challenge}
          onChange={handleChange}
          required
          className={`${selectClass} ${formData.challenge ? "text-white" : "text-white/40"}`}
        >
          <option value="" disabled>
            Principal desafio da sua empresa
          </option>
          {CHALLENGE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
      </div>

      {error && (
        <p
          role="alert"
          className="pt-6 text-[13px] leading-relaxed text-red-400"
        >
          {error}
        </p>
      )}

      <div className="pt-12">
        <button
          type="submit"
          disabled={submitting}
          className="cursor-pointer btn-fill group w-full flex items-center justify-between px-10 py-6 border border-accent/40 text-accent hover:text-black text-[12px] uppercase tracking-[0.25em] font-medium transition-colors duration-500 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span>{submitting ? "Enviando..." : "Quero participar do Club"}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
        </button>
      </div>

      <p className="pt-6 text-[11px] leading-relaxed text-white/30">
        Ao enviar, você concorda em ser contactado pela equipe do Digital Club
        sobre sua aplicação e o processo de ingresso.
      </p>
    </form>
  );
}
