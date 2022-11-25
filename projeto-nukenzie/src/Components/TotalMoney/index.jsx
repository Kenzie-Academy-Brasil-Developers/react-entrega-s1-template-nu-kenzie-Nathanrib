const TotalMoney = ({ transactions }) => {

    const amountList = transactions?.map((element) => {
        if (element.type === "despesa") {
            return Number(element.amount) * -1
        } else {
            return Number(element.amount)
        }

    })


    const totalAmount = amountList.reduce((previousValue, element) => {
        return previousValue + element

    })


    return (
        <div className="balance">
            <div className="balance-description">
                <span>Valor Total</span>
                <p>${totalAmount}</p>
            </div>
            <p>O valor se refere ao saldo</p>
        </div>

    )
}

export default TotalMoney