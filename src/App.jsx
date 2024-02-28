import { Header } from './Components/Header'
import { Contador } from './Components/Contador'
import { Lista } from './Components/Lista'
import { Footer } from './Components/Footer'
import { Banner } from './Components/Banner'

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
        <Banner />
      </main>

      <Footer/>
    </>
  )
}

export default App
