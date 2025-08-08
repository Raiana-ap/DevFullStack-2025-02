const lista = document.getElementById('lista');
const itemInput = document.getElementById('item');
const btnClear = document.getElementById('clear');
const form = document.getElementById('form');
const contador = document.getElementById('contador');
const filtro = document.getElementById('filtro');
const ordenar = document.getElementById('ordenar');

let itens = JSON.parse(localStorage.getItem('listaCompras')) || [];
let comprados = JSON.parse(localStorage.getItem('itensComprados')) || [];

function salvarDados() {
  localStorage.setItem('listaCompras', JSON.stringify(itens));
  localStorage.setItem('itensComprados', JSON.stringify(comprados));
}

function atualizarContador() {
  const total = itens.length;
  const compradosCount = comprados.length;
  const pendentes = total - compradosCount;
  contador.textContent = `Total: ${total} | Comprados: ${compradosCount} | Pendentes: ${pendentes}`;
}

function renderizarLista() {
  lista.innerHTML = '';
  let itensFiltrados = [...itens];

  // Filtros
  if (filtro.value === 'comprados') {
    itensFiltrados = itensFiltrados.filter(item => comprados.includes(item));
  } else if (filtro.value === 'pendentes') {
    itensFiltrados = itensFiltrados.filter(item => !comprados.includes(item));
  }

  // Ordenação
  if (ordenar.value === 'alfabetica') {
    itensFiltrados.sort((a, b) => a.localeCompare(b));
  } else if (ordenar.value === 'alfabetica reversa'){
    itensFiltrados.sort((a, b) => a.localeCompare(b)).reverse();
  }else if(ordenar.value === 'status') {
    itensFiltrados.sort((a, b) => {
      const aComprado = comprados.includes(a);
      const bComprado = comprados.includes(b);
      return aComprado - bComprado;
    });
  }

  // Exibir
  itensFiltrados.forEach((nome) => {
    const li = document.createElement('li');
    if (comprados.includes(nome)) li.classList.add('comprados');

    const span = document.createElement('span');
    span.textContent = nome;

    const btnComprado = document.createElement('button');
    btnComprado.textContent = '✓';
    btnComprado.classList.add('comprado');
    btnComprado.addEventListener('click', () => {
      alternarComprado(nome);
    });

    const btnRemove = document.createElement('button');
    btnRemove.textContent = 'X';
    btnRemove.classList.add('remover');
    btnRemove.addEventListener('click', () => {
      removerItem(nome);
    });

    li.append(span, btnComprado, btnRemove);
    lista.appendChild(li);
  });

  atualizarContador();
}

function alternarComprado(nomeItem) {
  const index = comprados.indexOf(nomeItem);
  if (index === -1) {
    comprados.push(nomeItem);
  } else {
    comprados.splice(index, 1);
  }
  salvarDados();
  renderizarLista();
}

function removerItem(nomeItem) {
  itens = itens.filter(i => i !== nomeItem);
  comprados = comprados.filter(i => i !== nomeItem);
  salvarDados();
  renderizarLista();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = itemInput.value.trim();
  if (!nome || itens.includes(nome)) return;
  itens.push(nome);
  salvarDados();
  renderizarLista();
  itemInput.value = '';
});

btnClear.addEventListener('click', () => {
  itens = [];
  comprados = [];
  salvarDados();
  renderizarLista();
});

filtro.addEventListener('change', renderizarLista);
ordenar.addEventListener('change', renderizarLista);

// Inicial
renderizarLista();
