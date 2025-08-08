// Aguarda o carregamento completo do DOM antes de acessar elementos
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle'); // Botão hamburger
  const navMenu   = document.getElementById('navMenu');   // Lista de navegação

  // Ao clicar no botão, alterna abertura do menu e atualiza aria-expanded
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');     // Adiciona/remove classe
    navToggle.setAttribute('aria-expanded', isOpen);     // Atualiza atributo para leitores de tela

    // Atualiza ícone visual: ☰ quando fechado, × quando aberto
    navToggle.innerHTML = isOpen ? '&times;' : '&#9776;';
    navToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });
});

const form = document.getElementById("contactForm");
form.querySelectorAll('input, textarea').forEach(field =>{
    field.classList.remove('error');
    field.nextElementSibling.textContent = '';
});
form.addEventListener('submit', event => {
    event.preventDefault();
let valido = true;
function showError(field, msg){
    field.classList.add('error');
    field.nextElementSibling.textContent = msg;
    valido = false;
}
const nome = form.name.value;
if(nome.length < 3){
    showError(form.name, 'Digite ao menos três caracteres.');
}
});
