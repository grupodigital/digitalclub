/**
 * Escrita no Supabase via PostgREST.
 *
 * É uma chamada só, então não vale puxar o @supabase/supabase-js para o site:
 * um fetch resolve e mantém a dependência fora do projeto.
 *
 * Só existe do lado do servidor. SUPABASE_SERVICE_ROLE_KEY não tem o prefixo
 * NEXT_PUBLIC_ de propósito: ela IGNORA a RLS, e no navegador daria a qualquer
 * visitante acesso total à tabela.
 */

export function supabaseConfig() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  return { url, key, enabled: Boolean(url && key) };
}

export async function insertRow<T extends Record<string, unknown>>(
  table: string,
  row: T
) {
  const { url, key, enabled } = supabaseConfig();
  if (!enabled) {
    throw new Error(
      "Supabase não configurado (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY)."
    );
  }

  const response = await fetch(`${url}/rest/v1/${table}`, {
    method: "POST",
    headers: {
      apikey: key!,
      Authorization: `Bearer ${key!}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(row),
    cache: "no-store",
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`Supabase ${response.status} em ${table}: ${body.slice(0, 300)}`);
  }

  const [inserted] = (await response.json()) as { id: string }[];
  return inserted;
}

/** Completa uma linha já gravada. Usado para carimbar o link do ClickUp. */
export async function updateRow(
  table: string,
  id: string,
  patch: Record<string, unknown>
) {
  const { url, key, enabled } = supabaseConfig();
  if (!enabled) return;

  const response = await fetch(
    `${url}/rest/v1/${table}?id=eq.${encodeURIComponent(id)}`,
    {
      method: "PATCH",
      headers: {
        apikey: key!,
        Authorization: `Bearer ${key!}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patch),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(`Supabase ${response.status} ao atualizar ${table}`);
  }
}
