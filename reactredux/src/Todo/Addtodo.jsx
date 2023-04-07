import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { addTodo, getTodo } from '../Store/actions';
export const Addtodo = () => {
  const dispatch = useDispatch()
  const [tododata, setTododata] =  useState({title:"", status:false});

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setTododata({...tododata, [name]:value})
  }

  const addnewTodo = ()=>{
    dispatch(addTodo(tododata));
    dispatch(getTodo());

  }

return (
    <div>
        <input name="title" onChange={handleChange} type="text" placeholder='add new todo'/> <button onClick={addnewTodo}> Add</button>
    </div>
  )
}
