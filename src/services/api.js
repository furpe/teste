import { API_URL } from "../config";

// ═══════════════════════════════════════════════════════════════════════
//  ROTAS DISPONÍVEIS NO BACKEND  (sua "cola" — consulte o tempo todo)
// ═══════════════════════════════════════════════════════════════════════
//
//  PÚBLICAS (não precisam de token)
//  ┌────────┬──────────────────────────────┬────────────────────────────┐
//  │ POST   │ /api/usuarios/cadastrar      │ body: { nome, email, senha}│
//  │ POST   │ /api/usuarios/login          │ body: { email, senha }     │
//  └────────┴──────────────────────────────┴────────────────────────────┘
//
//  PRIVADAS (exigem o header  Authorization: Bearer <token>)
//  ┌────────┬──────────────────────────────┬────────────────────────────┐
//  │ GET    │ /api/usuarios                │ lista todo mundo           │
//  │ GET    │ /api/usuarios/perfil         │ meus próprios dados        │
//  │ PUT    │ /api/usuarios/editar         │ body: { nome, email }      │
//  │ DELETE │ /api/usuarios/desativar      │ sem body                   │
//  └────────┴──────────────────────────────┴────────────────────────────┘

export async function login(email, senha) {
  const resposta = await fetch(`${API_URL}/api/usuarios/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha }),
  });

  const dados = await resposta.json();

  if (!resposta.ok) {
    throw new Error(dados.mensagem || "Não foi possível entrar.");
  }

  return dados;
}

// 🚧 TAREFA 1 — ENVIO (POST)
export async function cadastrar(nome, email, senha) {
  const resposta = await fetch(`${API_URL}/api/usuarios/cadastrar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, email, senha }),
  });

  const dados = await resposta.json();

  if (!resposta.ok) {
    throw new Error(dados.mensagem || "Não foi possível cadastrar o usuário.");
  }

  return dados;
}

// 🚧 TAREFA 2 — LISTAGEM (GET + token)
export async function listarUsuarios(token) {
  const resposta = await fetch(`${API_URL}/api/usuarios`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const dados = await resposta.json();

  if (!resposta.ok) {
    throw new Error(dados.mensagem || "Não foi possível carregar a lista de usuários.");
  }

  return dados.usuarios;
}

// 🚧 TAREFA 3 — EDIÇÃO (PUT)
export async function editarPerfil(token, nome, email) {
  const resposta = await fetch(`${API_URL}/api/usuarios/editar`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ nome, email }),
  });

  const dados = await resposta.json();

  if (!resposta.ok) {
    throw new Error(dados.mensagem || "Não foi possível atualizar o perfil.");
  }

  return dados;
}

// 🚧 TAREFA 4 — EXCLUSÃO (DELETE)
export async function desativarConta(token) {
  const resposta = await fetch(`${API_URL}/api/usuarios/desativar`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const dados = await resposta.json();

  if (!resposta.ok) {
    throw new Error(dados.mensagem || "Não foi possível desativar a conta.");
  }

  return dados;
}