// a)
// let minhaString: string = "Hello World"
// minhaString = 123

// O typescript avisa que number não pode ser atribuído a uma variável de tipo string



// b) 
// let meuNumero: number | string = 0
// meuNumero = "123"
// meuNumero = 55
// meuNumero = "abc"



// c) 
// `nome`, que é uma string;
// `idade`, que é um número;
// `corFavorita`, que é uma string.

const eu = {
  nome: "Fulano",
  idade: 55,
  corFavorita: "Azul"
}

//Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

type Pessoa = {
  nome: string,
  idade: number,
  corFavorita: string
}

const tu: Pessoa = {
  nome: "Ciclano",
  idade: 22,
  corFavorita: "Vermelho"
}

const ele: Pessoa = {
  nome: "Beltrano",
  idade: 33,
  corFavorita: "Laranja"
}

const ela: Pessoa = {
  nome: "Fulana",
  idade: 44,
  corFavorita: "Verde"
}

// d)
enum CORES_ARCO_IRIS {
  VIOLETA = "VIOLETA",
  ANIL = "ANIL",
  AZUL = "AZUL",
  VERDE = "VERDE",
  AMARELO = "AMARELO",
  LARANJA = "LARANJA",
  VERMELHO = "VERMELHO"
}

type PessoaArcoIris = {
  nome: string,
  idade: number,
  corFavorita: CORES_ARCO_IRIS 
}

const euArcoIris: PessoaArcoIris = {
  nome: "Fulano",
  idade: 55,
  corFavorita: CORES_ARCO_IRIS.AZUL
}

const tuArcoIris: PessoaArcoIris = {
  nome: "Ciclano",
  idade: 22,
  corFavorita: CORES_ARCO_IRIS.VERMELHO
}

const eleArcoIris: PessoaArcoIris = {
  nome: "Beltrano",
  idade: 33,
  corFavorita: CORES_ARCO_IRIS.LARANJA
}

const elaArcoIris: PessoaArcoIris = {
  nome: "Fulana",
  idade: 44,
  corFavorita: CORES_ARCO_IRIS.VERDE
}
