

// Escreva uma função recursiva que consiga imprimir todos os elementos de um array

const printElementsArray = (array: any[]) => {
  if (array.length === 0) {
    return;
  }
  console.log(array[0]);
  printElementsArray(array.slice(1));
}

console.log(printElementsArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(printElementsArray(["Cachorro", "Gato", "Macaco", "Aranha", "Tamanduá", "Jabuti"]));
