// > ARRAYS - PARTE 2 - MÉTODOS DE ARRAYS

/**
 * Quando uso métodos uso parênteses com ele
 * São funções:
 *  Number() 
 *  console.log()
 *  String()
 */

let arr1 = [30, 12, 45, 34, 29];
let arr2 = [];

// Fatiamento: slice

console.log(arr1[0]);
console.log(arr1.slice(0, 2)); // da posição zero até (2-1)
console.log(arr1.slice(0, 4)); // da posição zero até (4-1)
console.log(arr1.slice(2));

// Adicionando elementos: push | unshift

console.log("Antes de adicionar:", arr2);

// push: adiciona no final do array
arr2.push(10, 20, 30)
arr2.push(40)

console.log('Depois de adicionar:', arr2);

console.log("Antes de adicionar com unshift:", arr2);
arr2.unshift(0);

console.log('Depois de adicionar com unshift:', arr2);

// Removendo elementos: pop | shift

console.log("Antes de remover com o pop:", arr2);

let elementoRemovido = arr2.pop();

console.log("Depois de remover com o pop:", arr2);
console.log("O elemento removido foi:", elementoRemovido);


console.log("Antes de remover com o shift:", arr2);

elementoRemovido = arr2.shift();

console.log("Depois de remover com o shift:", arr2);
console.log("O elemento removido foi:", elementoRemovido);

// Concatenando arrays: concat
console.log('arr1', arr1);
console.log('arr2', arr2);

console.log(arr1.concat(arr2));
console.log(arr2.concat(arr1));

// Buscando elementos: indexOf | lastIndexOf

let indiceDoElemento34 = arr1.indexOf(34) //índice do primeiro elemento com o valor de 34

console.log(indiceDoElemento34);

let arr3 = [1, 2, 3, 3, 5, 3]

console.log(arr3.lastIndexOf(3)); // índice do último 3 do array ou -1 se não existir elemento com o valor = 3

// Descobrindo a exitência de um elemento: includes

console.log(arr1.includes(12));

// Invertendo arrays: reverse

console.log('arr1 normal:', arr1);

const arr1Invertido = arr1.reverse()

console.log('arr1 invertido:', arr1Invertido);