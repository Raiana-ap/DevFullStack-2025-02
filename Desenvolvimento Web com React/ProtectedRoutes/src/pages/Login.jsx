import { useState } from 'react'                  
import { useAuth } from '../context/AuthContext'  
import { useNavigate } from 'react-router-dom'    

const Login = () => {
    const [username, setUsername] = useState('')  
    const [password, setPassword] = useState('')  

    const { login } = useAuth()                   
    const navigate = useNavigate()                

    const handleSubmit = (event) => {
        event.preventDefault()                   
        login(username, password)                 
        navigate('/')                             
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Login</h1>

                <form onSubmit={handleSubmit} className="space-y-5">       
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-700" htmlFor="username">
                            Usuário
                        </label>
                        <input 
                            id="username"
                            type="text" 
                            placeholder='User' 
                            value={username} 
                            onChange={(event) => setUsername(event.target.value)} 
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400
                                       focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                        />
                    
                        <p className="text-xs text-gray-500">Ex.: admin</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-700" htmlFor="password">
                            Senha
                        </label>
                        <input 
                            id="password"
                            type="text" 
                            placeholder='Password' 
                            value={password} 
                            onChange={(event) => setPassword(event.target.value)} 
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400
                                       focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                        />
                      
                        <p className="text-xs text-gray-500">Dica: 1234</p>
                    </div>

                    <button 
                        type='submit'
                        className="w-full rounded-lg bg-indigo-600 text-white font-semibold py-2.5
                                   hover:bg-indigo-700 active:bg-indigo-800
                                   focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                                   transition"
                    >
                        Entrar
                    </button>
                </form>
 
                <div className="mt-6 text-center text-sm text-gray-500">
                    Dica de acesso: <span className="font-medium text-gray-700">admin / 1234</span>
                </div>
            </div>
        </div>
    )
}

export default Login