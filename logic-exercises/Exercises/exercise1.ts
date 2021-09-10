
export const indexOf = (source: string, query: string): number => {
  let index = 0;
  for (let i = 0; i < source.length; i++) {
    if (source[i] === query) {
      index = i;
      break;
    }
  }
  return index;
}

console.log(indexOf('Olá mundo!', 'l'));
console.log(indexOf('Olá mundo!', 'o'));
console.log(indexOf('Turma Paiva!', 'a'));
