import React from 'react'
import  "./Style.css"
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { logout } from '../Store/auth/auth.actions'
export const Navbar = () => {
  const {auth, token} =  useSelector(store=>store.auth);
  const dispatch = useDispatch()
  return (
    <div className="Navbar" >
      <div>
      <Link to="/" className='link'>
        Home 
      </Link>
      </div>

      <div>
      {
      !token
      ?
      <Link to="/login" className='link'>
        Login
      </Link>
      :
      <p className='link' onClick={()=> dispatch(logout())}>
        Logout
      </p>
      
      }
     </div>

    </div>
      
      
 
  )
}
