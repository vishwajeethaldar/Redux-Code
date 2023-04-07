import React from 'react'
import { useState } from 'react'
import style from '../styles/Login.module.css'
import axios from 'axios'
import { useEffect } from 'react'
export default function Login({token, setToken}) {
  const [cred, setCred] =  useState({email:"", password:""})

  const updateChange = (e)=>{
    const {name, value} =  e.target
    setCred({...cred,[name]:value})
   
  }

  const loginUser =async()=>{
        let res = await axios.post('https://reqres.in/api/login', cred)
        setToken(res.data.token)
        setCred({email:"", password:""})
  }



  useEffect(()=>{
    if(token){

    }
  },[token])


  return (
    <div className={style.Logincontiner}>
      <input  onChange={updateChange} name="email" value={cred.email} type={"text"} placeholder={"Email"}/>
      <input onChange={updateChange}  name="password" value={cred.password} type={"text"} placeholder={"password"}/>
      <button onClick={loginUser}> Login </button>
    </div>
  )
}
