import {ADDJOBPENDING,
    ADDJOBSUCCESS,
    ADDJOBREJECTED,
    GETJOBLISTPENDING,
    GETJOBLISTSUCCESS,
    GETJOBLISTREJECTED
} from './type'

import axios from 'axios'

export const addnewPost = (postData)=> async (dispatch)=>{
    dispatch({type:ADDJOBPENDING, payload:""})
    try{
        let res = await axios.post("https://wonderful-crocus-rail.glitch.me/jobs", postData) 
        console.log(res);
        return  dispatch({type:ADDJOBSUCCESS, payload:res.data})
    }catch(e){
        console.log(e);
        return dispatch({type:ADDJOBREJECTED, payload:e})
    }
}


export const getAllPost = ()=> async (dispatch)=>{
    dispatch({type:GETJOBLISTPENDING, payload:""})
    try{
        let res = await axios.get("https://wonderful-crocus-rail.glitch.me/jobs") 
        return  dispatch({type:GETJOBLISTSUCCESS, payload:res.data})
    }catch(e){
        return dispatch({type:GETJOBLISTREJECTED, payload:e})
    }
}

