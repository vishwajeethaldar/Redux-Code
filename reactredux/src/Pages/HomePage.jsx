import React from 'react'
import { Navigate } from 'react-router-dom'
import { Navbar } from '../Components/Navbar'
import { Todo } from '../Todo/Todo'
import {useSelector} from 'react-redux'
export const HomePage = () => {
  const {auth, token} =  useSelector(store=>store.auth)

  if(!token){
    return <Navigate to="/login" replace={true} />
  }
  return (
    <div>
      <Navbar/>
        <Todo />
    </div>
  )
}
