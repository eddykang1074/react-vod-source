

//STEP1: 기 정의된 액션타입 이름을 참조합니다.
import { USER_LOGIN } from "../../constants/actionTypes";


//STEP2: 액션의 표준화된 기본형식을 정의한다.
//할일목록 건수 전역 데이터 관리를 위한 전용 액션타입정의 
//type LoginAction  = { type:string,payload:{} | string};


//STEP3: 액션 생성함수 정의 
export const userLogin = (userData) =>({
    type:USER_LOGIN,
    payload:userData
});

