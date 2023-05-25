// > CORÇÃO (CONVERSÃO) DE TIPOS

// - 1. Coerção Explícita (Manual)

const numero = 10;

console.log(numero, typeof numero);

const numeroEmFormatoDeString = String(numero);

console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString);

console.log(Number('1321314'));

console.log(parseFloat('23224.234'));

console.log(parseInt('23224.234'));

console.log(Boolean(1));

// - 2. Coerção Implícita (Automática)

console.log('10' + 1); // converte para string e concatena
console.log('10' - 1); // realiza a subtração
console.log('10' * 1); // realiza a multiplicação
console.log('10' / 3); // realiza a divisão

console.log(10 - 'asasa'); // tenta fazer a subtração, mas não consegue e retorna NaN (Not a Number)

//Qual será a saída desse código?
let n = 1 + "1";
n = n - 1; 
console.log(n); // 10

//Qual será a saída desse código?
console.log(2 + 3 + 4 + '5'); // "95"

//Qual será a saída desse código?
console.log('5' + 2 + 3 + 4); // "5234"

//Qual será a saída desse código?
console.log('10' - '4' - '3' - 2 + '5'); //"15"