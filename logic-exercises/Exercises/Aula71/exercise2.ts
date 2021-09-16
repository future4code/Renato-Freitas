

/* Escreva uma função recursiva que calcule a soma dos números inteiros de 0 a n */

const recursiveSum = (n: number): number => {
  if (n === 0) {
    return 0;
  } else {
    return n + recursiveSum(n - 1);
  }
}

console.log(recursiveSum(10));
console.log(recursiveSum(20));
console.log(recursiveSum(13));


