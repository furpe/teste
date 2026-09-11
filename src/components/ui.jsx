/* ═══════════════════════════════════════════════════════════════
   Visual do projeto — tema "aurora" (roxo → magenta → vermelho)
   ═══════════════════════════════════════════════════════════════ */

:root {
  --fundo: #0d0512;
  --fundo-2: #180a22;
  --cartao: #1e0f2c;
  --borda: #3d1a4d;
  --texto: #f6ecfb;
  --texto-fraco: #b993c9;
  --acento: #ff2d8f;       /* magenta */
  --acento-2: #7b2ff7;     /* roxo */
  --acento-3: #ff3b3b;     /* vermelho */
  --ok: #34d399;
  --atencao: #fbbf24;
  --perigo: #ff4d4d;
  --raio: 14px;

  --gradiente-tema: linear-gradient(135deg, var(--acento-2), var(--acento) 55%, var(--acento-3));
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
  background: radial-gradient(1100px 600px at 8% -8%, #3a1360 0%, transparent 55%),
    radial-gradient(900px 550px at 100% 10%, #6b0a1e 0%, transparent 50%),
    radial-gradient(700px 500px at 60% 100%, #4a0d5c 0%, transparent 55%), var(--fundo);
  color: var(--texto);
  min-height: 100vh;
  padding-bottom: 60px;
}

h1,
h2 {
  margin: 0;
}
code {
  background: rgba(255, 45, 143, 0.14);
  padding: 1px 6px;
  border-radius: 6px;
  font-size: 0.86em;
  color: #ffd7ef;
}

/* ── Marca ─────────────────────────────────────────────── */
.marca {
  display: flex;
  align-items: center;
  gap: 12px;
}
.marca h1 {
  font-size: 1.15rem;
  letter-spacing: -0.3px;
}
.marca p {
  margin: 2px 0 0;
  font-size: 0.76rem;
  color: var(--texto-fraco);
}
.marca-ponto {
  width: 34px;
  height: 34px;
  border-radius: 11px;
  background: var(--gradiente-tema);
  box-shadow: 0 0 26px rgba(255, 45, 143, 0.5);
  flex: none;
}

/* ── Tela de acesso ────────────────────────────────────── */
.tela-acesso {
  min-height: 88vh;
  display: grid;
  place-items: center;
  padding: 24px;
}
.cartao-acesso {
  width: 100%;
  max-width: 400px;
  background: var(--cartao);
  border: 1px solid var(--borda);
  border-radius: 20px;
  padding: 28px;
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.55);
}
.abas {
  display: flex;
  gap: 6px;
  background: var(--fundo-2);
  padding: 5px;
  border-radius: 12px;
  margin: 22px 0 18px;
}
.aba {
  flex: 1;
  padding: 9px;
  border: 0;
  border-radius: 9px;
  background: transparent;
  color: var(--texto-fraco);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
}
.aba.ativa {
  background: var(--gradiente-tema);
  color: #fff;
}
.rodape-cartao {
  margin: 16px 0 0;
  font-size: 0.78rem;
  color: var(--texto-fraco);
  text-align: center;
  line-height: 1.6;
}

/* ── Campos e botões ───────────────────────────────────── */
.campo {
  display: block;
  margin-bottom: 14px;
}
.campo-rotulo {
  display: block;
  font-size: 0.76rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: var(--texto-fraco);
  margin-bottom: 6px;
}
.campo-input {
  width: 100%;
  padding: 11px 13px;
  border-radius: 10px;
  border: 1px solid var(--borda);
  background: var(--fundo-2);
  color: var(--texto);
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.campo-input:focus {
  border-color: var(--acento);
  box-shadow: 0 0 0 3px rgba(255, 45, 143, 0.2);
}
.campo-dica {
  display: block;
  margin-top: 6px;
  font-size: 0.72rem;
  color: var(--texto-fraco);
}
.busca {
  margin-bottom: 16px;
}

.botao {
  width: 100%;
  padding: 11px 16px;
  border: 0;
  border-radius: 10px;
  font-size: 0.92rem;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: transform 0.12s, opacity 0.15s;
}
.botao:hover:not(:disabled) {
  transform: translateY(-1px);
}
.botao:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}
.botao-primario {
  background: var(--gradiente-tema);
  color: #fff;
}
.botao-perigo {
  background: rgba(255, 77, 77, 0.15);
  color: var(--perigo);
  border: 1px solid rgba(255, 77, 77, 0.4);
}
.botao-fantasma {
  width: auto;
  background: transparent;
  color: var(--texto-fraco);
  border: 1px solid var(--borda);
  font-size: 0.82rem;
  padding: 8px 12px;
}
.linha-botoes {
  display: flex;
  gap: 8px;
}
.girando {
  width: 13px;
  height: 13px;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: #fff;
  border-radius: 50%;
  animation: girar 0.7s linear infinite;
}
@keyframes girar {
  to {
    transform: rotate(360deg);
  }
}

/* ── Avisos ────────────────────────────────────────────── */
.aviso {
  display: flex;
  gap: 9px;
  align-items: flex-start;
  padding: 10px 12px;
  border-radius: 10px;
  margin-bottom: 14px;
  font-size: 0.85rem;
  line-height: 1.45;
}
.aviso p {
  margin: 0;
}
.aviso-erro {
  background: rgba(255, 77, 77, 0.12);
  border: 1px solid rgba(255, 77, 77, 0.32);
  color: #ffc9c9;
}
.aviso-ok {
  background: rgba(52, 211, 153, 0.12);
  border: 1px solid rgba(52, 211, 153, 0.32);
  color: #a7f3d0;
}
.aviso-info {
  background: rgba(255, 45, 143, 0.12);
  border: 1px solid rgba(255, 45, 143, 0.32);
  color: #ffd0ea;
}

/* ── Painel ────────────────────────────────────────────── */
.painel {
  max-width: 1160px;
  margin: 0 auto;
  padding: 22px;
}
.cabecalho {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  padding-bottom: 18px;
  border-bottom: 1px solid var(--borda);
  margin-bottom: 22px;
}
.cabecalho-usuario {
  display: flex;
  align-items: center;
  gap: 11px;
}
.cabecalho-usuario strong {
  display: block;
  font-size: 0.88rem;
}
.cabecalho-usuario span {
  font-size: 0.75rem;
  color: var(--texto-fraco);
}

.conteudo {
  display: grid;
  grid-template-columns: 1fr 330px;
  gap: 18px;
  align-items: start;
}
@media (max-width: 900px) {
  .conteudo {
    grid-template-columns: 1fr;
  }
}
.coluna-lateral {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

/* ── Cartões ───────────────────────────────────────────── */
.cartao {
  background: var(--cartao);
  border: 1px solid var(--borda);
  border-radius: var(--raio);
  padding: 20px;
}
.cartao-perigo {
  border-color: rgba(255, 77, 77, 0.3);
}
.cartao-topo {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
}
.cartao h2 {
  font-size: 1.02rem;
}
.sub {
  margin: 3px 0 0;
  font-size: 0.78rem;
  color: var(--texto-fraco);
}
.texto-perigo {
  font-size: 0.82rem;
  color: var(--texto-fraco);
  line-height: 1.6;
  margin: 0 0 14px;
}
.selo {
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.6px;
  padding: 4px 8px;
  border-radius: 6px;
}
.selo-put {
  background: rgba(251, 191, 36, 0.16);
  color: var(--atencao);
}
.selo-delete {
  background: rgba(255, 77, 77, 0.16);
  color: var(--perigo);
}

/* ── Cards de usuário ──────────────────────────────────── */
.grade-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(215px, 1fr));
  gap: 11px;
}
.card-usuario {
  display: flex;
  gap: 11px;
  align-items: center;
  padding: 12px;
  border-radius: 11px;
  background: var(--fundo-2);
  border: 1px solid var(--borda);
  min-height: 66px;
  animation: surgir 0.28s ease both;
}
.card-usuario.eu {
  border-color: var(--acento);
  box-shadow: 0 0 0 1px rgba(255, 45, 143, 0.35);
}
@keyframes surgir {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
}
.card-texto {
  min-width: 0;
}
.card-texto strong {
  display: block;
  font-size: 0.88rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-texto span,
.card-texto small {
  display: block;
  font-size: 0.73rem;
  color: var(--texto-fraco);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-texto small {
  opacity: 0.6;
  margin-top: 2px;
}
.tag {
  font-size: 0.62rem;
  background: var(--acento);
  color: #fff;
  padding: 1px 6px;
  border-radius: 20px;
  vertical-align: middle;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-weight: 800;
  font-size: 0.82rem;
  color: #fff;
  flex: none;
}
.esqueleto {
  background: var(--fundo-2);
  animation: pulsar 1.2s ease-in-out infinite;
}
@keyframes pulsar {
  50% {
    opacity: 0.45;
  }
}
.vazio {
  text-align: center;
  padding: 34px 12px;
  color: var(--texto-fraco);
}
.vazio span {
  font-size: 2rem;
}
.vazio p {
  margin: 8px 0 0;
  font-size: 0.86rem;
}

/* ── Console de rede ───────────────────────────────────── */
.rede {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #060209;
  border-top: 1px solid var(--borda);
  font-family: "Cascadia Code", Consolas, monospace;
  z-index: 50;
}
.rede-barra {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 16px;
  background: transparent;
  border: 0;
  color: var(--texto-fraco);
  font-size: 0.78rem;
  cursor: pointer;
  font-family: inherit;
}
.rede-titulo em {
  font-style: normal;
  margin-left: 9px;
  opacity: 0.6;
}
.rede-acoes {
  display: flex;
  align-items: center;
  gap: 12px;
}
.rede-limpar {
  border: 1px solid var(--borda);
  border-radius: 6px;
  padding: 2px 8px;
}
.rede-limpar:hover {
  color: var(--texto);
}
.rede-corpo {
  max-height: 40vh;
  overflow-y: auto;
  border-top: 1px solid var(--borda);
}
.rede-vazio {
  padding: 16px;
  margin: 0;
  color: #6b4d7a;
  font-size: 0.76rem;
}
.rede-linha {
  width: 100%;
  display: grid;
  grid-template-columns: 62px 1fr 62px 58px;
  gap: 10px;
  align-items: center;
  padding: 7px 16px;
  background: transparent;
  border: 0;
  border-bottom: 1px solid #1a0c22;
  color: #b18fc4;
  font-size: 0.74rem;
  font-family: inherit;
  cursor: pointer;
  text-align: left;
}
.rede-linha:hover {
  background: #170a1f;
}
.rede-metodo {
  font-weight: 800;
  font-size: 0.66rem;
  text-align: center;
  padding: 2px 0;
  border-radius: 5px;
}
.m-GET {
  background: rgba(52, 211, 153, 0.15);
  color: var(--ok);
}
.m-POST {
  background: rgba(123, 47, 247, 0.2);
  color: #c9a4ff;
}
.m-PUT {
  background: rgba(251, 191, 36, 0.15);
  color: var(--atencao);
}
.m-DELETE {
  background: rgba(255, 77, 77, 0.15);
  color: var(--perigo);
}
.rede-url {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.rede-status {
  font-weight: 700;
  text-align: center;
}
.s-ok {
  color: var(--ok);
}
.s-atencao {
  color: var(--atencao);
}
.s-erro {
  color: var(--perigo);
}
.s-aguardando {
  color: #745686;
}
.rede-tempo {
  text-align: right;
  opacity: 0.55;
}
.rede-detalhe {
  padding: 12px 16px 16px;
  background: #0f0616;
  border-bottom: 1px solid #1a0c22;
  display: grid;
  gap: 12px;
}
.rede-detalhe b {
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.7px;
  color: #745686;
}
.rede-detalhe pre {
  margin: 5px 0 0;
  padding: 9px 11px;
  background: #150a1f;
  border-radius: 8px;
  font-size: 0.72rem;
  color: #d8c2e8;
  white-space: pre-wrap;
  word-break: break-all;
  max-height: 190px;
  overflow: auto;
}
