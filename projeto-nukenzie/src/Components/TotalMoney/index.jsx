const TotalMoney = ({transactions}) =>  {

    //const totalAmount = transactions.reduce((prev, current) => prev + Number(current.amount))

    return(
        <div className="balance">
           <div className="balance-description">
            <span>Valor Total</span>
            <p>R$ 2500</p>
           </div>
           <p>O valor se refere ao saldo</p>
        </div>
    
    )
    }
    
    export default TotalMoney