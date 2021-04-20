/**  Exercício de interpretação   **/
// 1.
// a. false
// b. false
// c. true
// e. boolean

// 2.
// a. undefined
// b. null
// c. 11
// d. 3
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 9
/* =================================== */
/* Exercícios de escrita de código */
// 1.
const idade = Number(prompt("Qual sua idade? "))
const idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo/amiga? "))
const maiorIdade = idade > idadeAmigo
console.log(`Sua idade é maior do que a do seu amigo? ${maiorIdade}`)

// 2.
const numero = Number(prompt("Insira um número par: "))
const restoDivisao = numero%2
console.log(restoDivisao)
//Qualquer número par dividido por 2 tem resto 0.
//Qualquer número ímpar dividido por 2 tem resto 1.

// 3.
let listaDeTarefas = []
listaDeTarefas[0] = prompt("Quais as tarefas a serem realizadas hoje? ")
listaDeTarefas[1] = prompt("Qual outra tarefa a ser realizada hoje? ")
listaDeTarefas[2] = prompt("Qual outra tarefa a ser realizada hoje? ")
console.log(listaDeTarefas)
removerTarefa = Number(prompt("Qual tarefa já foi realizada? 0, 1 ou 2?"))
listaDeTarefas.splice(removerTarefa, 1)
console.log(listaDeTarefas)

// 4.
const nomeDoUsuario = prompt("Qual seu nome? ")
const emailDoUsuario = prompt("Qual seu email? ")
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)