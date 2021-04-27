/***** Exercícios de interpretação de código ******/
// 1.
// a . 
// 10 
// 50
// b. 
// A função continua funcionando, mas não seria impresso nada, pois não há a chamada do console.log.
// 2.
// a.
// A função imprime os dois primeiros index da array que seria o 0 e o 1, que no caso da arrayDeNomes a saída seria:
// Darvas
// Caio
// b.
// A saída seria:
// Amanda
// Caio
// 3.
/* A função recebe uma array e filtra pelos pares, adiciona os elementos pares em uma nova array e multiplica o seu valor por ele mesmo, um nome mais apropriado seria: multiplicarParesAoQuadrado. */

/******** Exercícios de escrita de código **********/
// 4.a.
function sobreMim() {
  console.log("Eu sou Renato, tenho 27 anos, moro em Maranguape e sou estudante.")
}
sobreMim();

// b.
let sobreMim = (nome, idade, cidade, eEstudante) => {
  let estudante = (eEstudante) ? "sou estudante" : "não sou estudante";  
  let frase = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudante}`);
  return frase;
}
let informacoes = sobreMim("Renato", 27, "Maranguape", true);
console.log(informacoes);

// 5. a.
let somar = (numero1, numero2) => {
  let resultado = numero1 + numero2;
  return resultado;
}
let somaDoisNumeros = somar(12, 15);
console.log(somaDoisNumeros);
// b.
let eMaior = (numero1, numero2) => {
  let maiorOuIgual = (numero1 >= numero2) ? true : false;
  return maiorOuIgual;
}
let comparar = eMaior(61, 26);
console.log(comparar);
// c.
let repetirMensagens = (msg) => {
  for (let i = 0; i < 10; i++) {
    console.log(`${i} : ${msg}`);
  }
}
repetirMensagens("Repetir 10x")

// 6. a.
let quantidadeElementos = (array) => {
  return array.length
}
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
let tamanhoArray = quantidadeElementos(array)
console.log(tamanhoArray)
// b.
let ePar = (number) => {
  let verificaPar = (number % 2 === 0) ? true : false;
  return verificaPar
}
let vericar = ePar(10)
console.log(vericar)
// c.
let quantidadePar = (array) => {
  let pares = 0
  for (let item of array) {
    if (item % 2 === 0) {
      pares++;
    }
  }
  return pares;
}
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
let paresArray = quantidadePar(array)
console.log(paresArray)
// d.
let quantidadePar = (array) => {
  let pares = 0
  for (let item of array) {
    if (ePar(item)) {
      pares++;
    }
  }
  return pares;
}
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
let paresArray = quantidadePar(array)
console.log(paresArray)