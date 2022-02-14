import React, { useState } from 'react'
import { useAuth } from './auth'
import { useNavigate, useLocation } from 'react-router-dom'

export const Login = () => {
  const [user, setUser] = useState('')
  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const redirectPath = location.state?.path || '/'

  const handleLogin = () => {
    auth.login(user)
    //  navigate('/' , { replace: true })
    navigate(redirectPath, { replace: true })
  }
  return (
    <div>
      <div>
        <label> UserName : </label>
        <input type='text' onChange={e => setUser(e.target.value)}></input>
      </div>
      <div>
        <button type='button' onClick={handleLogin}>
          Log-In
        </button>
      </div>
    </div>
  )
}
