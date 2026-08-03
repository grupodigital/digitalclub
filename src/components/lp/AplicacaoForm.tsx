"use client";

import { useMemo, useState } from "react";
import ApplicationForm from "@/components/form/ApplicationForm";
import SuccessScreen from "@/components/form/SuccessScreen";
import { FIELDS, INITIAL_VALUES, type FormValues } from "@/lib/form/config";

const REQUIRED = FIELDS.filter((f) => f.required);

/**
 * Versão embutida do formulário de /form para a home.
 *
 * Reaproveita exatamente os mesmos campos, validação e envio
 * (ApplicationForm + SuccessScreen), dispensando o chrome de página
 * (Header fixo / Footer). O progresso vira uma linha fina no topo do card.
 */
export default function AplicacaoForm() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [submitted, setSubmitted] = useState<FormValues | null>(null);

  const progress = useMemo(() => {
    if (submitted) return 1;
    const done = REQUIRED.filter(
      (f) => (values[f.name] ?? "").trim().length > 0
    ).length;
    return REQUIRED.length ? done / REQUIRED.length : 0;
  }, [values, submitted]);

  return (
    <div className="overflow-hidden">
      {/* Progresso do preenchimento */}
      <div
        role="progressbar"
        aria-valuenow={Math.round(progress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progresso do preenchimento"
        className="h-px w-full bg-dc-border"
      >
        <div
          className="h-full bg-dc-accent transition-[width] duration-500 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {submitted ? (
        <SuccessScreen name={submitted.fullName} />
      ) : (
        <ApplicationForm
          values={values}
          setValues={setValues}
          onSuccess={setSubmitted}
        />
      )}
    </div>
  );
}
