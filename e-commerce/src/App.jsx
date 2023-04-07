import { useState } from "react"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Products from "./components/Products"

function App() {
  const [token, setToken] = useState("")
  return (
    <div>
      <Navbar setToken={setToken}/>
      <Login token={token} setToken={setToken}/>

     <h2 style={{textAlign:"center"}}>
        {token&&token}
     </h2>
      {token&&<Products token={token}/>}
    </div>
  )
}

export default App
