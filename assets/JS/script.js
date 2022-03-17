const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");
const img = document.querySelector("#imagem");
const alterar = document.querySelector("#alterar");
const mp3 = document.querySelector("#audio");

alterar.addEventListener("click", function () {
  if (alterar.value == 1) {
    titulo.innerText = " Full on Morning";
    texto.innerText =
      " Sub-vertente que é mais comum no período da manhã nas festas, possui melodias alegres e muitas vezes acompanhado por vocais angelicais, com um som mais melódico e dançante, é um subgênero otimista, dinâmico e divertido de Psytrance..";
    img.src = "./assets/IMG/morning.jpg";
    mp3.src = "./assets/AUDIO/morning.mp3"
    alterar.value = 2;
  } else if (alterar.value == 2) {
    titulo.innerText = " Full on Groove";
    texto.innerText =
      " Sub-vertente mais séria, é aceita em qualquer horário, principalmente a tarde. Idealizado pelo projeto francês Talamasca. Utiliza muito o sintetizador, com explosões e linhas de baixo mais incorporadas e pesadas.";
    img.src = "./assets/IMG/groove.jpg";
    mp3.src = "./assets/AUDIO/groove.mp3"
    alterar.value = 3;
  } else {
    titulo.innerText = " Full on Night";
    texto.innerText =
      "São caracterizados por sintetizadores ao extremo e por uma grande oscilação entre momentos de euforia total e melodias bem trabalhadas, geralmente construídas entre 140 e 149 bpm. É sem dúvida um som que tem um apelo dançante. É extrovertido e convidativo à expressão corporal da dança.";
    img.src = "./assets/IMG/night.jpg";
    mp3.src = "./assets/AUDIO/night.mp3"
    alterar.value = 1;
  }
});
