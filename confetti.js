// ═══════════════════════════════════════════════════════════════════════
//  Confete (arquivo pronto — canvas puro, sem biblioteca externa)
// ═══════════════════════════════════════════════════════════════════════
//
//  Cria um <canvas> cobrindo a tela, solta uma leva de retângulos coloridos
//  caindo com rotação, e remove o canvas sozinho quando a animação acaba.
//
//  Uso:  import { dispararConfete } from "../confetti";
//        dispararConfete();

const CORES = ["#7b2ff7", "#ff2d8f", "#ff3b3b", "#fbbf24", "#ffffff"];

function criarParticula(canvas) {
  return {
    x: Math.random() * canvas.width,
    y: -20 - Math.random() * canvas.height * 0.4,
    largura: 6 + Math.random() * 6,
    altura: 8 + Math.random() * 10,
    cor: CORES[Math.floor(Math.random() * CORES.length)],
    velY: 2 + Math.random() * 3,
    velX: -1.5 + Math.random() * 3,
    rotacao: Math.random() * Math.PI,
    velRotacao: -0.2 + Math.random() * 0.4,
  };
}

export function dispararConfete({ quantidade = 140, duracaoMs = 2600 } = {}) {
  const canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.inset = "0";
  canvas.style.width = "100vw";
  canvas.style.height = "100vh";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "9999";
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  const particulas = Array.from({ length: quantidade }, () => criarParticula(canvas));
  const inicio = performance.now();

  function passo(agora) {
    const decorrido = agora - inicio;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particulas.forEach((p) => {
      p.x += p.velX;
      p.y += p.velY;
      p.rotacao += p.velRotacao;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotacao);
      ctx.fillStyle = p.cor;
      ctx.fillRect(-p.largura / 2, -p.altura / 2, p.largura, p.altura);
      ctx.restore();
    });

    if (decorrido < duracaoMs) {
      requestAnimationFrame(passo);
    } else {
      canvas.remove();
    }
  }

  requestAnimationFrame(passo);
}
