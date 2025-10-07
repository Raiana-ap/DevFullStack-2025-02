const  btnWhy = document.getElementById("btnWhy");
const  btnMain = document.getElementById("btnMain");
const  btnRelated = document.getElementById("btnRelated");
const  content = document.getElementById("content");
const arrayBtns = [btnWhy, btnMain, btnRelated];
const arrayContents = [
  [`
  <ul>
    <li>É extremamente popular</li>
    <li>Facilita a criação de interfaces de usuários complexas e interativas</li>
    <li>É poderoso e flexível</li>
    <li>Possui um ecossistema muito ativo e versátil</li>
  </ul>
`],
[`
    <ul>
      <li>Componente, JSX e Props</li>
      <li>Estado</li>
      <li>Hooks (ex.: useEffect())</li>
      <li>Renderização dinâmica</li>
    </ul>
  `],
  [`
    <ul>
      <li>Página oficial (react.dev)</li>
      <li>Next.js (Framework Fullstack)</li>
      <li>React Native (construa aplicativos móveis nativos com React)</li>
    </ul>
  `]
];

content.innerHTML = `
  <ul>
    <li>É extremamente popular</li>
    <li>Facilita a criação de interfaces de usuários complexas e interativas</li>
    <li>É poderoso e flexível</li>
    <li>Possui um ecossistema muito ativo e versátil</li>
  </ul>
`;

function displayContent(idItens){
  content.innerHTML = "";
  content.innerHTML = arrayContents[idItens];
}

function activeButton(button){
  arrayBtns.forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");
}

function handClick(event){
  const btnMap = {
    "btnWhy": 0,
    "btnMain": 1,
    "btnRelated": 2
  };
  activeButton(event.target);
  displayContent(btnMap[event.target.id]);
}

arrayBtns.forEach(btn => btn.addEventListener('click', handClick))
