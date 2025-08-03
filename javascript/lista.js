// Instruções: para conseguir executar os códicos desse arquivo, faça a instalação do node. No terminal cmd digite npm init, de muitos enters, até ter um novo arquivo. Para que o prompt funcione é necessário colocar no terminal npm install prompt. Para executar os códigos escreva no cmd node nomeArquivo.js.

// Ex 1: Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.
const prompt = require('prompt-sync')();
let num = parseInt(prompt('Digite um número inteiro: '));
if (num % 2 === 0) {
    console.log(`O número ${num} é par.`);
} else {
    console.log(`O número ${num} é ímpar.`);
}

// Ex 2: Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.
let idade = Number(prompt('Digite uma idade: '));
if (idade < 12) {
    console.log(`Com ${idade} anos, a pessoa é criança.`);
} else if (idade >= 12 && idade < 18) {
    console.log(`Com ${idade} anos, a pessoa é adolescente.`);
} else if (idade >= 18 && idade < 60) {
    console.log(`Com ${idade} anos, a pessoa é adulta.`);
} else if (idade >= 60) {
    console.log(`Com ${idade} anos, a pessoa é idosa.`);
}
// Ex 3: Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
let nota = Number(prompt('Digite um nota de 0 a 10: '));
if (nota >= 7) {
    console.log(`Aprovado.`);
} else if (nota < 7 && nota >= 5) {
    console.log(`Recuperação.`);
} else if (nota <= 4) {
    console.log(`Reprovado.`);
}

// Ex 4: Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.
let escolha = Number(prompt('Escolha 1, 2 ou 3: '));
switch (escolha) {
    case 1:
        console.log(`Você escolheu a opção 1.`);
        break;
    case 2:
        console.log(`Você escolheu a opção 2.`);
        break;
    case 3:
        console.log(`Você escolheu a opção 3.`);
        break;
}

// Ex 5: Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.
let peso = Number(prompt('Digite seu peso(kg): '));
let altura = Number(prompt('Digite sua altura(m): '));
let imc = peso / (altura * altura);
if (imc < 18.5) {
    console.log(`IMC: ${imc.toFixed(2)}. Classificação: Abaixo do peso.`);
} else if (imc >= 18, 5 && imc < 25) {
    console.log(`IMC: ${imc.toFixed(2)}. Classificação: Peso normal.`);
} else if (imc >= 25 && imc < 30) {
    console.log(`IMC: ${imc.toFixed(2)}. Classificação: Sobrepeso.`);
} else if (imc >= 30) {
    console.log(`IMC: ${imc.toFixed(2)}. Classificação: Obesidade.`);
}

// Ex 6: Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C) Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C) Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
let lado1 = Number(prompt('Digite o valor do primeiro lado: '));
let lado2 = Number(prompt('Digite o valor do segundo lado: '));
let lado3 = Number(prompt('Digite o valor do terceiro lado: '));
if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
    if (lado1 === lado2 && lado2 === lado3) {
        console.log(`Triângulo equilátero.`);
    } else if (lado1 != lado2 && lado1 != lado3 && lado3 != lado2) {
        console.log(`Triângulo escaleno.`);
    } else if (lado1 == lado2 && lado1 != lado3 || lado1 == lado3 && lado1 != lado2 || lado3 == lado2 && lado1 != lado3) {
        console.log(`Triângulo isósceles.`);
    }
} else {
    console.log(`Não forma um triângulo.`);
}

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
let quantia = Number(prompt('Digite a quantidade de maçãs compradas: '));
let valor = 0;
if (quantia < 12) {
    valor = quantia * 0.30;
} else {
    valor = quantia * 0.25;
}
console.log(`Comprando ${quantia} de maçã(s), a compra custará R$ ${valor.toFixed(2)}`)

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.
let valor1 = Number(prompt('Digite um valor: '));
let valor2 = Number(prompt('Digite um outro valor: '));

if (valor1 < valor2) {
    console.log(`${valor1}, ${valor2}`);
} else {
    console.log(`${valor2}, ${valor1}`);
}

// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes. 
let int = parseInt(prompt('Digite um número inteiro: '));
for (let i = 10; i >= 1; i--) {
    console.log(int);
}

// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.
let soma = 0;

for (let i = 1; i <= 5; i++) {
    let numero = Number(prompt("Digite o " + i + "º número:"));
    soma += numero;
}
console.log(`A soma total dos números é: ${soma}`);

// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a b10) utilizando um loop for.
let tab = parseFloat(prompt('Digite um valor de 1 a 10: '));
for (i = 1; i <= 10; i++) {
    console.log(`${tab} x ${i} = ${tab * i}`);
}

// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
let numeros = [];
let guardador = 0;
let diferente = true;
while (diferente) {
    let decimal = parseFloat(prompt('Digite um valor (0 para parar): '));
    if (decimal != 0) {
        numeros.push(decimal);
         guardador += decimal;
    } else {
        diferente = false;
    }
}
let media = guardador / numeros.length;
console.log(`${media}`);


// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.
let fatorial = Number(prompt('Digite um valor: '));
let resultado = 1;
for (let i = 1; i <= fatorial; i++) {
    resultado = resultado * i;
}
console.log(`Fatorial de ${fatorial} é ${resultado}.`);


// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.
let a = 0, b = 1, temp;
console.log(a);
console.log(b);
for (let i = 3; i <= 10; i++) {
    temp = a + b;
    console.log(temp);
    a = b;
    b = temp;
}
