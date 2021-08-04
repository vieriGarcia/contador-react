
//Componente Funtional
const Contador = () => {

    const [state, setstate] = React.useState(5)
    
    const disminuir = () => setstate(state-1)
    const aumentar = () => setstate(state+1)
    
    return (
        <div>
            <h1>Contador: {state}</h1>
            <hr />
            <button onClick={aumentar} >Aumentar</button>
            <button onClick={disminuir} >Disminuir</button>
        </div>
    )
}

