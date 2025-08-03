const prompt = require('prompt-sync')();
//criar tabuada com while
let numero = Number(prompt('Você quer saber a tabuada de qual número? '));
let multiplicador = 0;
while (multiplicador <= 10) {
  let resultado = numero * multiplicador;
  console.log(`${numero}  *  ${multiplicador}  = ${resultado}`);
  multiplicador++;
}
//média atitmética até o usuário digitar 0
let num = Number(prompt('Digite um numero: '));
let listaNum = [];
while (num != 0){
  listaNum.push(num);
 num = Number(prompt('Outro numero: '));
}
if (num == 0){
  console.log(`Foi digitado ${listaNum.length} numeros, com a media de ${listaNum.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0) /listaNum.length}`);
}

// inicialização, condição e incremento
for(let i = 0; i < 2; i++){
  console.log('Maria');
}

// o while testa primeiro por isso o do while pergunta e depois testa; ele vai fzer no minimo 1 vez
let teste = 3
do {
  console.log("oi")
  teste--
} while(teste > 0)
