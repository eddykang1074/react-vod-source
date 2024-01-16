import React,{useState,useRef} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const Entry = () => {

    const [member,setMember] = useState({
        email:"",
        password:"",
        name:""
    });

    //ui유효성검사를 위한 refHook정의 
    const refEmail = useRef();
    const refPassword = useRef();
    const refName = useRef();

    //페이지 이동처리를 위한 useNavigate 훅 사용
    const navigate = useNavigate();


    const handleMember =(e)=>{
        setMember({...member,[e.target.name]:e.target.value});
    }

    const handleSave =()=>{
        
        axios.post('http://localhost:3005/api/member/entry',member)
        .then((res)=>{
            console.log("회원가입 백엔드 API 호출결과:",res.data);
            navigate('/login');
        }).catch((err)=>{

        });
    }

    return (
        <div>
            <h1>신규회원가입 페이지 </h1>

            메일주소: <input type="text" name="email" value={member.email} onChange={handleMember} /><br/>
            암호:<input type="password" name="password" value={member.password} onChange={handleMember} /><br/>
            이름:<input type="text" name="name" value={member.name} onChange={handleMember} /><br/>
            <button onClick={handleSave}>회원가입</button>
        </div>
    );


};

export default Entry;