// árvore N-ária = estrutura de dados em que um nó pode ter mais de dois filhos -- árvores genéricas
// raiz (nível 0) - filhos (nível 1) - folhas (nós sem filhos) 
// altura / profundidade - altura da raiz até última folha (comumente não contamos  a raiz)
// grau = quantidade de filhos
// precisa de iserção, busca/varredura e remoção 

class TreeNode { // Classe que representa um nó da árvore
    constructor(value) {
        this.value = value
        this.children = []
    }

    addChild(node) {
        this.children.push(node)
    }
    removeChild(value) {
        this.children = this.children.filter(child => child.value != value)
    }
}

class Tree { // Classe que representa a árvore como um todo
    constructor(rootValue) { // árvore nunca esta vazia, quando criamos já temos uma raiz
        this.root = new TreeNode(rootValue)
    }

    traverseDFS(callback){
    // Percorre a árvore em profundidade (DFS - Depth-First Search)
        function recurse(node){ // node é o nó atual da árvore
            callback(node)
            node.children.forEach(child => recurse(child))
        }
        recurse(this.root)
    }

    printTree (node = this.root, prefix = '', isLast = true){
        console.log(prefix + (isLast ? '|_'/*if(true)*/: '|-'/*else*/) + node.value);

        const childCount = node.children.length
        node.children.forEach((child, index) => {
            const isLastChild = index === childCount - 1
            const newPrefix = prefix + (isLast ? '   ' : '|  ')
            this.printTree(child, newPrefix, isLastChild)
        })
    }
}

// Cria 
const tree = new Tree('A')
const B = new TreeNode('B')
const C = new TreeNode('C')
const D = new TreeNode('D')
const E = new TreeNode('E')
const F = new TreeNode('F')
const G = new TreeNode('G')
const H = new TreeNode('H')

// Adiciona
tree.root.addChild(B)
tree.root.addChild(C)
tree.root.addChild(D)

B.addChild(E)
B.addChild(F)

C.addChild(G)

G.addChild(H)

function printNode(node){
    console.log(node.value)
}

tree.traverseDFS(printNode) // A → B → E → F → C → G → H → D

tree.printTree()
/*        A
     /  |  \
    B   C   D
   / \   \
  E   F   G
           \
            H
 */