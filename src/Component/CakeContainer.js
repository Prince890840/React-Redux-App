import React from 'react'
import { buyCakes } from '../Redux'
import { connect } from 'react-redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Numbers of Cakes - {props.numofCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

// this fun contains redux state as an parameter and return state object
// step:1
const mapStateToProps = (state) =>{
    return{
        numofCakes: state.numofCakes
    }
}

// step:2
// mapDispatchToProps is map our dispatch of an anction creator to a props in our component
const mapDispatchToProps = (dispatch) =>{
    return{
        buyCake: () => dispatch(buyCakes())
    }
}

// buyCakes() import from ../Redux/Cakes/cakeActions

// connect this 2 function to react component(import connect from react-redux)
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
