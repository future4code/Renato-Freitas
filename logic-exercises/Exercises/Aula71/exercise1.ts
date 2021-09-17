/* Escreva uma função recursiva que:
a.Receba um número e imprima todos os inteiros de 0 até esse número no console em ordem crescente

b.Receba um número e imprima todos os inteiros desse número até 0 em ordem decrescente */


function print(number: number) {
  if (number > 0) {
    console.log(number);
    print(number - 1);
  }
}

console.log(print(10));


function printDecrement(number: number) {
  if (number >= 0) {
    console.log(number);
    printDecrement(number - 1);
  }
}

console.log(printDecrement(10));
