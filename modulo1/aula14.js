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

class Node {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    inserirInicio(valor) {
        let novo = new Node(valor);
        novo.proximo = this.head;
        this.head = novo;
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

class Node {
    constructor(valor) {
        this.valor = valor
        this.anterior = null
        this.proximo = null
    } 
}

class DoublyLinkedList {
    constructor() {
        this.head = null
    }

    inserirInicio(valor) {
        let novo = new Node(valor)
        novo.next = this.head
        if(this.head){
            this.head.anterior = novo
        }
        this.head = novo
    }

    inserirFim() {

    }

    imprimirFrente() {

    }

    imprimirAtras() {

    }
}