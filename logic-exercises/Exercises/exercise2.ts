/* Escreva uma função que recebe uma string que pode conter somente os seguintes caracteres: `'('`,  `')'`,  `'['`,  `']'`,  `'{'`,  `'}'` , e retorna `true` para uma string válida, e `false` para uma inválida.

Uma string é **válida** se:

1. Parênteses (ou chaves, ou colchetes) abertos devem ser fechados pelo mesmo tipo de parênteses (ou chaves, ou colchetes).
2. Parênteses (ou chaves, ou colchetes) abertos devem ser fechados na mesma ordem que foram abertos.

Obs. Uma string vazia é considerada **válida**. */


export const checkBrackets = (str: string): boolean => {
  let stack: string[] = [];
  let map: { [key: string]: string } = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      if (stack.length === 0) {
        return false;
      }
      let last = stack.pop();
      if (map[char] !== last) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(checkBrackets('(]'));
console.log(checkBrackets('([)]'));
console.log(checkBrackets(''));
console.log(checkBrackets('[({})]'));



