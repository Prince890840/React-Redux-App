import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../Redux'

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

