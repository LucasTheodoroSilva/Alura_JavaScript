// tipo de dados
// booleanos

// Conversão implícita 

const numero = 456;
const numeroString = "456";

console.log(numero === numeroString); // false
console.log(numero == numeroString); // true

console.log(numero + numeroString); // 456456

// Conversão explícita 

// Number()

console.log(numero + Number(numeroString)); 

// NaN

const numero1 = 10;
const numeroString1 = "10L";

console.log(numero1 + Number(numeroString1));

// String()

let numeroTelefone = 987806300;

console.log("Seu número de telefone é:", String(numeroTelefone));

// Anotações Alura String()

let telefone = 12341234;
console.log("O telefone é " + telefone.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.

// Prática String()

let numCasa = 9100;

console.log("O número de sua casa é:", String(numCasa));

let visita = false;

console.log("Existe visitas:", String(visita));

visita = true;

console.log("Existe visitas:", String(visita));

// Prática Number()

let NumeroStringPratica = "10";
let NumeroPratica = 10;

console.log(Number(NumeroStringPratica) + NumeroPratica);

let NumeroStringPratica1 = "100";
let NumeroStringPratica2 = "150";

console.log(Number(NumeroStringPratica1) + Number(NumeroStringPratica2));

// Utilizando + antes

console.log(+ NumeroStringPratica1 + + NumeroStringPratica2);
console.log(+ NumeroStringPratica1 * + NumeroStringPratica2);

// NaN

let meuNome = "Lucas";

console.log(Number(meuNome));
console.log(+ meuNome);

// True e False

let usuarioConectadoPratica = false;

console.log(Number(usuarioConectadoPratica)); // 0

usuarioConectadoPratica = true;

console.log(Number(usuarioConectadoPratica)); // 1 

