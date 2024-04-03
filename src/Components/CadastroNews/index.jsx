import { useState } from "react";
import "./style.css"
 
export function CadastroNews() {
 
    // Estado do formulario
    const initilFomr = {
        nome: "",
        email: "",
        telefone: "",
    }
    const [formState, setFormState] = useState(initilFomr);
 
    // função para lidar com a alteração de campos de entrada
    const handleInput = (event) => {
        //obter o elemento da entrada atual
        const target = event.currentTarget;
 
        //Extrair o valor e o nome do campo de entrada
        const {value, name, telefone } = target;
 
        //atualizar o estado do formulario com os novos valores
        setFormState({...formState, [name]: value, [telefone]: value })
    }
 
    const exemploTarget = (event) => {
        console.log("elemento clicado: ", event.target);
        console.log("elemento atual:", event.currentTarget);
    }
 
    // Função para lidar com a submissão do formulário
    const handleSubmit = (event) => {
        event.preventDefault();
 
        const formGeneral = {
            nome: formState.nome,
            email: formState.email,
            telefone: formState.telefone,
            createAT: new  Date(),
         
        }
 
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formGeneral),
        }
 
        fetch('http://localhost:7000/news', requestOptions)
        .then((response) => response.json())
        .then ((data) => setFormState(data))
 
        //limpar os campos do formulario
        setFormState({...initilFomr})
       
        console.log(formState);
    };
 
 
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        value={formState.nome}
                        onChange={handleInput}
                        placeholder="Digite seu nome"
 
                    />
                </div>
 
                <div className="form-control">
                    <label htmlFor="nome">Email</label>
                    <input
                        type="text"
                        name="email"
                        id="emial"
                        value={formState.email}
                        onChange={handleInput}
                        placeholder="Digite seu email"
 
                    />
                </div>
 
                <div className="form-control">
                    <label htmlFor="nome">Telefone</label>
                    <input
                        type="text"
                        name="telefone"
                        id="telefone"
                        value={formState.telefone}
                        onChange={handleInput}
                        placeholder="Digite seu telefone"
 
                    />
                </div>
 
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
 
           
        </section>
 
    );
}