// tipo Number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero + segundoNumero;

console.log(operacaoMatematica);

// ponto flutuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperacao);

// NaN -> Not A Number (Não é um número)

const alura = "Alura"
console.log(alura * primeiroNumero)

// Infinity
// Divisão por zero não é um erro em JavaScript: ele simplesmente retorna “Infinity”. No entanto, há uma exceção: zero dividido por zero não tem um valor bem definido e o resultado dessa operação é o valor especial não numérico NaN.

const primeiraDivisao = 1;
const segundaDivisao = 0;

const divisao = primeiraDivisao / segundaDivisao;

console.log(divisao);

// Praticando 21/07/2023

const primeiroTeste = 1.2;
const segundoTeste = 1.3;

const primeiraPratica = primeiroTeste + segundoTeste;
const segundaPratica = primeiroTeste - segundoTeste;

console.log(primeiraPratica);
console.log(segundaPratica);

// Praticando 24/07/2023

const terceiroTeste = 33;
const quartoTeste = 2;

const terceiraPratica = terceiroTeste * quartoTeste;
const quartaPratica = terceiroTeste / quartoTeste;

console.log(terceiraPratica);
console.log(quartaPratica);


// Praticando 24/07/2023 - Math.PI

const quintoTeste = Math.PI;
const sextoTeste = 4;

const quintaPratica = quintoTeste * sextoTeste;
const sextaPratica = quintoTeste * quintoTeste;
const setimaPratica = quintoTeste + quintoTeste;

console.log(quintaPratica);
console.log(sextaPratica);
console.log(setimaPratica);