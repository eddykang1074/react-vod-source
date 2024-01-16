
//step1:useState훅을 참조합니다.
import React,{useState} from 'react';

const UseStateSample = () => {

    //step2:상태관리 값을 정의하고 값을 초기화합니다.
    const [count,setCount] = useState(0);

    //증가처리 이벤트 핸들러
    const onIncrease=()=>{
        setCount(count+1);
    }

    //감소처리 이벤트 핸들러
    const onDecrease=()=>{
        setCount(count-1);
    }

    return (
        <div>
            <h1>카운터 상태값 표시:{count}</h1>

            <button onClick={onIncrease}>증가</button>
            <button onClick={onDecrease}>감소</button>
            
        </div>
    );
};

export default UseStateSample;