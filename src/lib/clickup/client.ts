/**
 * Cliente mínimo da API do ClickUp (v2).
 *
 * Só existe do lado do servidor — CLICKUP_TOKEN não tem o prefixo
 * NEXT_PUBLIC_ de propósito, senão a chave iria para o navegador.
 *
 * Docs: https://developer.clickup.com/reference/createtask
 */

const API = "https://api.clickup.com/api/v2";

export interface ClickUpCustomFieldValue {
  id: string;
  value: string | number | string[];
}

export interface ClickUpTaskInput {
  name: string;
  markdown_content?: string;
  description?: string;
  custom_fields?: ClickUpCustomFieldValue[];
}

export interface ClickUpField {
  id: string;
  name: string;
  type: string;
  type_config?: {
    options?: { id: string; name?: string; label?: string; orderindex?: number }[];
  };
}

export function clickUpConfig() {
  const token = process.env.CLICKUP_TOKEN;
  const listId = process.env.CLICKUP_LIST_ID;
  return { token, listId, enabled: Boolean(token && listId) };
}

async function request<T>(path: string, token: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API}${path}`, {
    ...init,
    headers: {
      // Token pessoal vai cru; OAuth exigiria o prefixo "Bearer ".
      Authorization: token,
      "Content-Type": "application/json",
      ...init?.headers,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`ClickUp ${response.status} em ${path}: ${body.slice(0, 300)}`);
  }

  return response.json() as Promise<T>;
}

/** Campos personalizados disponíveis na lista, para resolver nome → id. */
export async function getListFields(listId: string, token: string) {
  const data = await request<{ fields: ClickUpField[] }>(
    `/list/${listId}/field`,
    token
  );
  return data.fields ?? [];
}

export async function createTask(
  listId: string,
  token: string,
  task: ClickUpTaskInput
) {
  return request<{ id: string; url: string }>(`/list/${listId}/task`, token, {
    method: "POST",
    body: JSON.stringify(task),
  });
}

export interface ClickUpTask {
  id: string;
  name: string;
  url: string;
}

/**
 * Todas as tarefas da lista, inclusive as fechadas — um membro em
 * "finalizado" continua sendo o mesmo membro.
 *
 * A API devolve 100 por página; `last_page` diz quando parar. O limite de
 * páginas evita laço infinito se a API mudar de comportamento.
 */
export async function listTasks(listId: string, token: string, maxPages = 20) {
  const tasks: ClickUpTask[] = [];

  for (let page = 0; page < maxPages; page++) {
    const data = await request<{ tasks: ClickUpTask[]; last_page?: boolean }>(
      `/list/${listId}/task?include_closed=true&subtasks=false&page=${page}`,
      token
    );

    tasks.push(...(data.tasks ?? []));
    if (data.last_page !== false || !data.tasks?.length) break;
  }

  return tasks;
}

export async function createComment(taskId: string, token: string, text: string) {
  return request<{ id: string }>(`/task/${taskId}/comment`, token, {
    method: "POST",
    body: JSON.stringify({ comment_text: text, notify_all: false }),
  });
}
