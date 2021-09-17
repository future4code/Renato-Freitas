/* Considere que a gente só possa fazer três operações com `string`: adicionar um caractere ao final dele, remover um caractere do final dele ou substituir um caractere por outro.Dizemos que uma `string` é 'one edit' de outra se ela for o resultado da original a partir de UMA SÓ dessas operações.Escreva um método que determine se uma `string` é  'one edit' de outra. */

// "banan" é 'one edit' de "banana"(remoção de um caracter)
// "bananak" é 'one edit' de "banana"(adição de um caracter)
// "panana" é 'one edit' de "banana" (troca de um caracter)
// "bananaaa" não é 'one edit' de "banana" (adição de dois caracteres)

const isOneEdit = (str1: string, str2: string): boolean => {
    if (str1.length === str2.length) {
    let diff = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        diff++;
      }
    }
    return diff === 1;
  }
  return Math.abs(str1.length - str2.length) === 1;
}
console.log(isOneEdit("bananaaa", "banana"));
