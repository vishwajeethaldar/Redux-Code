
import {ADDJOBPENDING,
    ADDJOBSUCCESS,
    ADDJOBREJECTED,
    GETJOBLISTPENDING,
    GETJOBLISTSUCCESS,
    GETJOBLISTREJECTED
} from './type'

export const initialState = {
    loading:false,
    error:false,
    jobs:[]
}
export const jobpostreducer = (state=initialState, {type, payload})=>{

    switch(type){

        case ADDJOBPENDING :{
            return {...state, loading:true, error:false}
        }
        case ADDJOBSUCCESS:{
            return {...state, loading:false,error:false}
        }
        case ADDJOBREJECTED:{
            return {...state, loading:false,error:true}
        }
        case GETJOBLISTPENDING:{
            return {...state, loading:true, error:false}
        }
        case GETJOBLISTSUCCESS:{
            return {...state, loading:false,error:false,jobs:payload}
        }
        case GETJOBLISTREJECTED:{
            return {...state, loading:false,error:true}
        }
        default:{
            return state
        }
    }
}