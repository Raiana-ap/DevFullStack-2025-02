// Ciclo de vida de um componente: montar, atualizar, desmontar

import { Component } from "react";

class LifeCycleComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    componentDidMount() {
        console.log("Componente Montado");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Componente atualizado! Propriedades e estados anteriores: ", prevProps, prevState);
    }

    componentWillUnmount() {
        console.log("Componente Desmontado.")
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <>
                <p>Contagem: {this.state.count}</p>
                <button onClick={this.increment}>Incrementar</button>
            </>)
    }
}

export default LifeCycleComponent;