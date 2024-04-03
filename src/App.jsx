import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import Router from './Router'

import './App.css'

function App() {


  return (
    <>
      <Header title='Projeto React' subtitle='primeiro de 2024' />

      <Router />
      <Footer/>
    </>
  )
}

export default App
