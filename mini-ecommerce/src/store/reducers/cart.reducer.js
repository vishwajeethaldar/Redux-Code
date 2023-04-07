import {
    ADD_PRODUCTS_TO_CART_PENDING,
    ADD_PRODUCTS_TO_CARTS_SUCCESS,
    ADD_PRODUCTS_TO_CART_REJECT,
    DELETE_PRODUCTS_TO_CART_REJECT,
    DELETE_PRODUCTS_TO_CART_PENDING,
    DELETE_PRODUCTS_TO_CART_SUCCESS
} from '../types/cart.types.js'


let initState= {
   cartItems:[],
   loading:false,
   error:false
}



export const cartReducer = (state=initState, {type, payLoad})=>{

    switch(type){
        case ADD_PRODUCTS_TO_CART_PENDING:{
            return {
                ...state,
                loading:true,
                error:false
            }
        };

        case ADD_PRODUCTS_TO_CARTS_SUCCESS:{
           let newx = state.cartItems.push({...payLoad, count:1})   
            return {
                ...state,
                loading:false,
                error:false,
                cartItems:[...state.cartItems, payLoad]
            }
 
        };
        case ADD_PRODUCTS_TO_CART_REJECT:{
            return {
                ...state,
                loading:false,
                error:true
            }
        };
        
        default :{
            return state
        }


    }

}