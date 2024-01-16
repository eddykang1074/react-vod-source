//리듀서 함수는 실제 Store에 저장된 특정 전역데이터의 상태값을 관리해주는 함수기능제공
//할일목록 추가시 할일건수 전역데이터의 상태관리를 담당한다.

//STEP1)해당 리듀서 함수에서 사용할 액션타임 이름을 참조한다.
import { TODO_ADD } from "../../constants/actionTypes";


//STEP2)해당 리듀서 함수에서 관리하는 전역데이터의 구조와 기본값을 초기화 설정
//할일목록 카운트 전역데이터 관리를 위한 해당 리듀서함수가 관리할 실제 전역데이터 객체의 구조및 기본값 초기화
const INIT_STATE = {
    todoCount:0
}; 



//STEP3: 리듀서 함수 기능 정의 및 구현 
const  ToDo = (state=INIT_STATE,action) =>{
    switch(action.type){
        case TODO_ADD://리듀서 함수에 전달된 액션의 유형(이름)이 TODO_ADD 이면
            //할일목록 전역데이터의 todoCount속성값을 action에서전달된 payload객체내의 todoCount값으로 변경(업데이트)한다.
            return { ...state,todoCount:action.payload.todoCount};
        default:
            //액션타입이 지정안된경우는 기본적으로 store 현재저장된 할일목록 전역데이터(state)값을 반환합니다.
            return {...state};
    }
};

//Todo리듀서 함수를 외부로 노출한다.
export default ToDo;



