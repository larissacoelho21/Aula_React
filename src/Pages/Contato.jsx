import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Contato() {
    // UseState do React para gerenciar o estado dos usuários
    const [usuarios, setUsuarios] = useState([]);

    // Hook useEffect para lidar com efeitos colaterais no componenets
    useEffect(() => {
        fetch("http://localhost:7000/news").then((response) => response.json()).then((data) => setUsuarios(data))
    }, []);

    console.log(usuarios)
    return (
        <div className="container">
            <h1>Página de contato</h1>

            <div>
             <Link to="/">Vai para o Início</Link>
            </div>

            <div>
                {usuarios.map((user) => (
                    <div key={user.id}>
                        <strong>Nome: {user.nome}</strong><br/>
                        <strong>Email: {user.email}</strong><br/>
                        <strong>Telefone: {user.telefone}</strong><br/>
                        <hr/>
                    </div>
                ))}
            </div>

        </div>
    )
}