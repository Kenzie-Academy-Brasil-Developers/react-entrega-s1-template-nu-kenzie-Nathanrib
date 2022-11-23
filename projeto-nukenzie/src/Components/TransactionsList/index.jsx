import TransactionCard from "./TrasnsactionCard"


const TransactionsList = ({transactions, removeTransaction, setFilter}) =>  {
    return(
        <div className="main-transactions">
            
        <div className="list-header">
        <p>Resumo Financeiro</p>
            <div className="buttons-list">
                <button onClick={()=>{setFilter("Todos")}}>Todos</button>
                <button onClick={()=>{setFilter("entrada")}}>Entradas</button>
                <button onClick={()=>{setFilter("despesa")}}>Despesas</button>
            </div>
        </div>
        <ul className="transactions-list" >
        
            {transactions.map((transaction, index) =>
             <TransactionCard key={index} transaction={transaction} removeTransaction={removeTransaction}/> 
            )}
        </ul>
       
    
    
        

        </div>
    
    )
    }
    
    export default TransactionsList