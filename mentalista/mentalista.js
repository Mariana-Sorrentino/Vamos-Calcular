var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var elementoDica = document.getElementById("dica");

  var chute = parseInt(document.getElementById("valor").value);

  let tentativa;
  var acertou = "Parabéns!! Você Acertou!";
  var errou = "Que pena... Você Errou!";
  var numeroFora = "Número inválido! Por favor, digite um número de 0 a 10";
  var menorQueCinco = "DICA: Seu chute é MENOR que o Número Secreto";
  var maiorQueCinco = "DICA: Seu chute é MAIOR que o Número Secreto";

  tentativa = chute == numeroSecreto ? acertou : errou;
  elementoResultado.innerHTML = tentativa;

  if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = numeroFora;
  }

  tentativa = chute <= numeroSecreto ? menorQueCinco : maiorQueCinco;
  elementoDica.innerHTML = tentativa;

  if (chute == numeroSecreto) {
    elementoDica.innerHTML = "";
  } else if (chute > 10 || chute < 0) {
    elementoDica.innerHTML = "";
  }
}
