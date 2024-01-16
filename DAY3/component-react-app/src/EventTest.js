import React,{useState} from 'react';



const EventTest = () => {

    //메시지 상태 데이터 
    const [message, setMessage] = useState("");

    //메시지 입력시 마다 변경된 데이터가 전달되어 setMessage 함수를 통해 값이 변경적용됩니다.
    const handleMessage =(e)=>{
        setMessage(e.target.value);
    }

    //초기화 버튼 클릭시 setMessage("")를 호출해서 빈 문자열 값으로 초기화한다.
    const handleInit =(e)=>{
        setMessage("");
    }


    return (
        <div>
            <input type ="text" name="message" placeholder='메시지' value={message} onChange={handleMessage} />

            <button onClick={handleInit}>초기화</button>

        </div>
    );
};

export default EventTest;