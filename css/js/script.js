
let pontos = 0;

// QUIZ
function responder(resposta) {
  const resultado = document.getElementById("resultado");

  if (resposta) {
    pontos++;
    resultado.innerHTML = "✔ Correto!";
  } else {
    resultado.innerHTML = "❌ Errado!";
  }

  document.getElementById("pontos").innerText = pontos;
}

// SCROLL
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// MODO ESCURO/CLARO
document.getElementById("modo").addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// FORMULÁRIO
document.getElementById("formulario").addEventListener("submit", function(e){
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("msg");

  if(nome && email){
    msg.innerHTML = "✔ Enviado com sucesso!";
  } else {
    msg.innerHTML = "❌ Preencha todos os campos!";
  }
});
