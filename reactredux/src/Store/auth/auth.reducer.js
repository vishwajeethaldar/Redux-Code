import {
AUTH_LOGIN_PROCESS,
AUTH_LOGIN_SUCCESS,
AUTH_LOGIN_ERROR,
AUTH_LOGOUT
}from './auth.action.type'

const intState ={
    isError:false,
    isLoading:false,
    auth:false,
    token:localStorage.getItem("token")||""
}

export const authReducer = (state=intState, {type, payload})=>{
    switch(type){
    
        case AUTH_LOGIN_PROCESS:
            return {
                ...state, isError:false, isLoading:true,
            }
        case AUTH_LOGIN_SUCCESS:
            localStorage.setItem("token", payload)
            return {
                ...state, isError:false, isLoading:false, token:payload,auth:true
            }   
        case AUTH_LOGIN_ERROR:
            return {
                ...state, isError:true, isLoading:false
            }
        case AUTH_LOGOUT:
            return {
                 ...state,token:"", auth:false
            }
    default:
        return state
    }
}