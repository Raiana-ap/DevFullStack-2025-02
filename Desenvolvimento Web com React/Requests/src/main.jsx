import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FetchUser from './components/FetchUser.jsx'
import AxiosUser from './components/AxiosUser.jsx'
import AxiosPost from './components/AxiosPost.jsx'
import AxiosInterceptor from './components/AxiosInterceptor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Axios é uma biblioteca JavaScript usada para fazer requisições HTTP — ou seja, para enviar e buscar dados de um servidor (API).
    
    Ele é uma alternativa mais prática ao fetch() nativo do JavaScript.


    <FetchUser />
    <AxiosUser />
    */}
    <AxiosPost />
    <AxiosInterceptor />
  </StrictMode>,
)
