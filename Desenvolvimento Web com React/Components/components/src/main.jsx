import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/Contagem.jsx'
import LifeCycleComponent from './components/LifeCycleComponent.jsx'
import LifeCycleFuncionalComponent from './components/LideCycleFuncionalComponent.jsx'
import ViaCepFuncional from './components/ViaCepFuncional.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <LifeCycleComponent />
    <LifeCycleFuncionalComponent />
    <ViaCepFuncional cep="41900020" />
  </StrictMode>,
)
