/*ReactDOM.render(
           React.createElement("h1",null,"Hola mundo React!"),
           document.getElementById("root")
           )*/

// Uso de ReactDOM
/*    ReactDOM.render(
    <div>
        <ul>
            <li>Manzana</li>
            <li>Mango</li>
        </ul>
    </div>,
    document.getElementById("list")
)*/

// Componente legacy
/*class Saludo extends React.Component{
    render(){
        return (
            <h1> Hola mundo Legacy</h1>
        )
    }
}
*/
ReactDOM.render(
    <Contador></Contador>,
    document.querySelector("#root")
)