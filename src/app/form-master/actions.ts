"use server";

import { headers } from "next/headers";
import { updateRow } from "@/lib/supabase/client";
import { sendToClickUp, sendToEmail, sendToSupabase } from "./channels";
import { TABLE } from "./row";
import { HONEYPOT } from "./fields";

export interface SubmitState {
  status: "idle" | "success" | "error";
  message?: string;
}

export async function submitFormMaster(
  _prev: SubmitState,
  data: FormData
): Promise<SubmitState> {
  // Isca de bot: o campo é invisível, então só um robô o preenche.
  if ((data.get(HONEYPOT) as string)?.trim()) {
    return { status: "success" };
  }

  if (!(data.get("01. Nome completo") as string)?.trim()) {
    return { status: "error", message: "Informe seu nome completo para enviar." };
  }

  const head = await headers();

  // Os três em paralelo: nenhum canal espera pelo outro, e a falha de um não
  // impede os demais de registrarem a resposta.
  const [supabase, clickUp, email] = await Promise.allSettled([
    sendToSupabase(data, {
      origin: head.get("referer") ?? undefined,
      userAgent: head.get("user-agent") ?? undefined,
    }),
    sendToClickUp(data),
    sendToEmail(data),
  ]);

  if (supabase.status === "fulfilled") {
    console.info(`[form-master] Supabase: linha ${supabase.value?.id}`);
  } else {
    console.error("[form-master] Supabase:", supabase.reason);
  }

  if (clickUp.status === "fulfilled") {
    console.info(
      `[form-master] ClickUp: ${clickUp.value.mode} — ${clickUp.value.url}`
    );
  } else {
    console.error("[form-master] ClickUp:", clickUp.reason);
  }
  if (email.status === "rejected") console.error("[form-master] e-mail:", email.reason);

  // Liga os dois registros. Best-effort: a resposta já está salva, e falhar
  // aqui não pode transformar um envio bem-sucedido em erro para o membro.
  if (supabase.status === "fulfilled" && supabase.value?.id && clickUp.status === "fulfilled") {
    await updateRow(TABLE, supabase.value.id, {
      clickup_url: clickUp.value.url,
      clickup_modo: clickUp.value.mode,
    }).catch((error) => console.error("[form-master] carimbo do ClickUp:", error));
  }

  // Um canal entregue já garante que a resposta não se perdeu.
  if (
    supabase.status === "fulfilled" ||
    clickUp.status === "fulfilled" ||
    email.status === "fulfilled"
  ) {
    return { status: "success" };
  }

  return {
    status: "error",
    message:
      "Não conseguimos registrar suas respostas agora. Tente novamente em instantes — suas respostas continuam preenchidas.",
  };
}
