let livraria = [
    { titulo: '1984', autor: 'George Orwell', ano: 1984 },
    { titulo: 'O Profeta', autor: 'Endrew Berthold', ano: 2001 },
    { titulo: 'Código Limpo', autor: 'Martin', ano: 2010 },
    { titulo: 'O Velho e o Mar', autor: 'Hemmingway', ano: 1910 },
    { titulo: 'O Príncipe', autor: 'Maquiável', ano: 2002 },
]

// for of para iterar e verificar os livros publicados antes do ano 2000.

for (let livro in livraria) {
    console.log(livraria[livro].ano)
}

for (let livro of livraria) {
    if (livro.ano < 2000) {
        console.log(livro.ano)
    }
}

let filmes = [
    { titulo: "Sempre ao seu lado", genero: "De chorar" },
    { titulo: "Massacre da Serra Elétrica", genero: "Terror" },
    { titulo: "Minha Mãe é uma Peça", genero: "Comédia" },
    { titulo: "Tarzan", genero: "Aventura" },
    { titulo: "Como eu Era Antes de Você", genero: "De chorar" },
    { titulo: "Jogo da Imitação", genero: "Histórico" },
    { titulo: "Top Gun", genero: "Guerra" },
    { titulo: "Your Name", genero: "Romance" },
    { titulo: "Deadpool", genero: "Herói" },
    { titulo: "Batman Forever", genero: "Herói" },
]
// listar a contagem dos generos
let contagemGeneros = {}

for (let i = 0; i < filmes.length; i++) {
    let genero = filmes[i].genero
    if (contagemGeneros[genero]) {
        contagemGeneros[genero]++
    } else {
        contagemGeneros[genero] = 1
    }
}

for (let genero in contagemGeneros) {
    console.log(`${genero}: ${contagemGeneros[genero]}`)
}

// funcao que calcula um fatorial
function fatorial(num) {
    let resultado = 1;
    for (let i = 1; i <= num; i++) {
        resultado = resultado * i;
    }
    console.log(resultado);
}

fatorial(5);  // Saída: 120

// fibonnacci

function fibonacci(){
    let a = 0, b = 1, temp;
    console.log(a);
    console.log(b);
    for(let i = 3; i <= 10; i++){
        temp = a + b;
        console.log(temp);
        a = b;
        b = temp;
    }
}
fibonacci();

// PA

function PA (numInicial, razao, ateNum){
    let resultados = [];
    resultados.push(numInicial);
    for (i=1; i<ateNum; i++){
    let resultado = numInicial + razao * i;
    resultados.push(resultado);
    }
     return resultados;
}
console.log(PA(1,2,4))
// ex gpt

const pessoa = { nome: "Raiana", idade: 16, cidade: "Porto Alegre" };

for (let chave in pessoa) {
    console.log(chave); // Mostra as chaves: nome, idade, cidade
    console.log(pessoa[chave]); // Mostra os valores correspondentes
}