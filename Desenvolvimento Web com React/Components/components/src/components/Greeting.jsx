function Greeting(props) {
    return <h1>Olá, {props.name}</h1>
}

function Aplicativo() {
    <Greeting name='Joma'></Greeting>
}

export default Aplicativo