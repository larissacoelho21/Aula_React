import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Contato } from "./Pages/Contato";


const Router = ( ) => {
    return (
        <BrowserRouter> {/* Segura toda a estrutura do rotas - pai*/}
            <Routes>{/* precisa para inicio da configurção Pai do Route */}

                <Route path="/" element={<Home />}/> {/* usado para inserir os dados */} 
                <Route path="/contato" element={<Contato />}/>
            </Routes>
        
        </BrowserRouter>
    )
}

export default Router; /* Está deixando o componente vísivel */
