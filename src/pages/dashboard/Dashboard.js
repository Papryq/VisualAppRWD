import { Link } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'

import './Dashboard.css'

export default function Dashboard() {
    const { user } = useAuthContext()
    const { logout, isPending } = useLogout()

  return (
  <div className="relative min-h-screen md:flex">

  {/* <!-- mobile menu bar --> */}
  <div className="bg-violet-700 text-gray-100 absolute inset-y-0 left-0 md:hidden">
    {/* <!-- logo --> */}
    <div className='flex'>
      <a href="#" className="block p-4 text-white font-bold">VisualApp</a>

      {/* <!-- mobile menu button --> */}
      <button className="p-4 focus:outline-none focus:bg-gray-700">
        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>

  {/* <!-- sidebar --> */}
  <div className=" bg-violet-700 text-blue-100 w-64 space-y-16 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">

    {/* <!-- logo --> */}
    <Link to="/dashboard" className="text-white flex items-center space-x-2 px-4">
      <span className="text-2xl font-extrabold">VisualApp</span>
    </Link>  

    {/* <!-- nav --> */}
    <nav>
      <Link to="" className="linkStyle">
        Home
      </Link>
      <Link to="" className="linkStyle">
        About
      </Link>
      <Link to="" className="linkStyle">
        Features
      </Link>
      <Link to="" className="linkStyle">
        Pricing
      </Link>
    </nav>
  {user && (
      <>
        {!isPending && <button onClick={logout}><Link to="/">Button</Link></button>}
        {isPending && <button disabled>Logging out...</button>}
      </>
  )}
  </div>

  {/* <!-- content --> */}
  <div className="flex-1 p-10 text-2xl font-bold">
    content goes here
  </div>

  </div>
  )
}
