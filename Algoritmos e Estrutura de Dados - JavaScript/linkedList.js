let car1 = {
    nome: "McQueen",
    cor: "Vermelho"
}

let car2 = {
    nome: "Sally",
    cor: "Azul"
}

class carExemplo {
    constructor(nome, cor) {
        this.nome = nome;
        this.cor = cor;
    }
}

let car3 = new carExemplo("Camaro", "Amarelo");

console.log(car1);
console.log(car2);
console.log(car3);

// nó é como se chama um item da lista
class Node {
    constructor(valor) {
        this.valor = valor;  // valor guardado no nó
        this.proximo = null; // ponteiro para o próximo nó
    }
}

class LinkedList {
    constructor() {
        this.head = null; // início da lista (vazio no começo)
    }

    inserirInicio(valor) {
        let novo = new Node(valor); // cria novo nó com o valor
        novo.proximo = this.head; // novo nó aponta para o antigo nó
        this.head = novo; // novo nó vira o primeiro da lista
    }

    imprimir() {
        let atual = this.head;
        let str = "";
        while (atual) {
            str += atual.valor + "->";
            atual = atual.proximo;
        }
        str += 'null'
        console.log(str)
    }
}

let lista = new LinkedList();
lista.inserirInicio(10);
lista.inserirInicio(9);
lista.imprimir();