import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom"
import { TodoItem } from "./TodoItem"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { useEffect } from "react"
import { deleteTodo, getTodo, todoUpdate } from "../Store/actions"




export const SingleTodo = () => {
    const {todo} = useSelector((todos)=>todos.todos)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const params = useParams()
    const location = useLocation()

    const updateStatus = ()=>{
        dispatch(todoUpdate(todo.id, todo.status))
        dispatch(getTodo(todo.id))
    }
    
    const deleteTodoItem = ()=>{
      dispatch(deleteTodo(todo.id))
     return navigate("/")
    }



  useEffect(()=>{
    dispatch(getTodo(params.id))
    return ()=>  dispatch(getTodo());
  },[])
  return (
   <div className="Todo">
            <table  border={"1px"} className={"todolist"}>
            <thead>
                <tr>
                    <th>id </th>
                    <th>Title</th>
                    <th>Status</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody className="center">
            
                <tr>
                    <td> {todo.id}</td>
                    <td> {todo.title} </td>
                    <td> {todo.status?"Done":"Not Done"}</td>
                    <td><button onClick={()=>updateStatus()}>{todo.status?"Mark Done":"Mark Pending"} </button></td>
                    <td><button onClick={()=>deleteTodoItem()}>Delete Todo</button></td>
                </tr>

       
            </tbody>
            </table>
          
            <button onClick={()=>navigate(-1)}> Go Back</button>
   </div>
  )
}
