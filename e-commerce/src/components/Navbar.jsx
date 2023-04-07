import React from 'react'
import style from '../styles/Navbar.module.css'
export default function Navbar({setToken}) {
  const logoutUser = ()=>{  
    setToken("")
  }
  return (
   <>
    <div className={style.navbar}>
      <h2>Single Page E-commerce App</h2>
      <div className={style.logout}>
        <button onClick={logoutUser}> Logout </button>
      </div>
    </div>
   
  </>
  )
}
