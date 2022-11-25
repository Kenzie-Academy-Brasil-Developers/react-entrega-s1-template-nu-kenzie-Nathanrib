import { useState } from "react"



const FormTransactions = ({ addTransaction }) => {
    const [formData, setFormData] = useState(
        {
            description: '',
            type: 'entrada',
            amount: 0
        }
    )

    function submit(event) {
        event.preventDefault()
        addTransaction(formData)
        setFormData({
            description: '',
            type: 'entrada',
            amount: 0
        })
    }
    return (
        <form className="form" onSubmit={submit}>


            <div className="description-value">
                <label>Descrição</label>
                <input value={formData.description} type="text" onChange={(event) => setFormData({ ...formData, description: event.target.value })} />
                <p>Ex: Compra de roupas</p>
            </div>
            <div className="amount-and-type">
                <div className="amount">
                    <label>Valor</label>
                    <input value={formData.amount} type="number" onChange={(event) => setFormData({ ...formData, amount: event.target.value })} />
                </div>
                <div className="type-amount">
                    <label >Tipo de valor</label>
                    <select value={formData.type} onChange={(event) => setFormData({ ...formData, type: event.target.value })} >

                        <option value="entrada">Entrada</option>
                        <option value="despesa">Despesa</option>
                    </select>
                </div>
            </div>
            <button type="submit">Inserir Valor</button>
        </form>

    )
}

export default FormTransactions