import { Link } from 'react-router-dom'

import './Home.css'

export default function Home() {
  return (
        <div className="hero bg-cover bg-center">
            <div className='w-screen h-screen backdrop-blur-sm'>
                <ul className='flex justify-center md:justify-end'>
                    <li className='btn btnHover btnAnimation font-medium'>
                        <Link to="/login">Login</Link>
                    </li>
                    <li className=' btn btnHover btnAnimation font-medium'>
                        <Link to="/signup">Signup</Link>
                    </li>
                </ul>
                <div className=" mt-60 flex justify-center items-center text-center">
                    <div className='border-1 px-3 py-2 rounded-xl text-6xl text-neutral-100 bg-stone-800 border-neutral-100 btnAnimationHome max-md:text-4xl'>
                        <p className=''>Ucz się ucz</p>
                        <p className='py-1 '>Bo nauka</p>
                        <p className='pb-2'>To potęgi klucz</p>
                    </div>
                </div>
            </div>
        </div>
  )
}
