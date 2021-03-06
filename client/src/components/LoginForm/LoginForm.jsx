import React, { useState, useContext} from 'react';
import {Link, Redirect} from 'react-router-dom'
import "./LoginForm.css"
import { signIn } from "../../services/users"
import { UpdateUserContext } from '../../components/LoginUser/LoginUserContext'

function LoginForm(props) {
  const updateUser = useContext(UpdateUserContext)
  const [userInfo, setUserInfo] = useState({ email: "", password: "" })

  const [isLoggedIn, setLoggedIn] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    })
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let user = await signIn(userInfo)
      let localUser = JSON.stringify(user)
      localStorage.setItem('localUser', localUser)
      updateUser(user)
    } catch(error) {
      throw error
    }
    setLoggedIn(true)
  };

  if (isLoggedIn) {
    return <Redirect to={"/dashboard"} />
    }

  return (
    <div className='Login-container'>
    <Link to='/signup'>
        <button className="basic-button" type='submit'>Signup</button>
    </Link>
      <form onSubmit={handleSubmit} className='login-form'>
        <label className="sign-l-name" htmlFor="email">Email</label>
        <input onChange={handleChange} value={userInfo.email} type='text' className="login-email" placeholder='Enter Email' name='email' />
        <label className="sign-l-name" htmlFor="password">Password</label>
        <input onChange={handleChange} value={userInfo.password} type='password' className='login-password' placeholder='Enter Password' name='password' />
        <button className="basic-button" type='submit'>Login</button>
        </form>
    </div>
  );
}

export default LoginForm;