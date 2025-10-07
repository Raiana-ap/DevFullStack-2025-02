function Button(props){
  //Componente é a função usada como tag
  //Ex daqui button e app
  // porps são objetos que permitem que o componente pai passe dados para o componente filho 
  return <button onClick={props.onClick}>Clique aqui</button>
}

function App() {

  const handleClick = () => {
    alert("Botão clicado!")
  };

  return (
    <>
     <button onClick={handleClick}>Clique aqui</button>
    </>
  )
}

export default App
