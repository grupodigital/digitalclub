import { useCallback, type RefObject } from "react";
import type { FormField } from "@/lib/form/config";

/** Respeita a preferência do sistema por menos movimento. */
function prefersReducedMotion(): boolean {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
}

/**
 * Move o foco entre os campos do formulário com rolagem suave.
 *
 * Recebe a ref do <form> e consulta o DOM pelo atributo `name`, evitando
 * ter que encadear refs por cada componente de input.
 */
export function useAutoAdvance(
  formRef: RefObject<HTMLFormElement | null>,
  fields: FormField[]
) {
  const focusEl = useCallback((el: HTMLElement | null) => {
    if (!el) return;
    // Foca antes de rolar: o teclado do mobile já sobe e a rolagem
    // acontece em cima do viewport final, sem "pulo" depois.
    el.focus({ preventScroll: true });
    requestAnimationFrame(() => {
      el.scrollIntoView({
        behavior: prefersReducedMotion() ? "auto" : "smooth",
        block: "center",
      });
    });
  }, []);

  /**
   * Vai para o campo de índice `index`.
   * Passou do último campo, vai para o botão de envio.
   */
  return useCallback(
    (index: number) => {
      const form = formRef.current;
      if (!form) return;

      const next = fields[index];
      const el = next
        ? form.querySelector<HTMLElement>(`[name="${next.name}"]`)
        : form.querySelector<HTMLElement>('button[type="submit"]');

      focusEl(el);
    },
    [formRef, fields, focusEl]
  );
}
