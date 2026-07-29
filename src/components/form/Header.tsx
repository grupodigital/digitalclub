import { SITE } from "@/lib/form/config";

/** Barra fina com a marca e o progresso do preenchimento. */
export default function Header({ progress = 0 }: { progress?: number }) {
  return (
    <header className="sticky top-0 z-50 border-b border-dc-border bg-dc-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5 sm:px-8">
        <a href={SITE.siteUrl} className="transition-opacity hover:opacity-70">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.webp"
            alt={SITE.brand}
            /* Altura fixa e largura automática preservam a proporção do wordmark */
            className="h-6 w-auto sm:h-7"
            width="256"
            height="58"
          />
        </a>

        <span className="font-dc-sans text-[11px] font-semibold tracking-[0.18em] text-dc-muted uppercase tabular-nums">
          {Math.round(progress * 100)}%
        </span>
      </div>

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
    </header>
  );
}
