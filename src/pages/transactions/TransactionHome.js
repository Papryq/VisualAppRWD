import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from "../../hooks/useCollection"

// styles
import './Transaction.css'

// components
import TransactionForm from './TransactionForm'
import TransactionList from './TransactionList'
import Sidebar from '../../components/Sidebar'

export default function Home() {
  const { user } = useAuthContext()
  const { documents, error } = useCollection(
    'transactions',
    ["uid", "==", user.uid],
    ["createdAt", "desc"]
    )

  return (
    <div>
      <Sidebar />
      <div className='flex contentTransaction p-10 max-md:grid max-md:grid-cols-1'>
        <div className='basis-1/3 bg-violet-500 p-4 text-white rounded-xl shadow-xl h-72 max-md:mb-16'>
          <TransactionForm  uid={user.uid} />
        </div>
        <div className='basis-2/3 bg-violet-500 p-4 rounded-xl shadow-xl mx-8 max-md:mx-0'>
          {error && <p>{error}</p>}
          {documents && <TransactionList transactions={documents} />}
        </div>
      </div>
    </div>
  )
}
