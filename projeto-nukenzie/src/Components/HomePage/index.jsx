import HeaderHome from "../HeaderHome"
import FormTransactions from "../FormTransactions"
import TotalMoney from "../TotalMoney"
import TransactionsList from "../TransactionsList"
import { useState } from "react"
import { transactions } from "../../Data/data"


const HomePage = ({setEntry}) =>  {

    const  [transactionsList, setTransanctionsList]= useState(transactions)
    const [filter, setFilter] = useState("Todos")

    const transactionsFiltered = transactionsList.filter(transaction => filter === "Todos" ? true : transaction.type === filter)

    function addTransaction(transactions){
    setTransanctionsList([...transactionsList, transactions])
    }

    function removeTransaction(transactionName){
        const newTransactionsList = transactionsList.filter(transaction => transaction.description !== transactionName)
        setTransanctionsList(newTransactionsList)
    }
    return(
        <div>
            <HeaderHome setEntry={setEntry}/>
            <div className="main-home">
            <div className="money-info-section">
            <FormTransactions addTransaction={addTransaction}/>
            <TotalMoney transactions={transactionsFiltered}/>
            </div>
            <TransactionsList transactions={transactionsFiltered} removeTransaction={removeTransaction} setFilter={setFilter}/>
            
            </div>

        </div>
    
    )
    }
    
    export default HomePage