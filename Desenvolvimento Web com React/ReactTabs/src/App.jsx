import { useState } from 'react';
import './App.css';

const contents = [
  {
    label: "Por que React?",
    items: [
      "É extremamente popular",
      "Facilita a criação de interfaces de usuários complexas e interativas",
      "É poderoso e flexível",
      "Possui um ecossistema muito ativo e versátil"
    ]
  },
  {
    label: "Principais recursos",
    items: [
      "Componente, JSX e Props",
      "Estados",
      "Hooks (ex.: useEffect())",
      "Renderização dinâmica"
    ]
  },
  {
    label: "Recursos Relacionados",
    items: [
      "Página oficial (react.dev)",
      "Next.js (Framework Fullstack)",
      "React Native (construa aplicativos móveis nativos com React)"
    ]
  },
]

function App() {

  const [indexAbaAtiva, atualizaIndexAbaAtiva] = useState(0);

  return (
    <>
      <div id="main">
        <header>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s"
            alt="logo JS"/>
          <div id="textos">
            <h1>Vanilla JavaScripit</h1>
            <p>JavaScripit Puro</p>
          </div>
        </header>

        <div id="menu">

          <div id="button-content">
            {contents.map((tab, index) => (
              <button key={tab.label} onClick={() => atualizaIndexAbaAtiva(index)}>
                {tab.label}
              </button>
            ))}

          </div>

          <div id="content">
            <ul>
              {contents[indexAbaAtiva].items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
