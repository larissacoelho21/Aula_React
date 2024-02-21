import { Header } from './Components/Header'
import './App.css'


function App() {


  return (
    <>
      <Header title='Projeto React' subtitle='segundo titulo' />

      <main className="container">
        <h1>Conteudo</h1>

        <div>
          <a href="#">Vai para o contato</a>
        </div>
      </main>
    </>
  )
}

export default App
