import axios from "axios";
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./UserType";

export const fetchUsers = () =>{
    return(dispatch)=>{
        dispatch(fetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response =>{
                // response.data is the users
                const users = response.data
                dispatch(fetchUserSuccess(users))
            })
            .catch(error =>{
                // error.message is the error message
                const errorMsg = error.message
                dispatch(fetchUserFailure(errorMsg))
            })
    }
}

export const fetchUserRequest = () =>{
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUserSuccess = (users) =>{
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUserFailure = (error) =>{
    return{
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}