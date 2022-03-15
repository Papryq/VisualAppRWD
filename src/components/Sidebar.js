import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'

// hooks
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import useOutsideClick from '../hooks/useOutsideClick'


// styles and images
import './Sidebar.css'
import LogoIcon from '../assets/logo.png'
import TransactionIcon from '../assets/bill.png'
import CookingIcon from '../assets/cooking.png'
import ProjectIcon from '../assets/tasks.png'
import MemoryIcon from '../assets/memory.png'
import SettingsIcon from '../assets/settings.png'
import LightModeIcon from '../assets/lightmode.png'
import SidebarArrow from '../assets/menu.png'



export default function Sidebar() {
  const [isActive, setIsActive] = useState(true)
  const [isOpened, setIsOpened] = useState(false)
  const { user } = useAuthContext()
  const { logout, isPending } = useLogout()

  const boxRef = useRef(null)
  // boxOutsideClick will be true on outside click
  const boxOutsideClick = useOutsideClick(boxRef)


  // switches classes from tranlate-x-full to tranlate-x-0, beacuse of this sidebar is closing and only thing is left is burger able to click and opens it again 
    const handleClick = () => {

      // show and hide sidebar
      setIsActive(!isActive)

      // moves burger to the right, turns off border
      setIsOpened(!isOpened)
    }


  return (

  <div className="fixed min-h-screen md:flex">

    {/*  sidebar  */}
    <div ref={boxRef} className={`bg-violet-700 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform md:relative transition duration-200 ease-in-out  ${isActive || boxOutsideClick ? "max-md:-translate-x-full" : "max-md:-translate-x-0"}`}>

      {/*  logo  */}
    <div className="text-white flex items-center px-4">
      <Link to="/dashboard" >
        <span className="flex text-2xl font-extrabold">
        <img 
          className='w-7 h-7 mr-2' 
          src={LogoIcon} 
          alt="AppIcon" 
        />VisualApp</span>
      </Link>  
      {/*  mobile menu button  */}
        <img ref={boxRef} 
          className={`w-8 h-8 hidden max-md:flex bg-violet-700 rounded border-2 
          ${isOpened ? "max-md:mx-14" : "max-md:mx-24"}
          ${boxOutsideClick ? "max-md:mx-24 bg-violet-700 rounded border-2 border-violet-400" : "border-0"}`} 
          onClick={() => handleClick()}
          src={SidebarArrow}
          alt="sidebar arrow" 
          />
    </div>

    {/*  nav  */}
    <nav>

      {/* Transactions link */}
      <Link 
        to="/transactions" 
        className="linkStyle btnSidebar"
      >
        <span className='flex'>
          <img 
            className='w-7 h-7 mr-2' 
            src={TransactionIcon} 
            alt="transAppIcon"
          />Transactions
        </span>
      </Link>

      {/* ProjectApp link */}
      <Link 
        to="projectapp" 
        className="linkStyle btnSidebar"
      >
        <span className="flex">
          <img 
            className='w-7 h-7 mr-2' 
            src={ProjectIcon} 
            alt="projectAppIcon"
          />Project App
        </span>
      </Link>

      {/* Cooking ninja link */}
      <Link 
        to="/cooking" 
        className="linkStyle btnSidebar"
      >
        <span className="flex">
          <img 
            className='w-7 h-7 mr-2' 
            src={CookingIcon} 
            alt="ninjaAppIcon"
          />Cooking Ninja
        </span>
      </Link>

      {/* memorygame link */}
      <Link 
        to="/memorygame" 
        className="linkStyle btnSidebar"
      >
        <span className="flex">
          <img 
            className='w-7 h-7 mr-2' 
            src={MemoryIcon} 
            alt="memoryAppIcon"
          />Memory Game
        </span>
      </Link>
    </nav>

    <div className='absolute bottom-2 left-40'>
      {user && (
        <div className='inline-block px-4 btnSidebar'>
          {!isPending && <Link to="/" onClick={logout}><img className='w-6 h-6 ' src={SettingsIcon} alt="" /></Link>}
          {isPending && <button to="/" disabled>Logging out...</button>}
        </div>
      )}
      <div className="inline-block btnSidebar">
        <img 
          className='w-6 h-6' 
          src={LightModeIcon}  
          alt="switchModeIcon"
          />
      </div>
    </div>
    </div>
  </div>
  )
}