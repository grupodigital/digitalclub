import { SITE } from "@/lib/form/config";

export default function Footer() {
  return (
    <footer className="border-t border-dc-border">
      <div className="mx-auto max-w-3xl px-6 py-8 sm:px-8">
        <p className="font-dc-sans text-[11px] font-semibold tracking-[0.18em] text-dc-muted uppercase">
          © {new Date().getFullYear()} {SITE.brand}
        </p>
      </div>
    </footer>
  );
}
