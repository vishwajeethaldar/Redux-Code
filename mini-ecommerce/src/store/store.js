import thunk from "redux-thunk";
import { legacy_createStore, combineReducers, applyMiddleware  } from "redux"
import { productReducer } from "./reducers/product.reducer";
import { cartReducer } from "./reducers/cart.reducer";

const rootReducer =  combineReducers({
    product:productReducer,
    cart:cartReducer
})

export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk))