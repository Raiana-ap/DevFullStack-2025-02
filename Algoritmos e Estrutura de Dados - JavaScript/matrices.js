// Crie um array chamado 'numeros' contendo 10 valores numéricos à sua escolha.
let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// Use métodos de array para calcular:
// Gere um novo array chamado pares que contenha apenas os números pares de numeros.
let pares = numeros.filter((num => num % 2 === 0));
console.log(pares);
// A soma de todos os elementos.
let soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0);
console.log(soma);
// A média dos elementos. 
let media = soma / numeros.length;
console.log(media);


// ordem crescente
let num = [3, 6, 1, 2, -3];
let comp = num.length;
for (let i = 0; i < comp; i++) {
    for (let j = 0; j < comp - i; j++) {
        if (num[j] > num[j + 1]) {
            let temp = num[j];
            num[j] = num[j + 1];
            num[j + 1] = temp;
        }
    }
}
console.log(num); // isso é igual numeros.sort((a,b) => a-b)

// matriz
let matriz = [];
// calcular a diagonal
let somam = 0
for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
    matriz[i][j] = 10;
    if(i==j){
        somam += matriz[i][j];
    }
    }
}
console.table(matriz);
console.log(somam);


let mercado = [];
mercado['fruteira'] = ['maca', 'abacate', 'pera'];
mercado['acougue'] = ['picanha', 'abacate', 'file'
]
console.table(mercado);
