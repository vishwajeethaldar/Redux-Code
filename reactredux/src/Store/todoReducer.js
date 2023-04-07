import { ACTIONS } from "./actions";
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

const iniState={
    todos:[],
    todo:{},
    isError:false,
    isLoading:false
}

export const todoReducer=(state=iniState, {type, payload})=>{
    switch(type){
        case TODO_GET_POCESS:
            return {
                ...state, isError:false, isLoading:true
            }
        case TODO_GET_SUCCESS:
            if(payload.id){
                return {...state, todo:payload.data, isError:false,isLoading:false}
            }else{
                return {...state, todos:payload, isError:false,isLoading:false}   
            }
                    
        case TODO_GET_ERROR:
            return {
                ...state, isError:true, isLoading:false
            }
        case TODO_POST_POCESS:
            return{
                ...state, isLoading:true, isError:false
            }
        case TODO_POST_SUCCESS:
            return{
                ...state, isLoading:false, isError:false
            }
        case TODO_POST_ERROR:
            return {
                ...state, isLoading:false, isError:true 
            }
        case TODO_DELETE_POCESS:
            return{
                ...state, isLoading:true, isError:false
            }
        case TODO_DELETE_SUCCESS:
            return{
                ...state, isLoading:false, isError:false
            }
        case TODO_DELETE_ERROR:
            return {
                ...state, isLoading:false, isError:true 
            }
        case TODO_UPDATE_POCESS:
            return{
                ...state, isLoading:true, isError:false
            }
        case TODO_UPDATE_SUCCESS:
            return{
                ...state, isLoading:false, isError:false
            }
        case TODO_UPDATE_ERROR:
            return {
                ...state, isLoading:false, isError:true 
            }
        default :
        return state;
        }
}