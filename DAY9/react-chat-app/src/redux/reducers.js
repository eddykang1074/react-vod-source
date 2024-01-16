//업무별로 만들어진 각종 리듀서 파일을 하나의 리듀서 모듈파일로 통합한다.


//각종 리듀서파일을 통합해주는 combineReducers함수를 참조한다.
import { combineReducers } from 'redux';

//./todos/reducer 해당 업무용 리듀서 파일에서 정의된 리듀서함수를 참조한다.
import Login from './auth/reducer';


import Layout from "./layout/reducer";


import Chat from "./chat/reducer";


export default combineReducers({
    Login,
    Layout,
    Chat
});