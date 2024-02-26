let listaDeNumerosSorteados=[];
let limiteDeNumeros = 10
let tentativas = 1
let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
campo.innerHTML = texto
responsiveVoice.speak (texto , 'Brazilian Portuguese Female', {rate : 1.20});
}
function exibirMensagemInicial (){
  exibirTextoNaTela ('h1', 'Jogo do número secreto');
 exibirTextoNaTela ('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial()


    function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt (Math.random () * limiteDeNumeros + 1);
    let quantidaDeNumerosSorteados = listaDeNumerosSorteados.length
    if (quantidaDeNumerosSorteados == 10) {
      listaDeNumerosSorteados =[]
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
      return gerarNumeroAleatorio();
    } else {
      listaDeNumerosSorteados.push(numeroEscolhido);
      return numeroEscolhido;
    }
    }
    
    function limparCampo() {
      chute = document.querySelector('input');
      chute.value = '';
    }

    function verificarChute() {
      let chute = document.querySelector ('input').value;
      
      
  if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', "Parabéns Você Acertou!");
        let mensagemtentativas = tentativas > 1 ? "Tentativas" : "Tentativa"
        let numerodetentativas = `Você descobriu o numero secreto com ${tentativas} ${mensagemtentativas}`
        exibirTextoNaTela ('p' , numerodetentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
      } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p', "O numero secreto é menor");
        } else {
            if (chute < numeroSecreto) {
                exibirTextoNaTela ('p', "O numero secreto é maior");
            }
        } tentativas++
        limparCampo()
        }
      }

      function reiniciarJogo() {
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exibirMensagemInicial()
        document.getElementById('reiniciar').setAttribute('disabled',true);
        }
      
      
    
     



  
