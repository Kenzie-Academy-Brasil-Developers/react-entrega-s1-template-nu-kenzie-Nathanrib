const StartButton = ({setEntry}) =>  {
    return(
        <div>
            <button onClick={() => setEntry(true)} type="button" className="start-button">Iniciar</button>
        </div>
    )
    }
    
    export default StartButton