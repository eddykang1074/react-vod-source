import React,{useState} from 'react';

const CounterFuntionComponent = () => {

    //useState(100)초기 카운트 값을 100으로 설정하고
    //count라는 상태값을 정의합니다
    const [count,setCounter] = useState(100);

    //사용자 이름 저장 상태값
    const [userName,setUserName] = useState("강창훈");

    //1증가처리 이벤트 핸들러 함수 
    const handleIncrease =()=>{
        setCounter((prevCount)=> prevCount +1);
    }


    //1감소처리 이벤트 핸들러 함수 
    const handleDecrease = ()=>{
        setCounter((prevCount) => prevCount -1);
    }

    return (
        <div>
            <h1>카운터 상태값 표시:{count}</h1>
            <button onClick={handleIncrease}>1증가</button>
            <button onClick={handleDecrease}>1감소</button>
        </div>
    );
};

export default CounterFuntionComponent;