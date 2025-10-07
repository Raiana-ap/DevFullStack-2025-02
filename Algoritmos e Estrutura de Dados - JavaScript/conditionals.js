// aula 4
let opcao = 2;
switch (opcao) {
    case 1:
        console.log('Você selecionou a primeira opção');
        break;
    case 2:
        console.log('Você selecionou a segunda opção');
        break;
    default:
        console.log('Você não selecionou nenhuma opção valida');
        break;
}

// Exercício 1: Fazer a calculadora em switch:
const prompt = require('prompt-sync')();
let numero1 = Number(prompt('Insira o primeiro valor: '));
let numero2 = Number(prompt('Insira o segundo valor: '));
let operacao = prompt('Insira a operação: ');
let resultado = 0;

switch (operacao) {
    case '+':
        resultado = numero1 + numero2;
        break;
    case '-':
        resultado = numero1 - numero2;
        break;
    case '*':
        resultado = numero1 * numero2;
        break;
    case '/':
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
        } else {
            console.log('Erro: divisão por zero!');
            resultado = undefined;
        }
        break;
    case '**':
        resultado = numero1 * numero2;
        break;
    default:
        console.log('Erro: operação não reconhecida.');
        resultado = undefined;
        break;
}
if (resultado !== undefined) {
    console.log(resultado);
}

// Exercício 2: Verificar se um número é positivo, negativo ou zero
let escolha = Number(prompt('Escolha um número: '));

if (escolha > '0') {
    console.log('Número positivo');
} else if (escolha == '0') {
    console.log('zero');
} else if (escolha < '0') {
    console.log('Número negativo');
}

// Exercício 3: Verificar se é bissexto
let ano = Number(prompt('Escolha um ano: '));
if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)) {
    console.log(`O ano ${ano} é bissexto`);
} else {
    console.log(`O ano ${ano} não é bissexto`);
    1
}

// Exercício 4: Definir faixas etárias para crianças, adolescentes e adultos e com switch apresentar na tela se a pessoa que informou a idade está em uma e qual faixa etária
let idade = Number(prompt('Escolha sua idade: '));
let faixa;
if (idade >= 18) {
    faixa = "adulto";
} else if (idade < 18 && idade >= 14) {
    faixa = "adolescente";
} else if (idade < 14){
    faixa = "criança";
}
console.log(`Você é ${faixa}, pois tem ${idade} ano(s).`)