import type { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";

const BASE =
  "group inline-flex items-center justify-center gap-4 border px-8 py-4 sm:px-10 sm:py-5 " +
  "font-dc-sans font-semibold text-[11px] sm:text-xs uppercase tracking-[0.18em] leading-none " +
  "transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-50";

const VARIANTS = {
  outline:
    "border-dc-border-strong text-dc-text bg-transparent " +
    "hover:enabled:bg-dc-cta hover:enabled:text-dc-on-cta hover:enabled:border-dc-cta",
  solid:
    "border-dc-cta bg-dc-cta text-dc-on-cta " +
    "hover:enabled:bg-transparent hover:enabled:text-dc-text",
};

type ButtonProps<T extends ElementType> = {
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
  as?: T;
  className?: string;
  loading?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export default function Button<T extends ElementType = "button">({
  children,
  variant = "outline",
  as,
  className = "",
  loading = false,
  ...props
}: ButtonProps<T>) {
  const Tag = (as || "button") as ElementType;
  return (
    <Tag className={`${BASE} ${VARIANTS[variant]} ${className}`} {...props}>
      <span>{children}</span>
      {loading ? (
        <span
          aria-hidden="true"
          className="size-3.5 shrink-0 animate-spin rounded-full border-2 border-current border-t-transparent"
        />
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        >
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </Tag>
  );
}
