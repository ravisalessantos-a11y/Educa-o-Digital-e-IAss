
let pontos = 0;
let atual = 0;

const perguntas = [
  { texto: "Deepfake pode enganar pessoas?", resposta: true },
  { texto: "Fake news são sempre verdadeiras?", resposta: false },
  { texto: "IA pode criar vídeos falsos realistas?", resposta: true },
  { texto: "Tudo que vemos na internet é confiável?", resposta: false },
  { texto: "Cidadania digital envolve responsabilidade?", resposta: true }
];

const perguntaEl = document.getElementById("pergunta");
const feedbackEl = document.getElementById("feedback");
const pontosEl = document.getElementById("pontos");
const progressoEl = document.getElementById("progresso");

function carregar() {
  perguntaEl.innerText = perguntas[atual].texto;
  feedbackEl.innerText = "";

  progressoEl.style.width = (atual / perguntas.length) * 100 + "%";
}

function responder(valor) {

  const correta = perguntas[atual].resposta;

  if (valor === correta) {
    pontos++;
    feedbackEl.innerText = "✔ Correto!";
  } else {
    feedbackEl.innerText = "❌ Errado!";
  }

  pontosEl.innerText = pontos;

  atual++;

  setTimeout(() => {
    if (atual < perguntas.length) {
      carregar();
    } else {
      perguntaEl.innerText = "Fim do Quiz!";
      feedbackEl.innerText = `Você fez ${pontos}/${perguntas.length}`;
      progressoEl.style.width = "100%";
    }
  }, 800);
}

/* Modo escuro */
document.getElementById("modo").addEventListener("click", () => {
  document.body.classList.toggle("light");
});

/* iniciar */
carregar();
