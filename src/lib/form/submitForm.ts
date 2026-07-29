import { FIELDS, type FormValues } from "./config";

const WEBHOOK_URL = process.env.NEXT_PUBLIC_WEBHOOK_URL || "";
const FORM_ID = process.env.NEXT_PUBLIC_GHL_FORM_ID || "sKs8D7g4cdsZRMTZdF0P";

const DEV = process.env.NODE_ENV !== "production";
const log = (...a: unknown[]) =>
  DEV && console.info("%c[webhook]", "color:#8FB39C;font-weight:bold", ...a);
const warn = (...a: unknown[]) => DEV && console.warn("[webhook]", ...a);

/**
 * Monta o corpo enviado ao webhook.
 *
 * O objeto é PLANO de propósito: o gatilho de Inbound Webhook do GoHighLevel
 * expõe cada chave de primeiro nível como {{inboundWebhookRequest.<chave>}},
 * o que permite mapear direto para campos do contato sem expressões.
 */
function buildPayload(values: FormValues) {
  const flat: Record<string, string> = {};
  const answers: { label: string; value: string }[] = [];

  for (const field of FIELDS) {
    const value = (values[field.name] ?? "").trim();
    flat[field.ghlKey] = value;
    if (value) answers.push({ label: field.label, value });
  }

  if (flat.full_name) {
    const parts = flat.full_name.split(/\s+/);
    flat.first_name = parts[0];
    flat.last_name = parts.slice(1).join(" ");
  }

  // Telefone em E.164 — evita contato duplicado no CRM.
  if (flat.phone) {
    const digits = flat.phone.replace(/\D/g, "");
    flat.phone_e164 = digits.startsWith("55") ? `+${digits}` : `+55${digits}`;
  }

  return {
    ...flat,
    answers,
    summary: answers.map((a) => `${a.label}\n${a.value}`).join("\n\n"),
    form_id: FORM_ID,
    submitted_at: new Date().toISOString(),
    page_url: window.location.href,
    referrer: document.referrer || null,
  };
}

function post(
  body: string,
  { contentType, opaque = false }: { contentType: string; opaque?: boolean }
) {
  return fetch(WEBHOOK_URL, {
    method: "POST",
    mode: opaque ? "no-cors" : "cors",
    headers: { "Content-Type": contentType },
    body,
  });
}

/**
 * Envia a aplicação, degradando em três níveis.
 *
 * 1. `application/json` — semanticamente correto. O GHL faz o parse do corpo e
 *    expõe as chaves na automação. Dispara preflight OPTIONS.
 * 2. `text/plain` — "simple request", não dispara preflight. Usado só se o
 *    passo 1 for bloqueado por CORS. Risco: o GHL pode não fazer o parse.
 * 3. `no-cors` — a requisição sai, mas a resposta é opaca. Último recurso:
 *    a entrega é provável, não confirmada.
 *
 * A ordem importa. Tentar `text/plain` primeiro evitaria o problema de CORS,
 * mas correria o risco de o GHL receber um corpo que não sabe interpretar —
 * chegaria a requisição e não chegariam os campos.
 */
export async function submitForm(values: FormValues) {
  if (!WEBHOOK_URL) {
    throw new Error(
      "Webhook não configurado. Defina NEXT_PUBLIC_WEBHOOK_URL no .env.local e reinicie o servidor."
    );
  }

  const payload = buildPayload(values);
  const body = JSON.stringify(payload);

  log("enviando para", WEBHOOK_URL);
  log("payload", payload);

  const attempts = [
    { label: "application/json", opts: { contentType: "application/json" } },
    {
      label: "text/plain (sem preflight)",
      opts: { contentType: "text/plain;charset=UTF-8" },
    },
    {
      label: "no-cors (opaco)",
      opts: { contentType: "text/plain;charset=UTF-8", opaque: true },
      opaque: true,
    },
  ];

  let lastHttpError: Error | null = null;

  for (const attempt of attempts) {
    try {
      const response = await post(body, attempt.opts);

      if (attempt.opaque) {
        warn(`ENTREGUE via ${attempt.label} — resposta ilegível, entrega NÃO confirmada.`);
        return { verified: false, via: attempt.label };
      }

      if (response.ok) {
        log(`%cSUCESSO — ${response.status} via ${attempt.label}`, "color:#8FB39C");
        return { verified: true, via: attempt.label, status: response.status };
      }

      // Resposta lida: o servidor respondeu e recusou. Não adianta degradar.
      const text = await response.text().catch(() => "");
      warn(`RECUSADO — ${response.status} via ${attempt.label}`, text);
      lastHttpError = new Error(
        `O envio não pôde ser concluído (erro ${response.status}). Tente novamente em instantes.`
      );
      break;
    } catch (err) {
      // TypeError = falha de rede ou bloqueio de CORS. Vale tentar o próximo nível.
      warn(`bloqueado em ${attempt.label} — ${(err as Error).message}`);
    }
  }

  throw (
    lastHttpError ||
    new Error("Não foi possível conectar ao servidor. Verifique sua conexão e tente novamente.")
  );
}
