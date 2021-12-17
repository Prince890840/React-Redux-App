import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../Redux'

//  Concept of api end point and display fetch data in the UI.

function UserContainer({ userData , fetchUser }) {
    useEffect(() => {
        fetchUser()
    }, [])
    return userData.loading ? (
        <h1>loading</h1>
    ) : userData.error ? (
        <h1>{userData.error}</h1>
    ) : (
        <div>
            <h2>User List</h2>
            <div>
                { userData &&
                userData.users &&
                userData.users.map(user =><p>{user.name}</p>)}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: () => dispatch(fetchUsers())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)

/*Synchronous Action
-> As soon as an action was dispatched , the state was immediately updated.
-> if you dispatch the buy_cake action,the numofcakes was right away decrementated by 1.
-> Same with buy_icecreame action as well.

Asyncronous Action
-> Asyncronous APIs calls to fetch data from an end point and use that data i your application.
*/