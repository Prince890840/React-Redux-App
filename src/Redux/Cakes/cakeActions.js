import { BUY_CAKES  } from "./CakeTypes"

// This calles export Action Creator
export const buyCakes = (number = 1) =>{
    return{
        type: 'BUY_CAKES',
        payload: number
    }
}
