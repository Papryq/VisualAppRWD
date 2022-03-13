import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from "../../hooks/useCollection"

// styles
import styles from './TransactionHome.module.css'

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
      <div className={styles.container}>
        <div className={styles.content}>
          {error && <p>{error}</p>}
          {documents && <TransactionList transactions={documents} />}
        </div>
        <div className={styles.sidebar}>
          <TransactionForm  uid={user.uid} />
        </div>
      </div>
    </div>
  )
}
