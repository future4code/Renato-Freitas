//Exercício 1
function inverteArray(array) {
   var length = array.length;
   var left = null;
   var right = null;
   for (left = 0, right = length - 1; left < right; left += 1, right -= 1) {
      var temporary = array[left];
      array[left] = array[right];
      array[right] = temporary;
   }
   return array
}

//Exercício 2

function retornaNumerosParesElevadosADois(array) {
   let numerosPares = array.filter((numero) => {
      if (numero % 2 === 0) {
         return true;
      }
   })
   let aoQuadrado = numerosPares.map((numero) => {
      return numero * numero
   })
   return aoQuadrado
}

//Exercício 3

function retornaNumerosPares(array) {
   let numerosPares = array.filter((numero) => {
      if (numero % 2 === 0) {
         return true;
      }
   })
   return numerosPares
}

//Exercício 4

function retornaMaiorNumero(array) {
   let maiorNumero = 0
   for (let valor of array) {
      if (valor > maiorNumero) {
         maiorNumero = valor
      }
   }
   return maiorNumero
}

//Exercício 5

function retornaQuantidadeElementos(array) {
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   const booleano1 = true
   const booleano2 = false
   const booleano3 = !booleano2
   const booleano4 = !booleano3
   const respostas = [
      booleano1 && booleano2 && !booleano4,
      (booleano1 && booleano2) || !booleano3,
      (booleano2 || booleano3) && (booleano4 || booleano1),
      !(booleano2 && booleano3) || !(booleano1 && booleano3),
      !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
   ]
   return respostas
}

//Exercício 7

function retornaNNumerosPares(n) {
   let numerosPares = []
   let i = 0
   while (numerosPares.length !== n) {
      if (i % 2 === 0) {
         numerosPares.push(i)
      }
      i++
   }
   return numerosPares
}

// Exercício 8

function checaTriangulo(a, b, c) {
   let triangulo = ""
   if (a === b && a === c && b === c) {
      triangulo = "Equilátero"
   } else if (a === b || a === c || b === c) {
      triangulo = "Isósceles"
   } else {
      triangulo = "Escaleno"
   }
   return triangulo
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   let comparador = {
      maiorNumero: 0,
      maiorDivisivelporMenor: false,
      diferenca: 0
   }
   if (num1 > num2) {
      comparador.maiorNumero = num1
      comparador.maiorDivisivelporMenor = (num1 % num2 === 0)
      comparador.diferenca = num1 - num2
   } else {
      comparador.maiorNumero = num2
      comparador.maiorDivisivelporMenor = (num2 % num1 === 0)
      comparador.diferenca = num2 - num1
   }
   return comparador
}

// Exercício 10

function segundoMaiorEMenor(array) {
   array.sort((x, y) => { return x - y })
   return [array[array.length - 2], array[1]]
}

//Exercício 11

function ordenaArray(array) {
   return array.sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
   })
   return array
}

// Exercício 12

function filmeFavorito() {
   let filme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
   return filme
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [
   { nome: "Pedro", idade: 20 },
   { nome: "João", idade: 10 },
   { nome: "Paula", idade: 12 },
   { nome: "Artur", idade: 89 }
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
   { nome: "Paula", idade: 12, altura: 1.8 },
   { nome: "João", idade: 20, altura: 1.3 },
   { nome: "Pedro", idade: 15, altura: 1.9 },
   { nome: "Luciano", idade: 22, altura: 1.8 },
   { nome: "Artur", idade: 10, altura: 1.2 },
   { nome: "Soter", idade: 70, altura: 1.9 }
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia", dataDaConsulta: "04/05/2021" }
]

//Exercício 19, letra A

function ordenaPorNome() {

}

// Exercício 19, letra B

const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia", dataDaConsulta: "04/05/2021" }
]

function ordenaPorData() {

}

//Exercício 20

const contas = [
   { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
   { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
   { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
   { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
   { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
   { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
   // implemente sua lógica aqui
}