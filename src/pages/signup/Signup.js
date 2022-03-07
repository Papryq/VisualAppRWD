import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

// styles
import './Signup.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [displayName, setDisplayName] = useState('')
  const { signup, isPending, error } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === repeatPassword) {
      signup(email, password, displayName, repeatPassword)
    } else {
      setPasswordError('Password doesn`t match')
    }
  }

  return (
  <div className="login bg-cover bg-center">
    <div
    className='flex flex-col justify-center items-center w-screen h-screen backdrop-blur-sm'
    >
      <form 
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-1 border-neutral-800 " 
      >
        <h2 className='text-2xl pb-6'>Signup</h2>
        <label
        className='labelStyle'
        >
          <span>Email: </span>
          <input 
          className='inputStyle'
          type="email" 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          />
        </label>
        <label
        className='labelStyle'
        >
          <span>Username:</span>
          <input 
          className='inputStyle'
          type="type"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
          />
        </label>
        <label
        className='labelStyle'
        >
          <span>Password:</span>
          <input 
          className='inputStyle'
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          />
        </label>
        <label className='labelStyle'>
          <span>Repeat password:</span>
          <input 
           className='inputStyle'
           type="password"
           onChange={(e) => setRepeatPassword(e.target.value)}
           value={repeatPassword}
          />
        {passwordError && <p className='text-red-400 text-xs font-light'>{passwordError}</p>}
        </label>
        {!isPending && <button className="btnSignup">Signup</button>}
        {isPending && <button className='btnSignup' disabled>loading</button>}
        {error && <p>{error}</p>}
      </form>
      <p className="text-center text-gray-500 text-xs">
    &copy;Paprykowe kody  
    </p>
    </div>
  </div>
  )
}
