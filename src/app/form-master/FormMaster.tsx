import FormShell from "./FormShell";
import { BLOCKS, HERO, type FMField, type FMOption } from "./fields";

const optionValue = (o: FMOption) => (typeof o === "string" ? o : o.value);
const optionLabel = (o: FMOption) => (typeof o === "string" ? o : o.label);

function FieldShell({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="field">
      <label className="q">
        {label}
        {required && <span className="req">*</span>}
      </label>
      {children}
      {hint && <div className="hint">{hint}</div>}
    </div>
  );
}

function Choices({
  field,
}: {
  field: Extract<FMField, { kind: "choices" }>;
}) {
  return (
    <div className={field.stack ? "choices stack" : "choices"}>
      {field.options.map((option) => (
        <label className="choice" key={optionValue(option)}>
          <input
            type={field.input}
            name={field.name}
            value={optionValue(option)}
          />
          <span className="pill">
            <span className="mark" />
            {optionLabel(option)}
          </span>
        </label>
      ))}
    </div>
  );
}

function Scale({ name }: { name: string }) {
  return (
    <div className="scale">
      {Array.from({ length: 11 }, (_, i) => (
        <label className="choice" key={i}>
          <input type="radio" name={name} value={i} />
          <span className="pill">{i}</span>
        </label>
      ))}
    </div>
  );
}

function Field({ field }: { field: FMField }) {
  switch (field.kind) {
    case "row":
      return (
        <div className="two-col">
          {field.fields.map((inner, index) => (
            <Field key={inner.kind === "row" ? index : inner.name} field={inner} />
          ))}
        </div>
      );
    case "input":
      return (
        <FieldShell label={field.label} required={field.required}>
          <input
            type={field.type}
            name={field.name}
            required={field.required}
            placeholder={field.placeholder}
          />
        </FieldShell>
      );
    case "textarea":
      return (
        <FieldShell label={field.label} hint={field.hint}>
          <textarea
            name={field.name}
            style={field.minHeight ? { minHeight: field.minHeight } : undefined}
          />
        </FieldShell>
      );
    case "select":
      return (
        <FieldShell label={field.label}>
          <select name={field.name} defaultValue="">
            <option value="" />
            {field.options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </FieldShell>
      );
    case "choices":
      return (
        <FieldShell label={field.label}>
          <Choices field={field} />
        </FieldShell>
      );
    case "scale":
      return (
        <FieldShell label={field.label}>
          <Scale name={field.name} />
        </FieldShell>
      );
  }
}

export default function FormMaster() {
  return (
    <>
      <div className="topbar">
        <div className="wordmark">Digital Club</div>
      </div>

      <div className="hero">
        <div className="eyebrow">{HERO.eyebrow}</div>
        <h1>{HERO.title}</h1>
        {HERO.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>

      <FormShell>
        {BLOCKS.map((block) => (
          <div className="block" key={block.eyebrow}>
            <div className="block-eyebrow">{block.eyebrow}</div>
            <h2>{block.title}</h2>
            {block.note && <p className="block-note">{block.note}</p>}
            {block.fields.map((field, index) => (
              <Field key={field.kind === "row" ? index : field.name} field={field} />
            ))}
          </div>
        ))}
      </FormShell>

      <div className="footer-note">Digital Club</div>
    </>
  );
}
