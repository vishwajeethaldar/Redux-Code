import { useEffect, useState } from "react"
import { Addtodo } from "./Addtodo"
import { TodoItems } from "./TodoItems"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { getTodo } from "../Store/actions"
import '../Components/Style.css'
export const Todo = () => {
   const {isError,isLoading,todos=[]}=  useSelector((store)=>store.todos)

const dispatch = useDispatch()





  useEffect(()=>{
    dispatch(getTodo())
  },[])

  return (
    <div className="Todo">
        <h1> Todos </h1>
        <div>
            <Addtodo/>
        </div>

    <div>
        <TodoItems  todos={todos}/>
    </div>
    </div>
  )
}
