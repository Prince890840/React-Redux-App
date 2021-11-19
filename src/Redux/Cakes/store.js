import { createStore , applyMiddleware } from 'redux'
import cakeReducer from './CakeReducer'
import rootReducer from '../rootReducer'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

const store =  createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)))
//Middleware logs information related to redux store

export default store

// creating a redux store and provide that toredux application using Provider