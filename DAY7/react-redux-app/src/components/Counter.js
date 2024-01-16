import React,{useState} from 'react';

//useSelector 훅은 리덕스 스토어 전역데이터공간에 있는 특정 상태데이터를 선택하고 구독(Subscribe)기능을 제공함
import {useSelector} from 'react-redux';

const Counter = () => {

    //해당 컴포넌트에서만 사용하는 할일건수
    //const [todoCount,setTodoCount] = useState(10);

    //리덕스 리듀서 함수를 호출해서 스토어 전역공간에 특정 상태값을 호출합니다.
    const todoCount = useSelector((state)=>state.ToDo.todoCount);

    return (
        <div>
            <h1>전체 할일건수 : {todoCount} 건</h1>
        </div>
    );
};

export default Counter;
