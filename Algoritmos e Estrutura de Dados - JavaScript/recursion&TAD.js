// recursividade = funcao que chama a si mesmo em loopings para transformar um proablema em mini problemas
function fatorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}
console.log(fatorial(5));
/* fatorial(5)
→ 5 * fatorial(4)
→ 5 * (4 * fatorial(3))
→ 5 * (4 * (3 * fatorial(2)))
→ 5 * (4 * (3 * (2 * fatorial(1))))
→ 5 * (4 * (3 * (2 * (1 * fatorial(0)))))
→ 5 * (4 * (3 * (2 * (1 * 1))))  // fatorial(0) retorna 1
→ 5 * 4 * 3 * 2 * 1 = 120 */

// soma dos num de 1 ate n
function soma(n) {
    if (n === 1) {
        return 1
    } else {
        return n + soma(n - 1)
    }
}
console.log(soma(5));

//fibonacci
function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
console.log(fibonacci(6));

// recursividade com arrays e objetos
let categorias = [
    {
        id: 1,
        nome: "Eletronicos",
        filhos: [
            { id: 2, nome: "Celulares", filhos: [] },
            {
                id: 3, nome: "Computadores", filhos: [
                    { id: 4, nome: "Tablets", filhos: [] },
                ]
            }
        ]
    },
    {
        id: 5,
        nome: "Loucas",
        filhos: []
    }
]
function imprimir(lista, nivel = 0) {
    for (const categoria of lista) {
        console.log(" ".repeat(nivel * 2) + categoria.nome);
        if (categoria.filhos.length > 0) {
            imprimir(categoria.filhos, nivel + 1)
        }
    }
}
imprimir(categorias);


// TAD - Tipo Abstrado de Dados
// são regidos por
/*  
    - Abstração
    - Encapsulamento
    - Ocultação de informação
    - Separação entre Interface e Implementação
*/
// Exemplos de estruturas de dados tads:
/*  - Listas
    - Pilhas
    - Filas
    - Árvores de decisão, binária e de busca
    -Hash
    -Mapa
    -Grafo
*/