import React from 'react'
import { useState } from 'react'
import { Navbar } from '../Components/Navbar'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { login } from '../Store/auth/auth.actions'
import {  Navigate, useNavigate } from 'react-router-dom'
export const Loginpage = () => {
   const dispatch  = useDispatch()
  const [userInfo, setUserInfo] = useState({email:"", password:""})
  const {auth, token} =  useSelector(store=>store.auth);
  const navigate = useNavigate()


  const handleChange=(e)=>{
      const {name, value} = e.target;
      setUserInfo({...userInfo, [name]:value
      })
  }
  const handleLogin = async(e)=>{
    e.preventDefault();
    dispatch(login(userInfo))
  }

  
if(token){
  return   <Navigate to="/" replace={true} />
}
  
  
  return (
    <div>
    
        <Navbar/>

        <div>
            <form onSubmit={handleLogin}>
                <input onChange={(e)=>handleChange(e)} value={userInfo.email} type="email" name="email"placeholder='email' />
                <input onChange={(e)=>handleChange(e)} value={userInfo.password} type="password" name='password' placeholder='password'/>
                <input  type="submit" value={"login"} password />
            </form>
        </div>
    </div>  
  )
}
