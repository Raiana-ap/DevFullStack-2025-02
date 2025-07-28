// Array é uma estrura unidimencional, geralmente na horizontal de tamanho e tipo geralmente fixo, que são armazenadas / indexadas em um único elemento
// Lista é dinâmico, são ligadas entre si, pode ter qualquer tipo de dado, são alocados de maneira não necessáriamente linear

// Classe é o molde de uma estrutura - modela
// Objeto é o que é realizado em si - implementa - sem classe é chamado de obj literal

// double encoded list ao invez de só ter um próximo também apresenta um anterior, permitindo navegar por ambos sentidos 

// EX
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
        this.tail = null // último elemento da lista
        this.length = 0 // usado para saber tamanho
    }

    inserirInicio(valor) {
        let novo = new Node(valor)
        if(!this.head){
            this.head = this.tail = novo
        }else{
            novo.proximo = this.head
            this.head.anterior = novo
            this.head = novo      
        }
        this.length++
    }

    inserirFim(valor) {
        let novo = new Node(valor)
        if(!this.head){
            this.head = this.tail = novo
        }else{
            this.tail.proximo = novo
            novo.anterior = this.tail
            this.tail = novo      
        }
        this.length++
    }

    inserirEm(indice, valor){ // consigo inserir em qualquer possicao da lista
        if(indice<0 || indice > this.length)throw RangeError 
        ("ïndice está fora dos limites!")
        if (indice === 0) return this.inserirInicio(valor)
        if (indice === this.length) return this.inserirFim(valor)

        let atual = this.head
        for(let i = 0; i < indice; i++){
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
    removerFim(indice){
        
    }
}