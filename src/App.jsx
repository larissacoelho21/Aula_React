import { Header } from './Components/Header'
import { Contador } from './Components/Contador'
import { Lista } from './Components/Lista'

import './App.css'

function App() {


  return (
    <>
      <Header title='Projeto React' subtitle='primeiro de 2024' />

      <main className="container">
        <h1>Conteudo</h1>

        <div>
          <a href="#">Vai para o contato</a>
        </div>

        <Contador />
        <Lista />
      </main>
    </>
  )
}

export default App
