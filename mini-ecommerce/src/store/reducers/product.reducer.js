import {
    GET_PRODUCTS_PENDING, 
    GET_PRODUCTS_SUCCESS, 
    GET_PRODUCTS_REJECT
} from '../types/products.types';

const initalState = {
    products:[],
    totalPage:1,
    loading:false,
    error:false,
    errorMsg:""
}

export const productReducer = (state=initalState, {type, payLoad})=>{

    switch(type){
       
        case GET_PRODUCTS_PENDING:{
            return {
                ...state, 
                loading:true,
                error:false,
            }
        };

        case GET_PRODUCTS_SUCCESS:{
            return {
                ...state, 
                loading:false,
                error:false,
                products:payLoad.data,
                totalPage:payLoad.totalPages
            }
        };
        case GET_PRODUCTS_REJECT:{
            return {
                ...state, 
                loading:false,
                error:true,
            }
        };
        
        default:{
            return initalState;
        }
    }
}