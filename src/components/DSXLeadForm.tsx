"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
};

const INITIAL: FormData = {
  name: "",
  email: "",
  phone: "",
};

const WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/gI9AcwOIJ3ZRh6TVrrsf/webhook-trigger/a1500751-89ba-4aa1-ad00-94238238be84";

// Máscara de telefone: (00) 0000-0000 (fixo) ou (00) 00000-0000 (celular)
function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 2) return digits.replace(/^(\d*)/, "($1");
  if (digits.length <= 6) return digits.replace(/^(\d{2})(\d*)/, "($1) $2");
  if (digits.length <= 10)
    return digits.replace(/^(\d{2})(\d{4})(\d*)/, "($1) $2-$3");
  return digits.replace(/^(\d{2})(\d{5})(\d*)/, "($1) $2-$3");
}

export default function DSXLeadForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "phone" ? formatPhone(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);

    const source = "digital-club-landing";

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
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

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-0"
      aria-label="Formulário de aplicação ao Digital Club"
    >
      <input
        type="text"
        name="name"
        autoComplete="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nome completo"
        required
        className={inputClass}
      />
      <input
        type="email"
        name="email"
        autoComplete="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Melhor e-mail"
        required
        className={inputClass}
      />
      <input
        type="tel"
        name="phone"
        autoComplete="tel"
        inputMode="numeric"
        value={formData.phone}
        onChange={handleChange}
        placeholder="(00) 0000-0000"
        required
        className={inputClass}
      />

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
