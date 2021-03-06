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
   let filme = filmeFavorito()
   let atores = filme.atores
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atores[0]}, ${atores[1]}, ${atores[2]}, ${atores[3]}.`
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   let infoRetangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: 2 * (lado1 + lado2),
      area: (lado1 * lado2)
   }
   return infoRetangulo
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   return {
      ...pessoa,
      nome: 'ANÔNIMO'
   }
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
   return arrayDePessoas.filter((pessoa) => {
      if (pessoa.idade >= 20) {
         return true
      }
   })
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   return arrayDePessoas.filter((pessoa) => {
      if (pessoa.idade < 20) {
         return true
      }
   })
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   return array.map((numero) => {
      return numero * 2
   })
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   return array.map((numero) => {
      return '' + numero * 2
   })
}

// Exercício 17, letra C

function verificaParidade(array) {
   const string = array.map((numero) => {
      if (numero % 2 === 0) {
         return `${numero} é par`
      } else {
         return `${numero} é ímpar`
      }
   })
   return string
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
   return pessoas.filter((pessoa) => {
      if (pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.5) {
         return true
      }
   })
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   return pessoas.filter((pessoa) => {
      if (pessoa.idade < 14 || pessoa.idade > 60 || pessoa.altura < 1.5) {
         return true
      }
   })
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
   return consultasNome.sort()
}
 function ordenaPorNome() {
      for(let i = 0; i < consultasNome.length; i++) {
        for(let j = 0; j < consultasNome.length - i - 1; j++) {
          if(consultasNome[j].nome > consultasNome[j + 1].nome) {
            const temp = consultasNome[j]
            consultasNome[j] = consultasNome[j + 1]
            consultasNome[j + 1] = temp
          }
        }
      }
      return consultasNome      
    }
}
console.log(ordenaPorNome(consultasNome))

// Exercício 19, letra B

const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia", dataDaConsulta: "04/05/2021" }
]

function ordenaPorData() {
   function ordenaPorData() {
      for(let i = 0; i < consultasData.length; i++) {
        for(let j = 0; j < consultasData.length - i - 1; j++) {
    
          const arrayData1 = consultasData[j].dataDaConsulta.split('/')
          const dia1 = Number(arrayData1[0])
          const mes1 = Number(arrayData1[1])
          const ano1 = Number(arrayData1[2])
    
          const arrayData2 = consultasData[j + 1].dataDaConsulta.split('/')
          const dia2 = Number(arrayData2[0])
          const mes2 = Number(arrayData2[1])
          const ano2 = Number(arrayData2[2])
    
          const data1 = new Date(ano1, mes1 -1, dia1).getTime()
          const data2 = new Date(ano2, mes2-1, dia2).getTime()
    
          if(data1 > data2) {
            const temp = consultasData[j]
            consultasData[j] = consultasData[j + 1]
            consultasData[j + 1] = temp
          }
        }
      }
      return consultasData
    }
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
   contas.forEach(conta => {
      const gastos = conta.compras.reduce((val, elem) => { 
         return val + elem 
      }, 0)
      conta.saldoTotal -= gastos
   })
   return contas
}