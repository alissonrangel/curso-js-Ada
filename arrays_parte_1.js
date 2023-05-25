// > ARRAYS

// - Como criar um array?

let arr = ['Walisson', 26, 1.77, true]

console.log(arr);

// - Como acessar os elementos do array

console.log('Primeiro Elemento:', arr[0]);
console.log('Segundo Elemento:', arr[1]);
console.log('Terceiro Elemento:', arr[2]);
console.log('Quarto Elemento:', arr[3]);

// Como obter o tamanho do array em javascript?

console.log('Tamanho do array:', arr.length);

// - PErcorrendo arrays

// console.clear()

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let elemento of arr) {
  console.log(elemento);
}

for (let indice in arr) {
  console.log(indice, arr[indice]);
}