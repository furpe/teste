// Pecinhas visuais reaproveitadas em várias telas.
// (Arquivo pronto — nada de fetch aqui.)

export function Campo({ rotulo, dica, ...props }) {
  return (
    <label className="campo">
      <span className="campo-rotulo">{rotulo}</span>
      <input className="campo-input" {...props} />
      {dica && <span className="campo-dica">{dica}</span>}
    </label>
  );
}

export function Botao({ carregando, children, variante = "primario", ...props }) {
  return (
    <button className={`botao botao-${variante}`} disabled={carregando || props.disabled} {...props}>
      {carregando ? <span className="girando" /> : null}
      {carregando ? "Enviando…" : children}
    </button>
  );
}

export function Aviso({ tipo = "erro", children }) {
  if (!children) return null;
  const icone = { erro: "⛔", ok: "✅", info: "💡" }[tipo];
  return (
    <div className={`aviso aviso-${tipo}`}>
      <span>{icone}</span>
      <p>{children}</p>
    </div>
  );
}

export function Esqueleto({ quantidade = 3 }) {
  return (
    <div className="grade-cards">
      {Array.from({ length: quantidade }).map((_, i) => (
        <div key={i} className="card-usuario esqueleto" />
      ))}
    </div>
  );
}

// Gera uma cor estável a partir do nome — assim cada pessoa tem sempre
// o mesmo avatar colorido, sem precisar guardar nada no banco.
// O matiz fica preso na faixa 280°–360° (roxo → magenta → vermelho)
// para combinar com o tema do app, em vez de sortear qualquer cor.
export function Avatar({ nome }) {
  const texto = (nome || "?").trim();
  const iniciais = texto
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
  let soma = 0;
  for (const c of texto) soma += c.charCodeAt(0);
  const matiz = 280 + (soma % 80); // 280 (roxo) até 360 (vermelho)
  return (
    <div
      className="avatar"
      style={{
        background: `linear-gradient(135deg, hsl(${matiz} 85% 55%), hsl(${matiz + 20} 85% 45%))`,
      }}
    >
      {iniciais || "?"}
    </div>
  );
}
