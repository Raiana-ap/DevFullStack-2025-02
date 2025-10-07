import React, { useState, useEffect } from 'react';

function ViaCepFuncional({ cep }) {
    const [endereco, setEndereco] = useState("");
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        setCarregando(true);
        setErro(null);

        console.log("useEffect executado (montagem ou atualização do CEP).");

        fetch(`https:viacep.com.br/ws/${cep}/json/`)
            .then(res => {
                if (!res.ok) throw new Error("Erro n a resposta da API")
                return res.json()
            })
            .then(data => setEndereco(data))
            .catch(err => {
                setErro(err.message)
            })
            .finally(() => setCarregando(false))
    }, [cep])

    return (
        <>
            <h2>Endereço:</h2>
            <p><strong>Cep: </strong>{endereco.cep}</p>
            <p><strong>Logradouro: </strong>{endereco.logradouro}</p>
            <p><strong>Complemento: </strong>{endereco.complemento}</p>
            <p><strong>Bairro: </strong>{endereco.bairro}</p>
            <p><strong>Cidade: </strong>{endereco.localidade}</p>
            <p><strong>Estado: </strong>{endereco.estado}</p>
        </>
    )
}

export default ViaCepFuncional
