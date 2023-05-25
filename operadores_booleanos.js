// > OPERADORES BOOLENAOS

/**
 * Igualdade: == (ou ===)
 * Desigualdade: != (ou !==)
 * Miaor que: >
 * Maior ou igual: >=
 * Menor que: <
 * Menor ou igual: <=
 */

const numero = 10;

console.log('numero == 10',numero == 10);
console.log('numero > 20', numero > 20);

console.log('numero == 10', numero == 10);
console.log('numero == "10"', numero == "10");
console.log('10 == "10"', 10 == "10");

//console.clear()
console.log('numero === "10"', numero === "10");
console.log('10 != 10', 10 != 10);
console.log('10 != "10"', 10 != "10");
console.log('10 !== "10"', 10 !== "10");

// Conjunções Lógicas
// AND => &&

let idade = 26;
let tenhoCNH = false;

const possoDirigir = idade >= 18 && tenhoCNH === true

console.log('Posso dirigir?', possoDirigir);

// OR => ||

idade = 16;

const votoFacultativo = idade < 18 || idade >= 70

console.log(votoFacultativo);

// NOT => !

const estouGostandoDoCurso = false;

console.log(!estouGostandoDoCurso);