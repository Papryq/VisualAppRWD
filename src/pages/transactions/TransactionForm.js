import { useState, useEffect } from "react"
import { useFirestore } from '../../hooks/useFirestore'


export default function TransactionForm({ uid }) {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const { addDocument, response } = useFirestore('transactions')

    const handleSubmit = (e) => {
        e.preventDefault()
        addDocument({
            uid,
            name,
            amount
        })
    }

    //  reset the form fields
    useEffect(() => {
        if (response.success) {
            setName('')
            setAmount('')
        }
    }, [response.success])

  return (
      <>
        <h1 className="text-bold pb-2 my-1">Add a Transaction</h1>
        <form className="text-neutral-200" onSubmit={handleSubmit}>
            <label className="labelTransaction">
                <span>Transaction name:</span>
                <input 
                className='inputStyle'
                type="text"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
                />
            </label>
            <label className="labelTransaction">
                <span>Amount ($):</span>
                <input 
                className='inputStyle'
                type="number"
                required
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
                />
            </label>
            <button className="text-lg p-2 border-2 border-violet-700 my-4 bg-white rounded-lg text-black transition duration-300 ease-in-out hover:text-white  hover:bg-violet-400 hover:border-2 hover:border-violet-100">Add Transaction</button>
        </form>
      </>
  )
}
