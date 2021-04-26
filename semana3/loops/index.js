// Exercício de interpretação de código
// Exercício 1.
/* o código irá imprimir no final o valor de 10, pois a 
variável 'valor' está somando o valor 'i' a cada loop. */

// Exercício 2.
// a. Vai ser impresso todos os valores maior que 18.
// b. Sim, basta remover o 'if' e dar o comando console.log(numero)

//Desafio interpretação
/* Irá imprimir 4 linhas, com a primeira linha iniciando com um '0' e adicionando '0' a cada nova linha. 
0
00
000
0000 */


// Exercícios de escrita de código
// Exercício 3.
// a.
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for (let valor of arrayOriginal) {
  console.log(valor)
}
// b.
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let dividido = 0
for (let valor of arrayOriginal) {
  dividido = valor/10
  console.log(dividido)
}

// c. 
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for (let valor of arrayOriginal) {
  if (valor%2 === 0) {
    console.log(valor)
  }
}
// d.
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for (let index = 0; index < arrayOriginal.length; index++) {
  const elemento = arrayOriginal[index];
  console.log(`O elemento do índex ${index} é ${elemento}`)
}
// e.
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let menorNumero = 130
let maiorNumero = 0
for (let valor of arrayOriginal) {
  if (valor > maiorNumero) {
    maiorNumero = valor
  }
}
for (let valor of arrayOriginal) {
  if (valor < menorNumero){
    menorNumero = valor
  }
}
console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`)

// Desafio
// 01.
let numeroEscolhido = prompt("[Player 1] Digite um número secreto: ")
let chute
for (let tentativas = 1; chute !== numeroEscolhido; tentativas++) {
  chute = prompt("[Player 2] Adivinhe o número escolhido: ")
  if (chute > numeroEscolhido) {
    console.log(`Errrroooou!! O número ${chute} é maior que o número secreto`)
  } else if (chute < numeroEscolhido){
    console.log(`Errrooou!! O número ${chute} é menor que o número secreto`)
  } else {
    console.log("Acertou!! o número de tentativas foi: ", tentativas)
  }
}
// 02.
let numeroEscolhido = Math.floor((Math.random() * 100) + 1)
let chute
for (let tentativas = 1; chute !== numeroEscolhido; tentativas++) {
  chute = prompt("[Player 2] Adivinhe o número escolhido: ")
  if (chute > numeroEscolhido) {
    console.log(`Errrroooou!! O número ${chute} é maior que o número secreto`)
  } else if (chute < numeroEscolhido){
    console.log(`Errrooou!! O número ${chute} é menor que o número secreto`)
  } else {
    console.log("Acertou!! o número de tentativas foi: ", tentativas)
  }
}