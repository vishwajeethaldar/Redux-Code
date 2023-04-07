import React from 'react'
import { createContext } from 'react'
const AuthCon = createContext(null)

export default function AuthContext({child}) {
    
  return (
    <AuthCon.Provider>AuthContext</AuthCon.Provider>
  )
}
