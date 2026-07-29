import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

const CONTROL =
  "w-full bg-dc-surface border px-4 py-4 sm:px-5 font-dc-sans text-[15px] sm:text-base " +
  "text-dc-text placeholder:text-dc-placeholder transition-all duration-200 " +
  "focus:outline-none focus:border-dc-accent focus:ring-2 focus:ring-dc-accent/15";

const ok = "border-dc-border hover:border-dc-border-strong";
const bad = "border-dc-error bg-dc-error-soft";

const cls = (invalid?: boolean, extra = "") =>
  `${CONTROL} ${invalid ? bad : ok} ${extra}`;

type WithInvalid<T> = T & { invalid?: boolean };

export function TextInput({
  invalid,
  ...props
}: WithInvalid<InputHTMLAttributes<HTMLInputElement>>) {
  return <input className={cls(invalid)} {...props} />;
}

export function TextArea({
  invalid,
  ...props
}: WithInvalid<TextareaHTMLAttributes<HTMLTextAreaElement>>) {
  return (
    <textarea className={cls(invalid, "resize-y min-h-32 leading-relaxed")} {...props} />
  );
}

export function Select({
  invalid,
  placeholder,
  options = [],
  ...props
}: WithInvalid<SelectHTMLAttributes<HTMLSelectElement>> & {
  placeholder?: string;
  options?: string[];
}) {
  const empty = !props.value;
  return (
    <div className="relative">
      <select
        className={cls(
          invalid,
          `appearance-none pr-12 cursor-pointer ${empty ? "text-dc-placeholder" : ""}`
        )}
        {...props}
      >
        <option value="" disabled>
          {placeholder || "Selecione"}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="text-dc-text">
            {opt}
          </option>
        ))}
      </select>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-dc-muted"
      >
        <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
