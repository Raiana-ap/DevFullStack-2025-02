// arrays

let listaFrutas = Array();
listaFrutas[0] = `maça`;
listaFrutas[1] = `morango`;
listaFrutas[`adocicadas`] = `pera`;
let listaNomes = [`Giovanna`, `Augusto`];

listaFrutas.push(`melancia`) // add no final
listaFrutas.unshift(`laranja`); // add no comeco
listaFrutas.pop(); // excluir no final
listaFrutas.shift(); // eaxcluir no comeco

console.table(listaFrutas);