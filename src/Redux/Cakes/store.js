import { createStore } from 'redux'
import cakeReducer from './CakeReducer'

const store =  createStore(cakeReducer)
export default store

// creating a redux store and provide that toredux application using Provider