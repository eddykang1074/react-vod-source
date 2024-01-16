//추가 패키지 설치필요 yarn add @reduxjs/toolkit -D

import { configureStore} from '@reduxjs/toolkit';

import { applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import monitorReducersEnhancer from '../enhancers/monitorReducer'

import loggerMiddleware from '../middleware/logger'
import { composeWithDevTools } from 'redux-devtools-extension'

//통합된 리듀서 기능 참조
import reducers  from './reducers';

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

