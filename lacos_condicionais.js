// > LAÇOS CONDICIONAIS

// no terminal: npm install readline-sync

const input = require('readline-sync')

//const numero_sorteado = Math.ceil((Math.random() * 5));
const numero_sorteado = 5

//console.log(numero_sorteado);

let numero = Number(input.question('Qual número você escolhe? '))

//console.log(numero, typeof numero);

// if (numero === numero_sorteado) {
//   console.log('Você acertou!');
// } else {
//   console.log('Você errou!');
// }

// while - estrutura de repetição não controlada
while (numero !== numero_sorteado) {
  console.log('Você errou o número. Tente novamente...');

  numero = Number(input.question('Qual número você escolhe? '))
}

console.log('Você acertou!!!');