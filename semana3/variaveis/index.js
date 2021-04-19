/*  Exercício de interpretação de código:
    Exercício 1.

    Saídas do console.log:
    console.log(b) => 10
    console.log(a, b) => 10 5

    =======================================

    Exercício 2.
    
    Saídas do console.log:
    console.log(a, b, c) => 10 10 10

*/

/***Exercícios de escrita de código***/
// Exercício 01.
let nome;
let idade;
console.log("Tipo da variável nome é: ", typeof(nome)); // => undefined
console.log("Tipo da variável idade é: ", typeof(idade)); // => undefined

// Esta saída 'undefined' como o nome já diz, o tipo da variável é indefinida

nome = prompt("Digite seu nome: ")
idade = prompt("Digite sua idade: ")

console.log("Tipo da variável nome é: ", typeof(nome)); // => string
console.log("Tipo da variável idade é: ", typeof(idade)); // => string

//As duas variáveis foram definidas como string

console.log("Olá, ", nome,"você tem", idade,"anos.");

// Exercício 02.

const name1 = prompt("Qual seu nome? ");
console.log("Resposta: ", name1);
const age = prompt("Qual a sua idade? ");
console.log("Resposta: ", age);
const sport = prompt("Qual seu esporte preferido? ");
console.log("Resposta: ", sport);
const home = prompt("Qual seu endereço? ")
console.log("Resposta: ", home);
const music = prompt("Qual seu estilo musica preferido? ");
console.log("Resposta: ", music)

// Exercício 03.

const foods = ["Pizza", "Sushi", "Pastel", "Lasanha", "Bolo"];
console.log(foods); // A

console.log("Essas são minhas comidas preferidas: "); // B
console.log(foods[0]);
console.log(foods[1]);
console.log(foods[2]);
console.log(foods[3]);
console.log(foods[4]);

foods[1] = prompt("Qual sua comida preferida? "); // C
console.log(foods);

// Exercício 04.

const questions = ["Você bebeu água hoje? ", "Está chovendo? ", "Você é maior de idade? "];
const answers = [true, false, true]; // A

console.log(questions[0], answers[0]); // B
console.log(questions[1], answers[1]);
console.log(questions[2], answers[2]);