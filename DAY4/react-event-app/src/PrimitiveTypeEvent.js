import React,{useState} from 'react';

const PrimitiveTypeEvent = () => {

    const [userName,setUserName] = useState("");
    const [email,setEmail] = useState("");

    const handleUserName = (e)=>{
        setUserName(e.target.value);
    }

    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }


    const handleEnterSave =(e)=>{

        console.log("사용자 입력 키보드 이벤트 키값:",e.keyCode);

        if(e.keyCode === 13){
            console.log("엔터키 입력 이벤트가 발생했습니다.",e.keyCode);
        }

    }

    const handleSave =()=>{
        console.log("사용자 정보를 저장합니다.",userName);
        alert("저장완료!!");
    }


    const handleInit =()=>{
        setUserName("");
        setEmail("")
    }


    return (
        <div>

            <h1>원시타입 데이터 바인딩</h1>

            이름: <input type="text" name="userName" placeholder='사용자명' value={userName} onChange={handleUserName}/>

            <br></br>
            <br></br>

            메일주소:<input type="text" name="email" placeholder='메일주소' value={email} onChange={handleEmail} onKeyDown={handleEnterSave} />

            <hr></hr>

            <button onClick={handleSave}>저장</button>
            <button onClick={handleInit}>초기화</button>
            
        </div>
    );
};

export default PrimitiveTypeEvent;