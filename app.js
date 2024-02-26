alert ("Bem vindo ao jogo! Trata-se de um jogo do numero secreto, no qual você terá que descobrir o numero secreto para vencer, GOOD LUCKY ");
let numerosecreto = parseInt(Math.random () * 10);
let chute;
let tentativas = 1;

while (chute != numerosecreto){
    chute = prompt ("Escolha um número de 0 a 10");
   if (chute==numerosecreto) {
    break
   } else {
    if (chute > numerosecreto) {
        alert (`O número do secreto é menor que ${chute}`);
    } else {
      alert (`O número secreto é maior que ${chute}`);
    }
    tentativas++;
   }
} 

let palavraTentativas = tentativas > 1? "tentativas" : "tentativa";
alert (`Parabéns você acertou em ${tentativas} ${palavraTentativas}`);

