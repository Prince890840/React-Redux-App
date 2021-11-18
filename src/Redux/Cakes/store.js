import { createStore } from 'redux'
import cakeReducer from './CakeReducer'
import rootReducer from '../rootReducer'

const store =  createStore(rootReducer)

export default store

// creating a redux store and provide that toredux application using Provider