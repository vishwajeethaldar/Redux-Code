import axios from 'axios'
import {
    TODO_GET_POCESS,
TODO_GET_SUCCESS,
TODO_GET_ERROR,
TODO_POST_POCESS,
TODO_POST_SUCCESS,
TODO_POST_ERROR,
TODO_DELETE_POCESS,
TODO_DELETE_SUCCESS,
TODO_DELETE_ERROR,
TODO_UPDATE_POCESS,
TODO_UPDATE_SUCCESS,
TODO_UPDATE_ERROR,
} from './action.type'


export const addTodo=(todo)=>async(dispatch)=>{
    dispatch({type:TODO_POST_POCESS})
    try{
        let res = await axios.post("http://localhost:8000/todos", todo)
         dispatch({type:TODO_POST_SUCCESS})
    }catch(e){
        dispatch({type:TODO_POST_ERROR})
    }
}

export const getTodo  = (id) =>async(dispatch)=>{
    dispatch({type:TODO_GET_POCESS})
    try{
     if(id){
        let res = await axios.get(`http://localhost:8000/todos/${id}`)  
        dispatch({type:TODO_GET_SUCCESS, payload:{id:id, data:res.data}})
        return res.data
     }else{
        let res = await axios.get("http://localhost:8000/todos")  
        dispatch({type:TODO_GET_SUCCESS, payload:res.data})
        return res.data
     }
    }catch(e){
        dispatch({type:TODO_GET_ERROR})
    }
}


export const deleteTodo  = (id) =>async(dispatch)=>{
    dispatch({type:TODO_DELETE_POCESS})
    try{
      let res = await axios.delete(`http://localhost:8000/todos/${id}`)  
      dispatch({type:TODO_DELETE_SUCCESS})
      dispatch(getTodo())
      return res.data
    }catch(e){
        dispatch({type:TODO_DELETE_ERROR})
    }
}

export const todoUpdate  = (id, status) =>async(dispatch)=>{
    dispatch({type:TODO_UPDATE_POCESS})
    try{
      let res = await axios.patch(`http://localhost:8000/todos/${id}`,{status:status?false:true})  
        dispatch({type:TODO_UPDATE_SUCCESS})
        dispatch(getTodo())
        dispatch(getTodo(id))     
      return res.data
    }catch(e){
        dispatch({type:TODO_UPDATE_ERROR})
    }
}