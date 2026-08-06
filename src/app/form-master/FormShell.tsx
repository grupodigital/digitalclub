"use client";

import { useActionState, useEffect } from "react";
import { submitFormMaster, type SubmitState } from "./actions";
import { HONEYPOT, SUBMIT_NOTE } from "./fields";

const INITIAL: SubmitState = { status: "idle" };

function Success() {
  return (
    <div className="done">
      <div className="eyebrow">Recebemos</div>
      <h2>Obrigado. Suas respostas chegaram até nós.</h2>
      <p>
        A partir de agora elas orientam todo o seu acompanhamento como membro do
        Digital Club. Em breve alguém do time entra em contato com você.
      </p>
    </div>
  );
}

/**
 * Envolve o formulário para poder falar com a Server Action.
 *
 * As perguntas continuam sendo renderizadas no servidor e entram aqui como
 * `children` — só a casca precisa rodar no cliente, então a configuração das
 * 93 perguntas não vai para o pacote do navegador.
 *
 * Em caso de erro o React preserva o DOM: as respostas já digitadas
 * continuam nos campos. Isso é o ponto crítico num formulário deste tamanho.
 */
export default function FormShell({ children }: { children: React.ReactNode }) {
  const [state, action, pending] = useActionState(submitFormMaster, INITIAL);

  useEffect(() => {
    if (state.status === "success") window.scrollTo({ top: 0, behavior: "smooth" });
  }, [state.status]);

  if (state.status === "success") return <Success />;

  return (
    <form action={action}>
      {children}

      <label className="honey" aria-hidden="true">
        Não preencha
        <input type="text" name={HONEYPOT} tabIndex={-1} autoComplete="off" />
      </label>

      <div className="submit-wrap">
        {state.status === "error" && state.message && (
          <p className="submit-error" role="alert">
            {state.message}
          </p>
        )}
        <p>{SUBMIT_NOTE}</p>
        <button type="submit" className="submit" disabled={pending}>
          {pending ? "Enviando…" : "Enviar respostas"}
        </button>
      </div>
    </form>
  );
}
