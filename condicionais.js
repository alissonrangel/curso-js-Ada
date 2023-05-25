// > ESTRUTURAS CONDICIONAIS

const idade = 20

if (idade>= 18) {
  console.log("Você é maior de idade!");
} else {
  console.log("VocÊ é menor de idade!");
}

/**
 * Se média >= 7, aprovado
 * Se média < 7 e media >= 5 , recuperação
 * Se média < 5, Reprovado
 */

let media = 4.99999

if (media >= 7) {
  console.log("Aprovada(o)");
} else if (media >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovada(o)");
}

var x = undefined;

console.log(typeof x);