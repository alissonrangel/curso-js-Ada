// FUNÇÕES

// Definição de função
function saudacao() {
  console.log('Olá, seja bem-vinda(o) ao nosso curso de JavaScript');
}

saudacao();

// Como enviar parâmetros para as funções

function saudacao(nome, curso='Javascript') {  
  console.log(`Olá, ${nome}! Seja bem-vinda(o) ao nosso curso de ${curso}`);
}
saudacao('Walisson', 'HTML & CSS');

// Retorno da função

function soma(numero1, numero2) {
  return numero1 + numero2
}

const resultado = soma(10, 20)

console.log(resultado / 2);

function maiorDoQue50(numero) {
  if (numero > 50) {
    return true
  }
  return false
}

console.log(maiorDoQue50(54));