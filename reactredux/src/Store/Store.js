import { combineReducers, legacy_createStore, applyMiddleware, compose  } from "redux";
import thunk from "redux-thunk"
import { authReducer } from "./auth/auth.reducer";
import { todoReducer } from "./todoReducer";



let rootReducer = combineReducers({
    todos:todoReducer,
    auth:authReducer
})

let createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose;
export const Store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)));