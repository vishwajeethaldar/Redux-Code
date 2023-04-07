import {
    GET_PRODUCTS_PENDING, 
    GET_PRODUCTS_SUCCESS, 
    GET_PRODUCTS_REJECT,
    ADD_TO_CART
} from '../types/products.types';

import axios from 'axios';


export const getAllProducts = (page)=> async(dispatch)=>{
    dispatch({type:GET_PRODUCTS_PENDING})
    try{
       
        let responce =  await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=12&page=${page}`);

        dispatch({
            type:GET_PRODUCTS_SUCCESS,
            payLoad:responce.data
        })

    }
    catch(e){
        dispatch({
            type:GET_PRODUCTS_REJECT
        })
      
    }
}

