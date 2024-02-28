import "./style.css"
export const Lista = () => {

    const lista = [
        {
            nome: "Projeto novo",
            responsavel: "Fernando Carlos",
            valor: "1200"
        },
        {
            nome: "Projeto do mar",
            responsavel: "Fonseca",
            valor: "4000"
        },
        {
            nome: "Larissa",
            responsavel: "Renata",
            valor: "14000"
        },
        {
            nome: "Fernanda",
            responsavel: "Renata",
            valor: "9000"
        }
        
        
    ]


    return(
        <main className="imagem">
            <section className="content-list" >
                <h1>Lista</h1>
                <img src="http://lorempixel.com.br/300/250/?1" alt="" />

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, hic atque dolore, id qui totam illo debitis ratione provident, fugit veritatis doloribus nobis? Quasi ex non harum impedit incidunt. Est.</p>
            </section>

            <section className="listas">
                <h1>Lista nomes</h1>

                <article className="content-listagem">

                    {lista.map((item, index) => {
                        return (
                        
                            <div key={index} className="listagem">
                                <strong>Nome: </strong> <span>{item.nome}</span>
                                <strong>Responsável: </strong> <span>{item.responsavel}</span>
                                <strong>Valor: </strong> <span>{item.valor}</span>
                            </div>
                        )
                    })}
                </article >
            </section>
        </main>
    )

}