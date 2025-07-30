// Cada nó apresenta dois filhos, comumente o lado esquerdo tem valores menores que a raiz e o lado direito maiores
class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        let newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
            return
        }

        this.insertNode(this.root, newNode)
    }
    insertNode(currentNode, newNode) {
        if (newNode.value < currentNode.value) {
            if (currentNode.left === null) {
                currentNode.left = newNode
            } else {
                this.insertNode(currentNode.left, newNode)
            }
        } else {
            if (currentNode.right === null) {
                currentNode.right = newNode
            } else {
                this.insertNode(currentNode.right, newNode)
            }
        }
    }
    inorderTraversal(node = this.root) { // travessia em ordem (in-order traversal)
        if (node != null) {
            this.inorderTraversal(node.left)
            console.log(node.value)
            this.inorderTraversal(node.right)
        }
    }
    search(value, node = this.root) {
        if (node === null) return false

        if (value === node.value) return true

        if (value < node.value) {
            return this.search(value, node.left)
        } else {
            return this.search(value, node.right)
        }
    }
}
let tree = new BinaryTree()

tree.insert(10)
tree.insert(5)
tree.insert(11)
tree.insert(3)
tree.insert(6)
tree.insert(10)
tree.insert(9)
tree.inorderTraversal()
/*  após adicionar um número,  a posição dele não é modificada
   10 
  / \
  5  11
/ \   /
3 6  10
   \
   9 
*/
// pesquisar na árvore é balenciada é mais rápido que em array 
console.log(tree.search(10))
console.log(tree.search(4))

function binarySearch(arr, target) {
    let left = 0  // início do intervalo de busca
    let right = arr.length - 1 // fim do intervalo de busca

    while (left <= right) { //O loop continua enquanto o ponteiro da esquerda for menor ou igual ao da direita.Isso garante que ainda existe um intervalo válido a ser verificado.
        let mid = Math.floor((left + right) / 2) //Calcula o índice do meio do intervalo atual.
        if (arr[mid] === target) {
            //Se o valor no meio for igual ao alvo (target), a função retorna o índice encontrado.
            return mid
        } else if (arr[mid] < target) {
            //Se o valor do meio for menor que o alvo, o alvo só pode estar à direita,então avançamos o ponteiro da esquerda (left) para mid + 1.
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}
let numbers = [1, 3, 5, 7, 9, 10, 12, 13, 16, 20]
console.log(binarySearch(numbers, 10))