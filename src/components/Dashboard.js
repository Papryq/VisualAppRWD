import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { useState } from 'react'


// styles and images
import './Dashboard.css'
import LogoIcon from '../assets/logo.png'
import TransactionIcon from '../assets/bill.png'
import CookingIcon from '../assets/cooking.png'
import ProjectIcon from '../assets/tasks.png'
import MemoryIcon from '../assets/memory.png'
import SettingsIcon from '../assets/settings.png'
import LightModeIcon from '../assets/lightmode.png'


export default function Dashboard() {
  const [isActive, setIsActive] = useState(false)
  const { user } = useAuthContext()
  const { logout, isPending } = useLogout()


    const handleClick = () => {
      setIsActive(!isActive)
    }


  return (
  <div className="relative min-h-screen md:flex">

  {/*  mobile menu bar  */}
  <div className="bg-violet-700 text-gray-100 flex justify-between md:hidden">
    {/*  logo  */}
      <Link to="dashboard" className="flex p-4 text-white font-bold"><img className='w-7 h-7 mr-2' src={LogoIcon}></img>VisualApp</Link>

      {/*  mobile menu button  */}
      <button onClick={() => handleClick()} className="p-4 focus:outline-none focus:bg-gray-700">
        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
  </div>

  {/*  sidebar  */}
  <div className={` bg-violet-700 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out ${isActive ? "-translate-x-full" : ""}`}>

    {/*  logo  */}
    <Link to="/dashboard" className="text-white flex items-center space-x-2 px-4">
      <span className="text-2xl font-extrabold">VisualApp</span>
    </Link>  

    {/*  nav  */}
    <nav>
      <Link to="" className="linkStyle">
        <span className='flex'><img className='w-7 h-7 mr-2' src={TransactionIcon}/>Transactions</span>
      </Link>
      <Link to="" className="linkStyle">
        <span className="flex"><img className='w-7 h-7 mr-2' src={ProjectIcon} />Project App</span>
      </Link>
      <Link to="" className="linkStyle">
        <span className="flex"><img className='w-7 h-7 mr-2' src={CookingIcon}/>Cooking Ninja
        </span>
      </Link>
      <Link to="" className="linkStyle">
      <span className="flex"><img className='w-7 h-7 mr-2' src={MemoryIcon}/>Memory Game
        </span>
      </Link>
    </nav>
    <div className='absolute bottom-2 left-40'>
      {user && (
        <div className='inline-block px-4'>
          {!isPending && <button onClick={logout}><Link to="/"><img className='w-6 h-6 ' src={SettingsIcon} alt="" /></Link></button>}
          {isPending && <button disabled>Logging out...</button>}
        </div>
      )}
    <div className="inline-block">
      <img className='w-6 h-6' src={LightModeIcon}  /></div>
    </div>
  </div>

  {/*  content  */}
  <div className="flex p-10 text-2xl font-bold">
    content goes here
  </div>

  </div>
  )
}