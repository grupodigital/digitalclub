import type { FormField, FormValues } from "./config";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function maskPhoneBR(value: string): string {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export function validateField(field: FormField, rawValue: string): string | null {
  const value = (rawValue ?? "").trim();

  if (field.required && !value) return "Este campo é obrigatório.";
  if (!value) return null;

  if (field.type === "email" && !EMAIL_RE.test(value)) {
    return "Informe um e-mail válido.";
  }

  if (field.type === "tel") {
    const digits = value.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 11) {
      return "Informe um número com DDD.";
    }
  }

  if (field.name === "fullName" && value.split(/\s+/).length < 2) {
    return "Informe seu nome completo.";
  }

  if (field.type === "textarea" && value.length < 10) {
    return "Conte um pouco mais — mínimo de 10 caracteres.";
  }

  return null;
}

export function validateAll(
  fields: FormField[],
  values: FormValues
): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const field of fields) {
    const error = validateField(field, values[field.name]);
    if (error) errors[field.name] = error;
  }
  return errors;
}
