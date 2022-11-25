
import TransactionCard from "./TrasnsactionCard"


const TransactionsList = ({ transactions, removeTransaction, setFilter }) => {
    if (transactions.length === 0) {
        return (
            <div className="main-transactions">

                <div className="list-header">
                    <p>Resumo Financeiro</p>
                    <div className="buttons-list">
                        <button onClick={() => { setFilter("Todos") }}>Todos</button>
                        <button onClick={() => { setFilter("entrada") }}>Entradas</button>
                        <button onClick={() => { setFilter("despesa") }}>Despesas</button>
                    </div>
                </div>
                <ul className="no-transactions-list" >
                    <h3>Voce ainda nao possui nenhum lançamento</h3>
                    <svg width="562" height="88" viewBox="0 0 562 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="562" height="87.3519" rx="4" fill="#F8F9FA" />
                        <rect x="15.0535" y="24.7222" width="330.175" height="13.1852" fill="#E9ECEF" />
                        <rect x="15.0535" y="51.0925" width="76.2714" height="13.1852" fill="#E9ECEF" />
                    </svg>
                    <svg width="562" height="88" viewBox="0 0 562 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="562" height="87.3519" rx="4" fill="#F8F9FA" />
                        <rect x="15.0535" y="24.7222" width="330.175" height="13.1852" fill="#E9ECEF" />
                        <rect x="15.0535" y="51.0925" width="76.2714" height="13.1852" fill="#E9ECEF" />
                    </svg>
                    <svg width="562" height="88" viewBox="0 0 562 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="562" height="87.3519" rx="4" fill="#F8F9FA" />
                        <rect x="15.0535" y="24.7222" width="330.175" height="13.1852" fill="#E9ECEF" />
                        <rect x="15.0535" y="51.0925" width="76.2714" height="13.1852" fill="#E9ECEF" />
                    </svg>



                </ul>





            </div>

        )

    }
    return (
        <div className="main-transactions">

            <div className="list-header">
                <p>Resumo Financeiro</p>
                <div className="buttons-list">
                    <button onClick={() => { setFilter("Todos") }}>Todos</button>
                    <button onClick={() => { setFilter("entrada") }}>Entradas</button>
                    <button onClick={() => { setFilter("despesa") }}>Despesas</button>
                </div>
            </div>
            <ul className="transactions-list" >

                {transactions?.map((transaction, index) =>
                    <TransactionCard key={index} transaction={transaction} removeTransaction={removeTransaction} />
                )}
            </ul>





        </div>

    )
}

export default TransactionsList