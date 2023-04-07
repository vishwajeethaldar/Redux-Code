import { legacy_createStore,combineReducers, applyMiddleware,  } from "redux";
import thunk from "redux-thunk";
import { jobpostreducer } from "./jobs/reducer";
const rootReducer = combineReducers({
    jobsreducer:jobpostreducer
})



const srore = legacy_createStore(rootReducer, applyMiddleware(thunk))

export default srore