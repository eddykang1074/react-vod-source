import React,{useReducer} from 'react';

//리듀서 함수내에서 액션타입에 따른 로직을 하나의 함수에서 
//일괄 기능을 구현할수 있다.
//매번 이벤트핸들러를 각각 구현할 필요가 없음
function countReducer(state,action){
    switch(action.type){
        case "INCREASE":
            return state +1;
        case "DECREASE":
            return state-1;
        case "INIT":
            return 0;
        default:
            return state;//현재 상태값 반환
    }
}


const UseReducerSample = () => {


    const [count,dispatchCount] = useReducer(countReducer,0);


    return (
           <div>
            <h1>카운터 상태값 표시:{count}</h1>

            <button onClick={()=>dispatchCount({type:"INCREASE"})}>증가</button>
            <button onClick={()=>dispatchCount({type:"DECREASE"})}>감소</button>
            <button onClick={()=>dispatchCount({type:"INIT"})}>초기화</button>
            
        </div>
    );
};

export default UseReducerSample;