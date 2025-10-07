import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/Contagem.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
