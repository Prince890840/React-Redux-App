import React from 'react'
import { buyIceCream } from '../Redux'
import { connect } from 'react-redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h1>Numbers of IceCream - { props.numofIceCream }</h1>
            <button onClick={ props.buyIceCream }>Buy IceCream</button>
        </div>
    )
}

// this fun contains redux state as an parameter and return state object
// step:1
const mapStateToProps = (state) =>{
    return{
        numofIceCream: state.iceCream.numofIceCreams
    }
}

// step:2
// mapDispatchToProps is map our dispatch of an anction creator to a props in our component
const mapDispatchToProps = (dispatch) =>{
    return{
        buyIceCream: () => dispatch(buyIceCream())
    }
}

// buyIceCream() import from ../Redux/Cakes/IceCream/IceCreamAction

// connect this 2 function to react component(import connect from react-redux)
export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)
