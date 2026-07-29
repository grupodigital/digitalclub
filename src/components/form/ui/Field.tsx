import type { ReactNode } from "react";

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string | null;
  hint?: string;
  note?: string;
  children: ReactNode;
}

export default function Field({
  id,
  label,
  required,
  error,
  hint,
  note,
  children,
}: FieldProps) {
  return (
    <div className="flex flex-col gap-3">
      <label
        htmlFor={id}
        className="font-dc-sans text-[11px] leading-relaxed font-semibold tracking-[0.16em] text-dc-text uppercase sm:text-xs"
      >
        {label}
        {required && <span className="ml-1 text-dc-accent-ink">*</span>}
      </label>

      {children}

      <div className="flex min-h-[1rem] items-start justify-between gap-4">
        <div className="min-w-0">
          {error ? (
            <p
              id={`${id}-error`}
              role="alert"
              className="font-dc-sans text-xs font-medium text-dc-error sm:text-[13px]"
            >
              {error}
            </p>
          ) : hint ? (
            <p className="font-dc-sans text-xs text-dc-muted sm:text-[13px]">{hint}</p>
          ) : null}
        </div>

        {/* Dica de teclado — só aparece no campo em foco */}
        {note && !error && (
          <p className="shrink-0 font-dc-sans text-[11px] text-dc-muted tabular-nums">
            {note}
          </p>
        )}
      </div>
    </div>
  );
}
