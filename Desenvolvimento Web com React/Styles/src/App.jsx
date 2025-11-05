import './styles/base.css'
import './styles/utilities.css'
import './styles/components.css'

import { Button } from './components/Buttons/Button.jsx'
import { Card } from './components/Cards/Card.jsx'
import CardStyled from './components/Cards/CardStyled.jsx'

function App() {

  return (
    <main className='container'>
      <Card title="Aula de Estilização">
        <p>Estilo proveniente de arquivos globais.</p>
        <Button>Muito Legal</Button>
      </Card>

      <CardStyled />
    </main>
  )
}

export default App
