

// Transforme a função desenvolvida no Exercício 2 em iterativa(ou seja, não use recursividade).

const iterativeSum = (n: number): number => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(iterativeSum(10));
console.log(iterativeSum(20));
console.log(iterativeSum(13));