/* mplemente um método que performe uma compressão de string usando a contagem dos caracteres repetidos em sequência.Caso o resultado final tenha um tamanho maior do que a string inicial, seu programa deve retornar a string inicial */

// Para o input aabbb o resultado deve ser a2b3
// Para o input aabcccccaaa o resultado deve ser a2b1c5a3
// Para o input accurate o resultado deve ser accurate (já que inicialmente o código retornaria a1c2u1r1a1t1e1 que possui o tamanho maior do que accurate)
// Para o input escola o resultado deve ser escola (já que inicialmente o código retornaria e1s1c1o1l1a1 que possui o tamanho maior do que escola)
// Para o input accuraaaaaaaaaate, o resultado deve ser a1c2u1r1a10t1e1

const compress = (str: string): string => {
    let result = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i];
      result += count;
      count = 1;
    }
  }
  return result.length > str.length ? str : result;  
}

console.log(compress("aabbb"));
console.log(compress("aabcccccaaa"));
console.log(compress("accurate"));
console.log(compress("escola"));
console.log(compress("accuraaaaaaaaate"));
