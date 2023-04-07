import { Route, Routes } from "react-router-dom"
import { HomePage } from "../Pages/HomePage"
import { Loginpage } from "../Pages/Loginpage"
import { SingleTodoPage } from "../Pages/SingleTodoPage"



export const MainRouter = () => {
  
  return (
    <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<Loginpage />}/>
        <Route path="/todo/:id" element={<SingleTodoPage/>} />
    </Routes>
  )
}
