import { BUY_ICECREAM } from "./IceCreamType";

// Reducer is a Function that accept the state and action as parameter and return new state

const initialState = {
    numofIceCreams: 20
}

const iceCreamReducer = (state = initialState,action) =>{
    switch(action.type){
        case BUY_ICECREAM :return {
            ...state,
            numofIceCreams: state.numofIceCreams - 1
        }
        default: return state
    }
}

export default iceCreamReducer