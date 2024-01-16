

import {USER_LOGIN,USER_INFO} from '../../constants/actionTypes';

//전역데이터공간의 데이터 구조와 기본값 설정
const INIT_STATE ={
    token:"",
    userInfo:{}
};

//로그인액션함수의 타입정의 
//type LoginAction = {type:String,payload:{} |string};

//화면에서 전달되는 매개변수의 타입과 기본값을 지정할떄 사용
//type State ={ token?:"" | null};


//Login 리듀서함수를 통해 전역데이터 공간의 데이터를 관리한다.
const Login = (state=INIT_STATE,action)=>{
    switch(action.type){
        case  USER_LOGIN:
            return {...state,token:action.payload.userToken};
        case  USER_INFO:
                return {...state,userInfo:action.payload.userInfo};
        default:
            return {...state};

    }
}


export default Login;


