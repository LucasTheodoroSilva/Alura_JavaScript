// Exercícios iniciais

// Exercício 1: Strings
// a) Declare uma variável chamada "nome" e atribua a ela o seu nome completo.

const nome = "Lucas Theodoro";

// b) Exiba o valor da variável "nome" no console.
console.log(nome);

// Exercício 2: Números
// a) Declare duas variáveis, uma chamada "num1" e outra chamada "num2", e atribua a elas dois números inteiros de sua escolha.
const num1 = 10;
const num2 = 25;

// b) Some esses dois números e armazene o resultado em uma variável chamada "soma".
const soma = num1 + num2;

// c) Exiba o valor da variável "soma" no console.
console.log(soma);

// Exercício 3: Booleanos
// a) Declare uma variável chamada "isMaiorDeIdade" e atribua a ela um valor booleano representando se você é maior de idade (true) ou não (false).
const isMaiorDeIdade = true;

// b) Exiba o valor da variável "isMaiorDeIdade" no console.
console.log(isMaiorDeIdade);


// Exercício 4: Concatenação de Strings
// a) Crie duas variáveis chamadas "fruta1" e "fruta2" e atribua a elas nomes de frutas diferentes.
const fruta1 = "Banana";
const fruta2 = "Laranja";

// b) Crie uma terceira variável chamada "frutasConcatenadas" que irá conter a concatenação das duas frutas anteriores, separadas por um espaço.
const frutasConcatenadas = fruta1 + " " + fruta2;

// c) Exiba o valor da variável "frutasConcatenadas" no console.
console.log(frutasConcatenadas);


// Exercício 5: Operadores de Comparação
// a) Declare duas variáveis, "valor1" e "valor2", e atribua a elas valores numéricos iguais.
const valor1 = 10;
const valor2 = 10;

// b) Crie uma variável chamada "saoIguais" que irá conter o resultado da comparação se "valor1" é igual a "valor2".
const saoIguais = valor1 === valor2;

// c) Exiba o valor da variável "saoIguais" no console.
console.log(saoIguais);

// ----------------------------------------------------------------------------------------------------------
// Exercício 1: Strings
// a) Declare uma variável chamada "frase" e atribua a ela uma frase de sua escolha com pelo menos 10 caracteres.
const frase1 = "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.";

// b) Exiba no console o tamanho da frase, ou seja, a quantidade de caracteres que ela possui.
console.log(frase1.length);

// Exercício 2: Números
// a) Declare três variáveis: "numA", "numB" e "numC", e atribua a elas valores numéricos diferentes.
const numA = 3;
const numB = 6;
const numC = 16;

// b) Calcule a média aritmética desses três números e armazene o resultado em uma variável chamada "media".
const media = (numA + numB + numC) / 3;

// c) Exiba o valor da variável "media" no console, com 2 casas decimais.
console.log(media.toFixed(2)); // toFixed(2) -> Duas casas após o ponto, exemplo: 1.80


// Exercício 3: Booleanos
// a) Declare uma variável chamada "ehPar" e atribua a ela um valor booleano que indique se um número de sua escolha é par (true) ou ímpar (false).
const numeroEscolhido = 1;
const ehPar = numeroEscolhido % 2 === 0;
console.log(ehPar);

// b) Exiba o valor da variável "ehPar" no console.
console.log(ehPar);