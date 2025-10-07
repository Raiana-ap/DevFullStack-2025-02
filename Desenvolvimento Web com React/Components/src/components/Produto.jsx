// Criar um componente que exibe as informacoes de um produto. O componente pai (App) vaa passar os dados do produto (nome, preco, descricao) como props para o componente filho (Produto), e o componente filo vai exibir as informacoes.

function Produto(props) {
    return (
        <>
            <h1>Produto</h1>
            <p>Nome: {props.name}</p>
            <p>Preço: {props.price}</p>
            <p>Descrição: {props.description}</p>
        </>
    );
}

function App() {
    const produto = {
        name: "Lixeira",
        price: "39.99",
        description: "Lixeira 30x30 plástico"
    }

    return <Produto 
            name={produto.name} 
            price={produto.price} 
            description={produto.description} 
            />
}

export default App