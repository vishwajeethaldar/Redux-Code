import {
    ADD_PRODUCTS_TO_CART_PENDING,
    ADD_PRODUCTS_TO_CARTS_SUCCESS,
    ADD_PRODUCTS_TO_CART_REJECT,
} from '../types/cart.types.js'

export const addToCart = (item)=>async(dispatch)=>{
    dispatch({type:ADD_PRODUCTS_TO_CARTS_SUCCESS, payLoad:item})
}