import { useFirestore } from '../../hooks/useFirestore'

// styles
import './Transaction.css'

export default function TransactionList({ transactions }) {
    const { deleteDocument } = useFirestore('transactions')

  return (
      <ul className='text-white font-bold max-md:w-64'>
          {transactions.map((transaction) => (
              <li className='flex relative text-2xl py-2 w-full border-b mb-2 max-md:text-xl' key={transaction.id}>
                  <p className='w-full px-8 mt-2 max-md:p-0'>{transaction.name}</p>
                  <p className='mt-2 px-8'>${transaction.amount}</p>
                  <button className='absolute top-0 right-0 my-0' onClick={() => deleteDocument(transaction.id)}>x</button>
              </li>
          ))}
      </ul>
  )
}
