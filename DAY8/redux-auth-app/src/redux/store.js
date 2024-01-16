
import { configureStore} from '@reduxjs/toolkit';
//yarn add @reduxjs/toolkit -D
//yarn add redux-devtools-extension -D

import reducers  from './reducers';

import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import monitorReducersEnhancer from '../enhancers/monitorReducer'
import loggerMiddleware from '../middleware/logger'
import { composeWithDevTools } from 'redux-devtools-extension'


const middlewares = [loggerMiddleware, thunkMiddleware]
const middlewareEnhancer = applyMiddleware(...middlewares)
const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
const composedEnhancers = composeWithDevTools(...enhancers);


const store = configureStore({
    reducer:reducers,
    devTools:true,
    middleware: [loggerMiddleware],
    enhancers: [composedEnhancers]
});


export default store;
