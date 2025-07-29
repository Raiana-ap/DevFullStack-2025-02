// stack ou pilha é uma estrutura de dado abstrata que segue o princípio LIFO (Last-In, First-Out) sao implementadas geralmente com arrays e listas
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
    }
    push(value) {
        let newNode = Node(value)
        newNode.next = this.top
        this.top = newNode
    }

    pop() {
        if (!this.top) return null
        let poppedValue = this.top.value
        this.top = this.top.next
        return poppedValue
    }
    peek() {
        // topo do elemento topo da pilha
        if (!this.top) return null
        return this.top.value
    }
    isEmpty() {
        return this.top === null
    }
}

// Queue = filas - strutura de dados que segue o princípio FIFO (First-In, First-Out)

class Queue {
    constructor() {
        this.front = null // primeiro elemento
        this.rear = null // último elemento 
        this.size = 0 // usado para saber tamanho
    }
    enqueue(value) { // enfileirar
        let newNode = new Node(value)
        if (this.rear) {
            this.rear.next = newNode
        }
        this.rear = newNode
        if (!this.front) {
            this.front = newNode
        }
        this.size++
    }
    dequeue() {
        if (!this.front) return null
        let dequeuedValue = this.front.value
        this.front = this.front.next
        this.size--
        return dequeuedValue
    }
}

// exemplo da lista 3 - algoritmos - memorizar
function fibonacci(n) {
    if (n < 2) return n
    return fibonacci(n - 1) + fibonacci(n - 2)
}

function memoize(fn) {
    const cache = new Map()
    return function (...args) {
        const key = JSON.stringify(args)
        if (cache.has(key)) {
            return cache.get(key)
        }
        const result = fn.apply(this, args)
        cache.set(key, result)
        return result
    }
}

const fastFib = memoize(function fibonacci(n) {
    if (n < 2) return n
    return fastFib(n - 1) + fastFib(n - 2)
})
console.log(fastFib(40))
console.log(fibonacci(40))
