import React from 'react'
import { connect } from 'react-redux' 
import { buyCakes, buyIceCream } from '../Redux'

// mapStateToProps Concept illustrate

function ItemContainer(props) {
    return (
        <div>
            <h1>Item - {props.item}</h1>
            <button onClick={props.buyItem}>Buy Item</button>
        </div>
    )
}

const mapStateToProps = (state,ownProps) =>{
    const itemState = ownProps.cake
     ? state.cake.numofCakes 
     : state.iceCream.numofIceCreams

    return{
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCakes())
    : () => dispatch(buyIceCream())

    return{
        buyItem: dispatchFunction
    }
}

export default connect(
    null,
    mapStateToProps,
    mapDispatchToProps
    )(ItemContainer)
