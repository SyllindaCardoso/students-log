import { createStore, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk'; 
import logger from 'redux-logger'; 
import rootReducer from '../src/Reducers/RootReducer'; 

export default 
createStore(
        rootReducer, 
        applyMiddleware(thunk, logger)
    )
    