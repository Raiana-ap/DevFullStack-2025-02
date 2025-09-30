import { Component } from 'react';

class ComponenteClasse extends Component {
    // ComponenteClasse herda Component
    constructor(props){
        super(props) //chama o construtor da classe pai (Component)
        this.state = { count: 0 } //Esse state funciona como uma "memória" do componente. Sempre que ele muda, o React renderiza de novo.
    }

    incrementCount = () => {
        this.setState({ count: this.state.count +1})
    }

    render(){ //obrigatório em componentes de classe / retorna o JSX que vai aparecer na tela.
        return(
            <div>
                <p>Contagem: {this.state.count}</p>
                <button onClick={this.incrementCount}>Incrementar</button>
            </div>
        )
    }
}

export default ComponenteClasse