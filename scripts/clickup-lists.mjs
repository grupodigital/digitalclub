/**
 * Lista as listas do ClickUp acessíveis pelo token, para você achar o
 * CLICKUP_LIST_ID sem caçar na URL.
 *
 *   node scripts/clickup-lists.mjs
 *
 * Lê CLICKUP_TOKEN do ambiente ou do .env.local.
 */

import { readFileSync } from "node:fs";

function loadToken() {
  if (process.env.CLICKUP_TOKEN) return process.env.CLICKUP_TOKEN;
  try {
    const env = readFileSync(new URL("../.env.local", import.meta.url), "utf8");
    return env.match(/^CLICKUP_TOKEN=(.*)$/m)?.[1]?.trim().replace(/^["']|["']$/g, "");
  } catch {
    return undefined;
  }
}

const token = loadToken();

if (!token) {
  console.error("CLICKUP_TOKEN não encontrado no ambiente nem no .env.local.");
  process.exit(1);
}

async function api(path) {
  const response = await fetch(`https://api.clickup.com/api/v2${path}`, {
    headers: { Authorization: token },
  });
  if (!response.ok) {
    throw new Error(`${response.status} em ${path}: ${await response.text()}`);
  }
  return response.json();
}

const show = (list, indent) =>
  console.log(
    `${indent}• ${list.name}  →  CLICKUP_LIST_ID=${list.id}` +
      (list.task_count ? `   (${list.task_count} tarefas)` : "")
  );

/**
 * Percurso normal: espaços → pastas → listas.
 * Só enxerga o que o token é membro; devolve vazio para um convidado.
 */
async function walkSpaces(teamId) {
  const { spaces } = await api(`/team/${teamId}/space`);

  for (const space of spaces) {
    console.log(`  ▸ Espaço: ${space.name}`);

    const { lists } = await api(`/space/${space.id}/list`);
    lists.forEach((list) => show(list, "    "));

    const { folders } = await api(`/space/${space.id}/folder`);
    for (const folder of folders) {
      console.log(`    ▸ Pasta: ${folder.name}`);
      (folder.lists ?? []).forEach((list) => show(list, "      "));
    }
  }

  return spaces.length;
}

/**
 * Conta convidada não lista espaços — o que foi compartilhado com ela só
 * aparece aqui. Sem este passo o script devolve silêncio e parece quebrado.
 */
async function walkShared(teamId) {
  const { shared } = await api(`/team/${teamId}/shared`);

  console.log("  ▸ Compartilhado com este usuário (conta convidada)");
  (shared.lists ?? []).forEach((list) => show(list, "    "));

  for (const folder of shared.folders ?? []) {
    console.log(`    ▸ Pasta: ${folder.name}`);
    (folder.lists ?? []).forEach((list) => show(list, "      "));
  }
}

const { teams } = await api("/team");

for (const team of teams) {
  console.log(`\n▸ Workspace: ${team.name}  (id ${team.id} — NÃO é o list id)`);

  if ((await walkSpaces(team.id)) === 0) await walkShared(team.id);
}

console.log("\nCopie o id da lista desejada para o .env.local.\n");
