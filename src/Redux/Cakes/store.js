import { createStore , applyMiddleware } from 'redux'
import cakeReducer from './CakeReducer'
import rootReducer from '../rootReducer'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store =  createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))
//Middleware logs information related to redux store

// In Our Case app have 2 Middleware 1st is logger and 2nd is thunk

export default store

// creating a redux store and provide that toredux application using Provider