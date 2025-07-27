let nome = 'Julio César';

console.log(nome.length);
console.log(nome.charAt(0));
console.log(nome.toUpperCase().indexOf('C'));
console.log(nome.replace('Julio', 'Cleyton'));
console.log(nome.substr(6,5));
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());
console.log(" Wesley".trim());

//funcao que inverte uma string
function reverseString(str){
    let reversed = '';

    for(let i = str.length -1; i>=0; i--){
        reversed += str[i];
    }
    return reversed;
    //return str.split('').reverse().join('')
}

console.log(reverseString("Olá, mundo"))

// encontrar vogais
function countVowels(str){
    let vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
}
console.log(countVowels('Dragon Age'));

// math
console.log(Math.random()*100);
console.log(Math.pow(9,2));
console.log(Math.cbrt(81));
console.log(Math.abs(-100.2));

// funcao num aleatorio entre 2 valores
function ale(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(ale(5,8));

// datas
let date = new Date();
console.log(date.getDate());
console.log(date.getMonth() + 1);
console.log(date.getFullYear());
console.log(date.toString());

let date1 = new Date (2025, 7, 7);
let date2 = new Date (2024,7,7)

console.log(date1.getTime())
console.log(date2.getTime())

let milissegundosEntreDatas = Math.abs(date1.getTime()- date2.getTime())
console.log(milissegundosEntreDatas)

let  milissegundosPorDia = (1*24*60*60*1000)
console.log(`A diferença entre as datas é de: ${milissegundosEntreDatas/milissegundosPorDia}`)

// a soma de duas matrizes
let matriz1 =[
    [1 , 3],
    [3, 4]
];

let matriz2 =[
    [2, 4],
    [3, 5]
];

let soma = [
    [0 , 0],
    [0, 0]
];

for (let i = 0; i < matriz1.length; i++) {
    for (let j = 0; j < matriz1.length; j++){
        soma[i][j] = matriz1[i][j] + matriz2[i][j];
    }
}
console.log(soma)