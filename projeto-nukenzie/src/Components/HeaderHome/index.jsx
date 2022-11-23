const HeaderHome = ({setEntry}) =>  {
    return(
        <header className="header-home">
            <h2><span>Nu</span> Kenzie</h2>
           <button onClick={() => setEntry(false)} type="button">Inicio</button>
        </header>
    
    )
    }
    
    export default HeaderHome