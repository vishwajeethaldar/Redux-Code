import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoItems = ({todos=[], deleteTodo, updateStatus}) => {
   
  return (
    <div>
        <table border={"1px"} className={"todolist"}>
            <thead>
                <tr>
                    <th>Sr. </th>
                    <th>Title</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
              {todos?
                todos.map((todo,i)=>{
                    return <TodoItem sr={i+1} status={todo.status} todotitle={todo.title} id={todo.id} key={todo.id} deleteTodo={deleteTodo} updateStatus={updateStatus}/>
                })
              :console.log("wrong Number")}
              
            </tbody>
        </table>
    </div>
  )
}


