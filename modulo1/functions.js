let listaCoisas = Array()
listaCoisas['hardware'] = [];
listaCoisas['hardware'][0] = ['a'];
listaCoisas['hardware'][1] = ['b'];
listaCoisas['games'] = [];
listaCoisas['games'][0] = ['ac'];
listaCoisas['games'][1] = ['bc'];

console.table(listaCoisas);

function parOuImpar(valor) {
    let resultado;
    if (valor % 2 === 0) {
        resultado = 'par';
    } else {
        resultado = 'ímpar';
    }
    return resultado;  // passagem por valor
}
let numero = 10;
let resultado = parOuImpar(numero);
console.log(resultado);
// quando uma funcao nao retorna valor ela é chamada de funcao de procedimento 

//  calcula area
function calculaArea(altura, largura) {
    return altura * largura;
}
console.log(calculaArea(10, 10));

// funcao que retorna um array ordenado
function ordenarArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
// ou array.sort((a,b) => a - b) 
console.log(ordenarArray([41, 9, 21, 81, 212, 2]));

// ordem alfabetica -- A != a
function ordenarArrayLetra(palavras) {
    return palavras.sort();
}
console.log(ordenarArrayLetra(['amanda', 'tei', 'gig', 'jakdsl', 'sjdkla', 'dkas;l']));

// se nao tem nada mudando o nome é sacerdote
function exibeNome(nome = 'Sacerdote') {
    console.log(nome);
}
exibeNome('Ana');

// funcao anonima = funcao sem nome

let coisa = function (uiui) {
    console.log(uiui);
}

let outraCoisa = (nome) => console.log(nome); // arrow function
// funcao por parametro = callback

coisa('Jaques')
outraCoisa('Rai');

// ex
let sucesso = () => console.log('Requisição foi um sucesso');
let erro = function () {
    console.log('Requisição deu erro');
}
function requisicao(sucesso, erro) {
    if (true) {
        sucesso();
    } else {
        erro()
    }
}
requisicao(sucesso, erro);

// funcao anonima tambem pode ser parametro


// funcao que soma os elementos de um array e retorna
function somaArray(num) {
    let guardador = 0;
    for (let i = 0; i < num.length; i++) {
        guardador += num[i];
    }
    return guardador;
}
console.log(somaArray([10, 25, 42]));

// o maior numero em um array

function maior(array){
    let maiorValor = array[0];
    for (let i = 0; i < array.length; i++){
        if(array[i]>maiorValor){
            maiorValor = array[i];
        }
    }
    return maiorValor;
}
console.log(maior([102, 35, 52]));