/* O objetivo desse challenge é te fazer pensar como um método que a gente usa bastante com strings: `.indexOf`.Escreva uma função que simule o seu comportamento(sem utilizar esse método na sua implementação), que receba uma string `source` e um caracter que se deseja encontrar nela `query` e devolva o index em que esse caracter aparece pela primeira vez */

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
