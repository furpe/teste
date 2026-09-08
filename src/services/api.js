// ═══════════════════════════════════════════════════════════════════════
//
//   🎯  ESTE É O ARQUIVO DA AULA. É AQUI QUE VOCÊ VAI TRABALHAR.
//
//   Todo o resto do projeto (telas, botões, cores) já está pronto.
//   Falta só uma coisa: FAZER O REACT CONVERSAR COM A API.
//
// ═══════════════════════════════════════════════════════════════════════

import { API_URL } from "../config";

// ═══════════════════════════════════════════════════════════════════════
//  ROTAS DISPONÍVEIS NO BACKEND
// ═══════════════════════════════════════════════════════════════════════
//
//  PÚBLICAS
//  POST   /api/usuarios/cadastrar
//  POST   /api/usuarios/login
//
//  PRIVADAS
//  GET    /api/usuarios
//  GET    /api/usuarios/perfil
//  PUT    /api/usuarios/editar
//  DELETE /api/usuarios/desativar
//
// ═══════════════════════════════════════════════════════════════════════

// ╔═════════════════════════════════════════════════════════════════════╗
// ║  EXEMPLO RESOLVIDO — LOGIN                                          ║
// ╚═════════════════════════════════════════════════════════════════════╝

export async function login(email, senha) {
  const resposta = await fetch(`${API_URL}/api/usuarios/login`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ email, senha }),
  });

  const dados = await resposta.json();

  if (!resposta.ok) {
    throw new Error(dados.mensagem || "Não foi possível entrar.");
  }

  return dados;
}

// ╔═════════════════════════════════════════════════════════════════════╗
// ║  TAREFA 1 — ENVIO (POST)                                            ║
// ╚═════════════════════════════════════════════════════════════════════╝

export async function cadastrar(nome, email, senha) {
  // ↓↓↓ APAGUE ESTA LINHA E ESCREVA SEU CÓDIGO ↓↓↓
  throw new Error(
    "🚧 TAREFA 1 ainda não foi implementada (src/services/api.js)"
  );
}

// ╔═════════════════════════════════════════════════════════════════════╗
// ║  TAREFA 2 — LISTAGEM (GET + token)                                  ║
// ╚═════════════════════════════════════════════════════════════════════╝

export async function listarUsuarios(token) {
  // ↓↓↓ APAGUE ESTA LINHA E ESCREVA SEU CÓDIGO ↓↓↓
  throw new Error(
    "🚧 TAREFA 2 ainda não foi implementada (src/services/api.js)"
  );
}

// ╔═════════════════════════════════════════════════════════════════════╗
// ║  TAREFA 3 — EDIÇÃO (PUT)                                            ║
// ╚═════════════════════════════════════════════════════════════════════╝

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
    throw new Error(dados.mensagem || "Não foi possível salvar.");
  }

  return dados;
}

// ╔═════════════════════════════════════════════════════════════════════╗
// ║  TAREFA 4 — EXCLUSÃO (DELETE)                                       ║
// ╚═════════════════════════════════════════════════════════════════════╝

export async function desativarConta(token) {
  // ↓↓↓ APAGUE ESTA LINHA E ESCREVA SEU CÓDIGO ↓↓↓
  throw new Error(
    "🚧 TAREFA 4 ainda não foi implementada (src/services/api.js)"
  );
}



//export async function desativarConta(token) {
//  const resposta = await fetch(`${API_URL}/api/usuarios/desativar`, {
//    method: "DELETE",
//    headers: {
//      Authorization: `Bearer ${token}`,
//    },
//  });

//  const dados = await resposta.json();

//  if (!resposta.ok) {
//    throw new Error(dados.mensagem || "Não foi possível desativar a conta.");
//  }

//  return dados;
//}