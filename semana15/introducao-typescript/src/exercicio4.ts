type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// a) Como você faria, já com a extensão instalada, para gerar um arquivo javascript a partir do  arquivo typescript com o código abaixo?

// Instalado globalmente com npm i -g typescript
//  executando o comando: tsc ./nome-do-arquivo.ts

// Instalado localmente com npm i typescript -D
//  executando o comando: npx tsc ./nome-do-arquivo.ts


// b) E se este arquivo estivesse dentro de uma pasta chamada src. O processo seria diferente? Se sim, descreva as diferenças.

// Instalado globalmente com npm i -g typescript
//  executando o comando: tsc ./src/exercicio4.ts

// Instalado localmente com npm i typescript -D
//  executando o comando: npx tsc ./src/exercicio4.ts


// c) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.

// Sim, configurando o tsconfig para olhar a pasta de entrada rootDir e a pasta de saída outDir

// Instalado globalmente com npm i -g typescript
//  executando o comando: tsc

// Instalado localmente com npm i typescript -D
//  executando o comando: npx tsc


// d) Compare esse arquivo com o que criamos durante a aula (ele está disponível na área de **configuração do projeto** ali em cima). Leia as descrições sobre cada uma das propriedades. Alguma configuração que chamou sua atenção? O que mudou em comparação com o arquivo criado pelos slides?

// O outDir, rootDir e es6. Existem diversas configs comentadas, cada uma com uma funcionalidade.
