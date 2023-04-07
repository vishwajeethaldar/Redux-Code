import axios from 'axios'
import {
    AUTH_LOGIN_PROCESS,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_ERROR,
    AUTH_LOGOUT
}from './auth.action.type'


export const login = (cred)=>async(dispacth)=>{
    dispacth({type:AUTH_LOGIN_PROCESS})
    try{
        let res = await axios.post("https://reqres.in/api/login",cred);
        dispacth({type:AUTH_LOGIN_SUCCESS, payload:res.data.token}) 
        return res.data
    }catch(e){
        dispacth({type:AUTH_LOGIN_ERROR})
    }
}

export const logout = ()=>{
    return ({type:AUTH_LOGOUT})
}