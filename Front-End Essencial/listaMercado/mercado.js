const lista = document.getElementById('lista');
const item = document.getElementById('item');
const btnAdd = document.getElementById('add');
const btnClear = document.getElementById('clear');
const form = document.getElementById('form');

let itens = [];
let comprados = [];

function salvarDados() {
    localStorage.setItem('listaCompras', JSON.stringify(itens));
}

function renderizarLista() {
    lista.innerHTML = '';
    itens.forEach((item, index) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = item;
        const btnRemove = document.createElement('button');
        btnRemove.textContent = 'X';
        btnRemove.classList.add('remover');
        btnRemove.addEventListener('click', () => {
            removerItem(index);
        });

        const btnComprado = document.createElement('button');
        btnComprado.textContent = '✓';
        btnComprado.classList.add('comprado');
        btnComprado.addEventListener('click', () => {
            itemComprado(index);
        });
        li.append(span, btnComprado, btnRemove);
        lista.appendChild(li);
    });
}

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio do formulário
    const novoItem = item.value.trim();
    if (!novoItem) return;

    itens.push(novoItem);
    salvarDados();
    renderizarLista();
    item.value = '';
});

btnClear.addEventListener('click', () => {
    itens = [];
    salvarDados();
    renderizarLista();
});

function removerItem(indice) {
    itens.splice(indice, 1);
    salvarDados();
    renderizarLista();
}
// comprado - localStorage
function itemComprado(){
    comprados.push(item);
    salvarDados();
    renderizarLista();
}
// contar itens
// filtros para comprados e pendentes
// permitir ordenar alfabeticaemnte ou pro status