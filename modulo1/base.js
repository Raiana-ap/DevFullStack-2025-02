// Declaração
console.log("Hello, World!");
console.log('A gíria "Mané" é muito utilizada no RJ');
console.log('Jaques Hyago');
console.log(typeof ("Olá, mundo!"));
console.log(typeof (1, 5));
console.log(1.5);
console.log(typeof ('10'), 1000, "Geralt de Rivia");

// Tipos de variável

let name = 'Jaques'; // todo mundo usa, só funciona onde colocamos ela
console.log(name);

var anotherName = 'Hyago'; // não use, funcione em qualquer lugar
console.log(anotherName);

const cidade = "Porto Alegre" // constante
console.log("Porto Alegre");

let test; // undefined - crio mas não inicializo
console.log(typeof (test));

let títulosDoInter = null; // nulo não é um tipo, é um valor, então a variável se torna um objeto;
console.log(typeof (títulosDoInter));

// Números

let num1 = 9;
let num2 = 3;

console.log(num1 + num2); // adição
console.log(num1 - num2); // subtração
console.log(num1 * num2); // multiplicação
console.log(num1 / num2); // divisão
console.log(num1 ** num2); //exponenciação
console.log(num1 % num2); // resto

// Ordem

// ()
// **
// * /
// = -

// Transformar string em número: colocar Number(variável) || parseInt(variável) || parseFloat(variável)

// Incrementos
let counter = 1;
console.log(--counter); // pré-incremento
console.log(counter--); // pós-incremento

// Exercicio de presença
let a = true;
let b = false;
console.log(a && (b || !a));

// Condicional
const nota = 60
if (nota < 60) {
    console.log("reprovado");
} else if (nota > 90) {
    console.log("Bichão mesmo");
} else {
    console.log("aprovado");
}

// ternário
(nota < 60) ? console.log("reprovado") : console.log("aprovado");

//Exercício 1: verificar se o número é par ou ímpar
let num = 4
if (num % 2 === 0) {
    console.log(num + " é par");
} else {
    console.log(num + " é ímpar");
}

// Exercício 2: Encontrar o maior entre três números
let valor1 = 1;
let valor2 = 2;
let valor3 = 3;
if (valor1 > valor2 && valor1 > valor2){
    console.log("O " + valor1 + " é o maior.");
} else if (valor2 > valor3){
    console.log("O " + valor2 + " é o maior.");    
} else if (valor3 > valor2){
    console.log("O " + valor3 + " é o maior.")
} else {
    console.log("Há um empate!");
}
// Exercício 3: faça uma calculadora simples utilizando entrada de usuário. (prompt) npm install prompt-sync
const prompt = require('prompt-sync')();
let numero1 = Number(prompt('Insira o primeiro valor: '));
let numero2 = Number(prompt('Insira o segundo valor: '));
let operacao = prompt('Insira a operação: ');
let resultado = 0;

if (operacao === '+') {
    resultado = numero1 + numero2;
} else if (operacao === '-') {
    resultado = numero1 - numero2;
} else if (operacao === '*') {
    resultado = numero1 * numero2;
} else if (operacao === '/') {
    if (numero2 !== 0) {
        resultado = numero1 / numero2;
    } else {
        console.log('Erro: divisão por zero!');
        resultado = undefined;
    }
} else if (operacao === '**') {
    resultado = numero1 ** numero2;
} else {
    console.log('Erro: operação não reconhecida.');
    resultado = undefined;
}

if (resultado !== undefined) {
    console.log(resultado);
}

