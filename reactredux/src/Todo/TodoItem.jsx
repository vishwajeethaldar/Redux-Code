import React from 'react'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { deleteTodo, getTodo, todoUpdate } from '../Store/actions';
export const TodoItem = ({sr, id, todotitle, status }) => {
  const dispatch = useDispatch();
  const updateStatus = ()=>{
      dispatch(todoUpdate(id, status))
  }
  
  const deleteTodoItem = ()=>{
    dispatch(deleteTodo(id))
  }
  return (
      <tr>
        <td> {sr}</td>
        <td> <Link to={`/todo/${id}`}>{todotitle} </Link></td>
        <td> {status?"Done":"Not Done"}</td>
        <td><button onClick={()=>updateStatus()}>{status?"Mark Done":"Mark Pending"} </button></td>
        <td><button onClick={()=>deleteTodoItem()}>Delete Todo</button></td>
      </tr>
  )
}
