import "./style.css";

export function Header(props) {
   
    console.log(props)

    return (
        
        <header>
            <div className="container">
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </div>   

        </header>
    )
}

// Header.propTypes = {
//     title: PropTypes.string,
//     subtitle: PropTypes.string      
// }