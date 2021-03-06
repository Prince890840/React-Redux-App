import { combineReducers } from "redux";
import cakeReducer from "./Cakes/CakeReducer";
import IceCreamReducer from "./Cakes/IceCream/IceCreamReducer";
import userReducer from "./Users/UserReducer";

//combineReducer to here
// step: 1 import combinedReducer from redux and
// step: 2 make a function and pass to that
 
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: IceCreamReducer,
    user: userReducer
})

export default rootReducer