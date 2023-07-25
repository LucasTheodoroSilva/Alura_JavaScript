// Tipo String

const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo';
const senha = "senhaSuperSegura456!";
const StringDeNumeros = "34567";

// Usando "" & '' juntas

const citacao1 = 'O Leo disse "oi!"';
const citacao2 = "O Leo disse 'oi!'";

console.log(citacao1);
console.log(citacao2);

// concatenação (+)

const citacao3 = "Meu nome é ";
const meuNome = "Lucas Theodoro";

console.log(citacao3 + meuNome);


// Treino - Letras maiúsculas X minúsculas (False X True)

const cidade1 = "araras";
const input1 = "Araras";

console.log(cidade1 == input1) // False

const cidade2 = "Araras";
const input2 = "Araras";

console.log(cidade2 == input2) // True


const cidade3 = "limeira";
const input3 = "Limeira";

console.log(cidade3 == input3); // False

const cidade4 = "Limeira";
const input4 = "Limeira";

console.log(cidade4 == input4); // True 

if (cidade4 === input4) {
    console.log(cidade4);
} else (console.error("Tente novamente!"));

// toLowerCase()

const textoOriginal = "Lucas Thedoro";
const textoMinusculo = textoOriginal.toLowerCase();

console.log(textoMinusculo);

const cidade5 = "araras";
const input5 = "Araras";

const inputminusculo = input5.toLowerCase();

console.log(cidade5)

// Treino geral - 25/07

const treinoNome = "Lucas";
const treinoSobrenome = " Theodoro";

console.log(treinoNome);
console.log(treinoNome + treinoSobrenome)

const cidade6 = "Ribeirão Preto";
const input6 = "Ribeirão Preto";

console.log(cidade6 == input6); // False

// Teste de IF 
if (cidade6 === input6) {
    console.log("Nome correto!");
} else {
    console.log("Nome errado!");
}

// toLowerCase()

const cidade7 = "Ribeirão Preto";
const input7 = "ribeirão preto";

const treinoCidadeMinusculo = cidade7.toLocaleLowerCase();

console.log(input7 == treinoCidadeMinusculo); // True

if (input7 === treinoCidadeMinusculo) {
    console.log(treinoCidadeMinusculo);
} else {
    console.log("Erro!");
}

// Constando as letras

const senhaQuantidade = "minhaSenha123";

console.log(senhaQuantidade.length);

const nomeLucas = "Lucas Theodoro";

console.log(nomeLucas.length);