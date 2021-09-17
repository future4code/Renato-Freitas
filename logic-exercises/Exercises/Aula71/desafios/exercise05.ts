
// Escreva uma função recursiva que determine a quantidade de digitos de um número

const digitCount = (number: number): number => {
  if (number < 10) {
    return 1;
  } else {
    return 1 + digitCount(number / 10);
  }
}

console.log(digitCount(123456789));
