import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'

// styles
import './Login.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isPending } = useLogin()


  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }

  return (
    <div className='login bg-cover bg-center'>
      <div className='flex flex-col justify-center items-center w-screen h-screen backdrop-blur-sm'>
        <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-1 border-neutral-800" 
        >
          <h2 className='text-2xl pb-6'>Login</h2>
          <label className='labelStyle'>
            <span>Email: </span>
            <input 
            className='inputStyle'
            required
            type="email" 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
          </label>
          <label className='labelStyle'>
            <span>Password: </span>
            <input 
            className='inputStyle'
            required
            type="password" 
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />
          </label>
        {!isPending && <button className='btnSignup'>Login</button>}
        {isPending && <button className=''disabled>Loading...</button>}
        {error && <div className='error'>{error}</div>}
        </form>
      </div>
    </div>
  )
}
