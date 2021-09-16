

// Escreva uma função recursiva que determine o maior valor de um array que contenha somente números positivos

const highestValue = (array: number[]): number => {
  if (array.length === 0) return 0;
  const [head, ...tail] = array;
  if (head > 0) return head > highestValue(tail) ? head : highestValue(tail);
  return highestValue(tail);
}

console.log(highestValue([1, 2, 300, 4, 500, 6, 1080, 8, 9, 10, 800, 1]));
