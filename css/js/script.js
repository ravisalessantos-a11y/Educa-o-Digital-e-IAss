
document
.getElementById("darkModeBtn")
.addEventListener("click", () => {

document.body.classList.toggle("dark");

});

function mostrarAlerta(){

alert(
"Deepfakes podem ser usados para golpes e desinformação."
);

}

function respostaCorreta(){

document.getElementById("resultadoQuiz").innerHTML =
"✅ Correto! Sempre verifique antes de compartilhar.";

}

function respostaErrada(){

document.getElementById("resultadoQuiz").innerHTML =
"❌ Errado! Compartilhar sem verificar espalha fake news.";

}

let c1 = 0;
let c2 = 0;
let c3 = 0;

const contador = setInterval(() => {

if(c1 < 5000){
c1 += 50;
document.getElementById("contador1").innerText = c1;
}

if(c2 < 1200){
c2 += 12;
document.getElementById("contador2").innerText = c2;
}

if(c3 < 3000){
c3 += 30;
document.getElementById("contador3").innerText = c3;
}

if(c1 >= 5000 && c2 >= 1200 && c3 >= 3000){
clearInterval(contador);
}

},20);

document
.getElementById("formulario")
.addEventListener("submit", function(e){

e.preventDefault();

const nome =
document.getElementById("nome").value;

if(nome.trim() === ""){
alert("Digite seu nome.");
return;
}

document.getElementById("mensagem").innerHTML =
`Obrigado, ${nome}! Você assumiu o compromisso de combater a desinformação.`;

});
