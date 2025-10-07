// Instruções: para conseguir executar os códicos desse arquivo, faça a instalação do node. No terminal cmd digite npm init, de muitos enters, até ter um novo arquivo. Para que o prompt funcione é necessário colocar no terminal npm install prompt. Para executar os códigos escreva no cmd node nomeArquivo.js.

// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real (meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário.
function ehDataValida(dia, mes, ano) {
    if (!Number.isInteger(dia) || !Number.isInteger(mes) || !Number.isInteger(ano)) {
        return false;
    }
    if (ano < 1 || mes < 1 || mes > 12 || dia < 1) {
        return false;
    }
    let diasNoMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        diasNoMes[1] = 29;
    }
    if (dia > diasNoMes[mes - 1]) {
        return false;
    }
    return true;
}
// teste:
console.log(ehDataValida(29, 2, 2024));
console.log(ehDataValida(29, 2, 2023));



// Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar. Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.
const prompt = require("prompt-sync")();
let numAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativa = 0;
let palpite;
while (palpite != numAleatorio) {
    palpite = parseInt(prompt("Adivinhe o número entre 1 e 100: "));
    tentativa++;
    if (palpite > numAleatorio) {
        console.log("Mais baixo!");
    } else if (palpite < numAleatorio) {
        console.log("Mais alto!");
    } else {
        console.log(`Parabéns! Você acertou em ${tentativa} tentativa(s).`);
    }
}



// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array.
let frase = "olá olá mundo mundo";
let palavras = frase.split(" ");
let unicas = [];
for (let i = 0; i < palavras.length; i++) {
    let palavraAtual = palavras[i];
    let encontrada = false;
    for (let j = 0; j < unicas.length; j++) {
        if (palavraAtual === unicas[j]) {
            encontrada = true;
            break;
        }
    }
    if (!encontrada) {
        unicas.push(palavraAtual);
    }
}
console.log(unicas);



// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando um Error, e n === 0 retornando 1.
function fatorial(n) {
    if (n < 0) throw new Error("Fatorial não definido para negativos");
    if (n === 0) return 1;
    return n * fatorial(n - 1);
}
// teste:
console.log(fatorial(5));



// Crie function debounce(fn, delay) que receba uma função fn e um delay em ms, retornando uma nova função que só executa fn se não for chamada novamente dentro do intervalo.
function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
};

// teste:
const oi = () => console.log("Oi!");
let debounceOi = debounce(oi, 500);
debounceOi();
debounceOi();
debounceOi();



// Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), retornando resultados instantâneos em repetidas invocações.
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args); 
    if (cache.has(key)) {
      return cache.get(key);
    }
    const resultado = fn(...args);
    cache.set(key, resultado);
    return resultado;
  };
}
// teste:
const fatorialMem = memoize(fatorial);
console.log(fatorialMem(5)); 
console.log(fatorialMem(5)); 



// Dado um array produtos = [{ nome, preco }, ...], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort.
function ordenaProdutos(produtos) {
  return produtos
    .sort((a, b) => a.preco - b.preco)
    .map(produto => produto.nome);
}
// teste:
const produtos = [
  { nome: "Caderno", preco: 20 },
  { nome: "Caneta", preco: 5 },
  { nome: "Mochila", preco: 100 }
];
console.log(ordenaProdutos(produtos));



// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total.
function totalVendas(vendas) {
  return vendas.reduce((acumulador, venda) => {
    if (!acumulador[venda.cliente]) {
      acumulador[venda.cliente] = 0;
    }
    acumulador[venda.cliente] += venda.total;
    return acumulador;
  }, {});
}
// teste:
const vendas = [
  { cliente: "Ana", total: 100 },
  { cliente: "Pedro", total: 55 },
  { cliente: "Ana", total: 150 },
  { cliente: "Pedro", total: 500 },
  { cliente: "Pedro", total: 5000 },
  { cliente: "Julia", total: 700 }
];
console.log(totalVendas(vendas));



// Funcoes: paresParaObjeto(pares) recebe um array de pares [ [chave, valor], ... ] e retorna o objeto equivalente e objetoParaPares(obj) faz o inverso, retornando um array de pares.
function paresParaObjeto(pares) {
  const obj = {};
  for (let i = 0; i < pares.length; i++) {
    const [chave, valor] = pares[i];
    obj[chave] = valor;
  }
  return obj;
}
// teste:
console.log(paresParaObjeto([["a", 1], ["b", 2]]));


function objetoParaPares(obj) {
  const pares = [];
  for (let chave of Object.keys(obj)) {
    pares.push([chave, obj[chave]]);
  }
  return pares;
}
// teste:
console.log(objetoParaPares({ a: 1, b: 2 }));
