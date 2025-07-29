// Array é uma estrura unidimencional, geralmente na horizontal de tamanho e tipo geralmente fixo, que são armazenadas / indexadas em um único elemento
// Lista é dinâmico, são ligadas entre si, pode ter qualquer tipo de dado, são alocados de maneira não necessáriamente linear

// Classe é o molde de uma estrutura - modela
// Objeto é o que é realizado em si - implementa - sem classe é chamado de obj literal

// double encoded list ao invez de só ter um próximo também apresenta um anterior, permitindo navegar por ambos sentidos 

// EX
class Node { //o construtor é responsável por criar cada elemento da lista encadeada
    constructor(valor) {
        this.valor = valor
        this.anterior = null
        this.proximo = null
    }
}

class DoublyLinkedList {
    constructor() { // controla todos os nós - "gerente"
        this.head = null
        this.tail = null // último elemento da lista
        this.length = 0 // usado para saber tamanho
    }

    inserirInicio(valor) {
        let novo = new Node(valor) // Cria um novo nó com o valor informado.
        if (!this.head) {
            //novo nó será o único da lista, então tanto o head quanto o tail apontam para ele.
            this.head = this.tail = novo
        } else {
            novo.proximo = this.head
            this.head.anterior = novo
            this.head = novo
        }
        this.length++

        /*Exemplo:
            Lista atual: [20] -> [30]
            Com head = 20 e tail = 30
            Chamando inserirInicio(10):
                Cria [10]
                    Faz 10 -> 20
                    Faz 20 <- 10
                    head agora é 10
            Nova lista: [10] <-> [20] <-> [30] */
    }

    inserirFim(valor) {
        let novo = new Node(valor)
        if (!this.head) {
            this.head = this.tail = novo
        } else {
            this.tail.proximo = novo
            novo.anterior = this.tail
            this.tail = novo
        }
        this.length++
    }

    inserirEm(indice, valor) { // consigo inserir em qualquer possicao da lista
        if (indice < 0 || indice > this.length) throw RangeError
            ("ïndice está fora dos limites!")
        if (indice === 0) return this.inserirInicio(valor)
        if (indice === this.length) return this.inserirFim(valor)

        let atual = this.head
        for (let i = 0; i < indice; i++) {
            atual = atual.proximo
        }


        let novo = new Node(valor)
        let noAnterior = atual.anterior
        noAnterior.proximo = novo
        novo.anterior = noAnterior
        novo.proximo = atual
        atual.anterior = novo

        this.length++
    }
    removerFim(indice) {
        if (indice < 0 || indice > this.length) throw RangeError
            ("ïndice está fora dos limites!")
        let removido
        if (this.length === 1) {
            removido = this.head
            this.head = this.tail = null
        } else if (indice === 0) {
            removido = this.head
            this.head = this.head.proximo
            this.head.anterior = null
        } else if (indice === this.length - 1) {
            removido = this.tail
            this.tail = this.tail.anterior
            this.tail.proximo = null
        } else {
            let atual = this.head
            for (let i = 0; i < indice; i++) {
                atual = atual.proximo
            }
            removido = atual
            const {proximo,anterior} = atual // mesma coisa que colocar atual. ... nesses outros
            anterior.proximo = proximo
            proximo.anterior = anterior
        }
        this.length--
    }
}