
const TransactionCard = ({transaction, index, removeTransaction}) =>  {

    
  
    return(
        <li className={ transaction.type === "entrada" ? "card" : "card-spend"}>
        
            
        <div className="card-description">
        <h3>{transaction.description}</h3>
        <p>{transaction.type}</p>
        
        </div>
        <div className="amount-and-trash">
        <p>R$ {transaction.amount}</p>
        <button onClick={() => removeTransaction(transaction.description)}>🗑️</button>


        </div>

        </li>
    
    )
    }
    
    export default TransactionCard