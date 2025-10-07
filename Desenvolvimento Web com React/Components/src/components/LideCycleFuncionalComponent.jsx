import { useState, useEffect } from "react";

function LifeCycleFuncionalComponent() {
    const [count, setcount] = useState(0)

    useEffect(() => { // efeitos colaterias da m inha aplicação
        console.log("Componente montado!");
        return () => {
            console.log("Componente será desmontado.")
        }
    }, [])

    useEffect(() => {
        console.log("Componente atualizado!")
    }, [count])

    const increment = () => {
        setcount(count + 1);
    }

    return (
        <>
            <p>Contagem: {count}</p>
            <button onClick={increment}>Incrementar</button>
        </>)
}

export default LifeCycleFuncionalComponent