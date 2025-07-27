// objetos

// oq um objeto tem? um livro tem uma capa, nome, editora, autor, páginas...
// objetos terao suas caracteristicas colocadas pelo projeto 
// oq um obj faz? folhear, ler, arremessar, guardar o livro
// como eles estao? estado => ele foi lido, esta lacrado, aberto, sujo, novo, pago

// nao so coisa que tocamos podem ser objetos: dates...

// ex de obj: cliente

let livro = {
    nome: 'O Principe Cruel',
    anoLancamento: '2015',
    autor: 'Holly Black',
    numPag: 119,

    mostrarCaracteristicas: function () {
        return `${this.nome} é um livro de fantasia`
    }
} // A estrutura do objeto é dentro das chaves
console.log(livro.mostrarCaracteristicas());

console.log(livro.anoLancamento);

let livro2 = livro;
livro2.preco = 20.2;
console.log(livro2);
console.log(livro);

let filme = {
    titulo: 'High School Musical',
    anoLancamento: 2007,
    autores: ['Zac Efron', 'Arthur Morgan', 'Cloud Strife'],
    genero: 'drama',
    mostrarCaracteristicas: function () {
        return `${this.titulo} é um filme de da minha idade` 
    }
}

function anime(nome, maisForte, maisFraco, nota){
    return{
        nome,
        maisForte,
        maisFraco,
        nota
    }
}

let anime1 = anime("Naruto", "Não sei", "Konohamaru", 5);
console.log(anime1);



let jogadores = ['Caça Rato', 'Ganso', 'Pato'];

for ( let JasonTodd in jogadores) { // indices
    console.log(jogadores[JasonTodd]);
}

let palavra = 'Grêmio';
for (let char of palavra){ // pega o valor
    console.log(char);
}

for (let value in anime1){
    console.log(anime1[value]);
}

for (let value of Object.keys(anime1)){
    console.log(anime1[value]);
}

// calcular as medias das notas  dos alunos de um professor e dizer se a turma do professor esya na media

let professor = {
    nome: 'Stark Parker',
    materia: 'Fisica',
    notas: {
        aluno1: [5,2],
        aluno2: [10,7]
    }
}

let somaNotas = 0;
let numeroAlunos = 0; 

for (let aluno in professor.notas){
    somaNotas += Array.isArray(professor.notas[aluno]) ? professor.notas[aluno].reduce((acc,nota) => acc + nota, 0)/professor.notas[aluno].length : professor.notas[aluno];
    numeroAlunos++;
}

let media = somaNotas/numeroAlunos;
if(media >= 6){
    console.log(`A média da turma é ${media} e está acima do padrão.`)
}else{
    console.log(`A média da turma é ${media} e está abaixo do padrão.`)
}