// **Exercícios de interpretação de código**
// Exercício 1.

/* O Código testa se o resto da divisão por 2 da constante 'numero' é igual a 0 no valor e no tipo, se o numero digitado for igual a 0 no valor e no tipo o console imprime a mensagem de "Passou no teste.", se o valor for diferente a mensagem exibida é: "Não passou no teste.". */

//Exercício 2.

// a. O Código imprime o preço da fruta escolhida.
// b. O preço da fruta Maçã é R$2.25
// c. Iria atribuir o último valor antes do break que no caso seria 5.

// Exercício 3.

/* a. A primeira linha está declarando uma constante 'numero' que vai receber o valor digitado pelo usuário e que está sendo convertido para 'number' pela função Number(). */

/* b. Se o usuário digitar '10', a mensagem exibida será: "Esse número passou no teste", se o número digitado for menor ou igual a 0 vai ser exibido um erro, pois a variável mensagem está sendo definida somente dentro do escopo do if. */

/* c. A variável mensagem está sendo definida dentro do escopo do if "filho" e foi chamada no escopo "pai". */

// Exercícios de escrita de código

// Exercício 4.

let idade = Number(prompt("Qual a sua idade? "));
if (idade >= 18){
  console.log(`Você pode dirigir, você tem ${idade} anos!`);
} else {
  console.log("Você não pode dirigir!");
}

// Exercício 5.

let turno = prompt("Qual turno você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno).");
if (turno === 'M') {
  console.log("Bom dia!")
} else if (turno === 'V'){
  console.log("Boa tarde")
} else {
  console.log("Boa noite!")
}

// Exercício 6.

let turno = prompt("Qual turno você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno).");
switch (turno) {
  case 'M':
    console.log("Bom dia!")
    break
  case 'V':
    console.log("Boa tarde!")
    break
  case 'N':
    console.log("Boa noite!")
    break
  default:
    console.log("Turno não encontrado, digite apenas M, V ou N")
    break
}

// Exercício 7

let generoFilme = prompt("Qual o gênero do filme que deseja assistir? ")
let precoIngresso = Number(prompt("Qual o preço do ingresso? "))

if (generoFilme === 'fantasia' && precoIngresso < 15){
  console.log("Bom filme!")
} else {
  console.log("Escolha outro filme :(")
}

// Desafio 1.

let generoFilme = prompt("Qual o gênero do filme que deseja assistir? ")
let precoIngresso = Number(prompt("Qual o preço do ingresso? "))

if (generoFilme === 'fantasia' && precoIngresso < 15){
  let snack = prompt("Qual snack você quer comprar?")
  console.log("Bom filme!")
  console.log(`... com ${snack}`)
} else {
  console.log("Escolha outro filme :(")
}

// Desafio 2.

let nomeCompleto = prompt("Qual seu nome completo? ")
let tipoJogo = prompt("Qual o tipo de jogo? Digite IN para internacional ou DO para doméstico")
let etapaJogo = prompt("Qual a etapa do jogo? Digite SF para semi-final DT para decisão de terceiro lugar ou FI para final")
let categoria = Number(prompt("Qual a categoria? digite: 1, 2, 3 ou 4"))
let quantidadeIngressos = Number(prompt("Quantos ingressos deseja comprar? "))
let valorTotal
let ingresso

if (tipoJogo === 'DO' && categoria === 1) {
  switch (etapaJogo) {
    case 'SF':
      ingresso = 1320
      break
    case 'DT':
      ingresso = 660
      break
    case 'FI':
      ingresso = 1980
  }
} else if (tipoJogo === 'DO' && categoria === 2) {
  switch (etapaJogo) {
    case 'SF':
      ingresso = 880
      break
    case 'DT':
      ingresso = 440
      break
    case 'FI':
      ingresso = 1320
  }
} else if (tipoJogo === 'DO' && categoria === 3) {
  switch (etapaJogo) {
    case 'SF':
      ingresso = 550
      break
    case 'DT':
      ingresso = 330
      break
    case 'FI':
      ingresso = 880
  }
} else if (etapaJogo === 'DO' && categoria === 4) {
  switch (etapaJogo) {
    case 'SF':
      ingresso = 220
      break
    case 'DT':
      ingresso = 170
      break
    case 'FI':
      ingresso = 330
  }
}
if (tipoJogo === 'IN' && categoria === 1) {
  switch (etapaJogo) {
    case 'SF':
      ingresso = 1320
      break
    case 'DT':
      ingresso = 660
      break
    case 'FI':
      ingresso = 1980
  }
} else if (tipoJogo === 'IN' && categoria === 2) {
  switch (etapaJogo) {
    case 'SF':
      ingresso = 880
      break
    case 'DT':
      ingresso = 440
      break
    case 'FI':
      ingresso = 1320
  }
} else if (tipoJogo === 'IN' && categoria === 3) {
  switch (etapaJogo) {
    case 'SF':
      ingresso = 550
      break
    case 'DT':
      ingresso = 330
      break
    case 'FI':
      ingresso = 880
  }
} else if (tipoJogo === 'IN' && categoria === 4) {
  switch (etapaJogo) {
    case 'SF':
      ingresso = 220
      break
    case 'DT':
      ingresso = 170
      break
    case 'FI':
      ingresso = 330
  }
}

valorTotal = ingresso * quantidadeIngressos
if (tipoJogo === 'IN') {
  valorTotal = valorTotal * 4.1
}
console.log("---------Dados da compra--------")
console.log(`Nome do cliente: ${nomeCompleto}`)
console.log(`Tipo do jogo: ${tipoJogo}`)
console.log(`Etapa do jogo: ${etapaJogo}`)
console.log(`Categoria: ${categoria}`)
console.log(`Quantidade de ingressos: ${quantidadeIngressos}`)
console.log("-----------Valores-----------")
console.log(`Valor do ingresso: ${ingresso}`)
console.log(`Valor total: ${valorTotal}`)