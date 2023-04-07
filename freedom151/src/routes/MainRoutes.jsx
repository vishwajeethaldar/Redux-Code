import {Routes, Route} from 'react-router-dom'

import User from './User'
import Login from './Login'
import Data from './Data'
import Reports from './Reports'
import Home from './Home'

export default function MainRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/user'element={<User/>}> </Route>
        <Route path='/login'element={<Login/>}> </Route>
        <Route path='/data'element={<Data/>}> </Route>
        <Route path='/report'element={<Reports/>}> </Route>
    </Routes>
  )
}
