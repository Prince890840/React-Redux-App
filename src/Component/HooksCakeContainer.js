import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { buyCakes } from '../Redux'

function HooksCakeContainer() {
    const numofCakes = useSelector(state => state.numofCakes)
    // Allows you to extract data from the Redux store state, using a selector function.
    //The selector is approximately equivalent to the mapStateToProps argument to connect conceptually. 
    // The selector may return any value as a result, not just an object. The return value of the selector will be used as the return value of the useSelector() hook.

    const dispatch = useDispatch()
    // it return the reference to the dispatch function from the redux store
    return (
        <div>
            <h1>NumbersOfCakes - {numofCakes}</h1>
            <button onClick={() =>dispatch(buyCakes())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer
