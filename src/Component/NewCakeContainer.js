import React, { useState } from 'react'
import { buyCakes } from '../Redux'
import { connect } from 'react-redux'

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h1>Numbers of Cakes - {props.numofCakes}</h1>
            <input type="text" value={number} onChange={e =>setNumber(e.target.value)} />
            <button onClick={() =>props.buyCake(number) }>Buy { number } Cake</button>
        </div>
    )
}

// this fun contains redux state as an parameter and return state object
// step:1
const mapStateToProps = (state) =>{
    return{
        numofCakes: state.cake.numofCakes
    }
}

// step:2
// mapDispatchToProps is map our dispatch of an anction creator to a props in our component
const mapDispatchToProps = (dispatch) =>{
    return{
        buyCake: (number) => dispatch(buyCakes(number))
    }
}

// buyCakes() import from ../Redux/Cakes/cakeActions

// connect this 2 function to react component(import connect from react-redux)
export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)
