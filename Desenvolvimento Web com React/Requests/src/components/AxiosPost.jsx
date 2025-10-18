import { useState } from 'react';
import axios from 'axios';

const AxiosPost = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const createUsers = async (event) => {
        event.preventDefault();

        const newUser = {
            name: name,
            email: email
        }

        setLoading(true);
        setError(null);
        setMensagem('');

        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/users", newUser);
            setMensagem(`Usuário ${response.data.name} criado com sucesso.`);
            setLoading(false);
        } catch (err) {
            setError(err.message)
            setLoading(false)
        } finally {
            setLoading(false);

        };
    }

    return (
        <>
            <h1>Cadastro de Usuário</h1>

            <form onSubmit={createUsers}>

                <label>
                    Nome:
                    <input type="text" placeholder='Digite seu nome:' value={name} onChange={(event) => setName(event.target.value)} />
                </label>
                <br />

                <label>
                    Email:
                    <input type="email" placeholder='Digite seu email:' value={email} onChange={(event) => setEmail(event.target.value)} />
                </label>
                <br />

                <button type="submit" disabled={loading}>{loading ? 'Enviando...' : 'Criar usuário'}</button>

                {loading && <p>Carregando...</p>}
                {error && <p style={{ color: 'red' }}>Erro: {error}</p>}
                {mensagem && <p>{mensagem}</p>}
            </form>

        </>
    )
}

export default AxiosPost;