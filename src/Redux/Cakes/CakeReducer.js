// Reducer is a Function that accept the state and action as parameter and return new state

import { BUY_CAKES } from "./CakeTypes"

const initialState = {
    numofCakes: 10
}

const cakeReducer = (state = initialState,action)=>{
    switch(action.type){
        case BUY_CAKES: return{
            ...state,
            //  copy of an existing State
            numofCakes: state.numofCakes - action.payload
        }
        default: return state
    }
}

export default cakeReducer;