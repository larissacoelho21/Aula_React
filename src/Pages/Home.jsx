import { Link } from "react-router-dom";
import { Banner } from "../Components/Banner";
import { CadastroNews } from "../Components/CadastroNews";
import { Contador } from "../Components/Contador";
import { Lista } from "../Components/Lista";

export function Home() {
    return (

        <main className="container">
            <h1>Conteudo</h1>

            <div>
                {/* <a href="#">Vai para o contato</a> */}
                <Link to="/contato">Vai para contato</Link>
            </div>

            <Contador />
            <Lista />
            <Banner />
            <CadastroNews />
        </main>

    )
}