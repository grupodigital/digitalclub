"use client";

import { useRef, useState, type Dispatch, type SetStateAction } from "react";
import {
  FIELDS,
  FORM_INTRO,
  type FormField,
  type FormValues,
} from "@/lib/form/config";
import { maskPhoneBR, validateAll, validateField } from "@/lib/form/validation";
import { submitForm } from "@/lib/form/submitForm";
import { useAutoAdvance } from "@/hooks/useAutoAdvance";
import Field from "./ui/Field";
import { Select, TextArea, TextInput } from "./ui/Inputs";
import Button from "./ui/Button";

/** Avanço automático entre campos. Mude para false para desligar. */
const AUTO_ADVANCE = true;

const isApple = () =>
  typeof navigator !== "undefined" &&
  /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);

interface ApplicationFormProps {
  values: FormValues;
  setValues: Dispatch<SetStateAction<FormValues>>;
  onSuccess: (data: FormValues) => void;
}

export default function ApplicationForm({
  values,
  setValues,
  onSuccess,
}: ApplicationFormProps) {
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [submitError, setSubmitError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const goTo = useAutoAdvance(formRef, FIELDS);

  /**
   * Valida o campo atual; se estiver ok, avança. Se não, mostra o erro e fica.
   *
   * `overrideValue` existe porque o avanço disparado de dentro do onChange roda
   * antes do state novo chegar — sem ele, validaríamos o valor antigo.
   */
  const tryAdvance = (field: FormField, index: number, overrideValue?: string) => {
    const value = overrideValue !== undefined ? overrideValue : values[field.name];
    const error = validateField(field, value);
    setTouched((prev) => ({ ...prev, [field.name]: true }));
    setErrors((prev) => ({ ...prev, [field.name]: error }));
    if (!error) goTo(index + 1);
  };

  const setValue = (field: FormField, index: number, raw: string) => {
    const previous = values[field.name];
    const value = field.mask === "phone-br" ? maskPhoneBR(raw) : raw;

    setValues((prev) => ({ ...prev, [field.name]: value }));

    // Só revalida em tempo real depois que o campo já foi tocado.
    if (touched[field.name]) {
      setErrors((prev) => ({ ...prev, [field.name]: validateField(field, value) }));
    }

    if (!AUTO_ADVANCE) return;

    // Select: escolher uma opção já conclui o campo.
    if (field.type === "select" && value) {
      setTimeout(() => tryAdvance(field, index, value), 120);
      return;
    }

    // Telefone: avança quando a máscara completa (e não enquanto edita).
    if (field.mask === "phone-br") {
      const before = previous.replace(/\D/g, "").length;
      const after = value.replace(/\D/g, "").length;
      if (after === 11 && before < 11)
        setTimeout(() => tryAdvance(field, index, value), 120);
    }
  };

  const handleKeyDown =
    (field: FormField, index: number) =>
    (event: React.KeyboardEvent<HTMLElement>) => {
      if (!AUTO_ADVANCE || event.key !== "Enter") return;

      // Em textarea, Enter quebra linha — avançar exige Cmd/Ctrl + Enter.
      const shouldAdvance =
        field.type === "textarea" ? event.metaKey || event.ctrlKey : !event.shiftKey;

      if (!shouldAdvance) return;
      event.preventDefault();
      tryAdvance(field, index);
    };

  const handleBlur = (field: FormField) => {
    setFocused(null);
    setTouched((prev) => ({ ...prev, [field.name]: true }));
    setErrors((prev) => ({
      ...prev,
      [field.name]: validateField(field, values[field.name]),
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");

    const nextErrors = validateAll(FIELDS, values);
    setErrors(nextErrors);
    setTouched(Object.fromEntries(FIELDS.map((f) => [f.name, true])));

    const firstInvalid = FIELDS.findIndex((f) => nextErrors[f.name]);
    if (firstInvalid !== -1) {
      setStatus("error");
      goTo(firstInvalid);
      return;
    }

    setStatus("sending");
    try {
      await submitForm(values);
      onSuccess(values);
    } catch (err) {
      setStatus("error");
      setSubmitError((err as Error).message);
    }
  };

  const errorCount = Object.values(errors).filter(Boolean).length;
  const enterHint = (field: FormField) =>
    field.type === "textarea" ? `${isApple() ? "⌘" : "Ctrl"} + ↵ avançar` : "↵ avançar";

  return (
    <div className="mx-auto max-w-3xl px-6 pt-14 pb-20 sm:px-8 sm:pt-20 sm:pb-28">
      {/* Cabeçalho enxuto */}
      <header className="dc-animate-in">
        <p className="dc-eyebrow">Aplicação</p>
        <h1 className="mt-4 text-[2.25rem] leading-[1.05] sm:text-5xl">
          Envie sua aplicação
        </h1>
        <div className="dc-rule my-7 w-16" />
        <p className="max-w-xl font-dc-sans text-sm leading-[1.85] text-dc-muted sm:text-[15px]">
          {FORM_INTRO}
        </p>
      </header>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        noValidate
        className="dc-animate-in mt-12 sm:mt-16"
        style={{ animationDelay: "100ms" }}
      >
        <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-7">
          {FIELDS.map((field, index) => {
            const id = `f-${field.name}`;
            const invalid = Boolean(errors[field.name]) && touched[field.name];
            const shared = {
              id,
              name: field.name,
              value: values[field.name],
              required: field.required,
              invalid,
              "aria-invalid": invalid,
              "aria-describedby": invalid ? `${id}-error` : undefined,
              onChange: (
                e: React.ChangeEvent<
                  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
                >
              ) => setValue(field, index, e.target.value),
              onKeyDown: handleKeyDown(field, index),
              onFocus: () => setFocused(field.name),
              onBlur: () => handleBlur(field),
            };

            return (
              <div
                key={field.name}
                className={field.span === "full" ? "sm:col-span-2" : "sm:col-span-1"}
              >
                <Field
                  id={id}
                  label={field.label}
                  required={field.required}
                  error={touched[field.name] ? errors[field.name] : null}
                  hint={
                    field.maxLength && values[field.name].length > 0
                      ? `${values[field.name].length}/${field.maxLength}`
                      : undefined
                  }
                  note={
                    AUTO_ADVANCE && focused === field.name && field.type !== "select"
                      ? enterHint(field)
                      : undefined
                  }
                >
                  {field.type === "textarea" ? (
                    <TextArea
                      {...shared}
                      rows={field.rows || 4}
                      maxLength={field.maxLength}
                      placeholder={field.placeholder}
                    />
                  ) : field.type === "select" ? (
                    <Select
                      {...shared}
                      options={field.options}
                      placeholder={field.placeholder}
                    />
                  ) : (
                    <TextInput
                      {...shared}
                      type={field.type}
                      inputMode={field.type === "tel" ? "numeric" : undefined}
                      autoComplete={field.autoComplete}
                      placeholder={field.placeholder}
                    />
                  )}
                </Field>
              </div>
            );
          })}
        </div>

        {/* Ações */}
        <div className="mt-8 sm:mt-10">
          {status === "error" && (errorCount > 0 || submitError) && (
            <p
              role="alert"
              className="mb-6 border border-dc-error/40 bg-dc-error-soft px-5 py-4 font-dc-sans text-sm font-medium text-dc-error"
            >
              {submitError ||
                `Revise ${
                  errorCount === 1
                    ? "o campo destacado"
                    : `os ${errorCount} campos destacados`
                } antes de enviar.`}
            </p>
          )}

          <Button
            type="submit"
            variant="solid"
            disabled={status === "sending"}
            loading={status === "sending"}
            className="w-full sm:w-auto"
          >
            {status === "sending" ? "Enviando" : "Enviar aplicação"}
          </Button>

          <p className="mt-5 font-dc-sans text-xs leading-relaxed text-dc-muted">
            Seus dados são usados apenas no processo de curadoria.
          </p>
        </div>
      </form>
    </div>
  );
}
