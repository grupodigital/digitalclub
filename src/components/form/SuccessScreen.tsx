import { SITE } from "@/lib/form/config";
import Button from "./ui/Button";

export default function SuccessScreen({ name }: { name?: string }) {
  const firstName = (name || "").trim().split(/\s+/)[0];

  return (
    <div className="mx-auto flex min-h-[70dvh] max-w-3xl items-center px-6 py-20 sm:px-8">
      <div className="dc-animate-in">
        <span className="flex size-14 items-center justify-center rounded-full bg-dc-accent-soft text-dc-accent-ink">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="size-6"
            aria-hidden="true"
          >
            <path d="m4 12.5 5.5 5.5L20 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>

        <h1 className="mt-8 text-[2.25rem] leading-[1.05] sm:text-5xl">
          {firstName ? `Obrigado, ${firstName}.` : "Obrigado."}
          <br />
          <span className="text-dc-accent-ink">Sua aplicação foi recebida.</span>
        </h1>

        <div className="dc-rule my-8 w-16" />

        <p className="max-w-lg font-dc-sans text-sm leading-[1.85] text-dc-muted sm:text-[15px]">
          Nossa equipe vai analisar seu perfil. Se aprovado, você recebe o convite para
          integrar o {SITE.brand}.
        </p>

        <Button as="a" href={SITE.siteUrl} variant="outline" className="mt-10">
          Voltar ao site
        </Button>
      </div>
    </div>
  );
}
