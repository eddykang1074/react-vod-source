import React,{useState,useRef} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


//useDispatch를 통해 전역공간데이터를 수정한다.
import {useDispatch} from 'react-redux';

//dispatch는 참조한 액션함수를 호출해서 데이터전달하고 전역공간의 데이터를 해당 reducer 함수를 통해 수정한다.
import { userLogin} from '../../redux/actions';


const Login = () => {

    const globalDispatch = useDispatch();

    const [member,setMember] = useState({
        email:"",
        password:""
    });

    //ui유효성검사를 위한 refHook정의 
    const refEmail = useRef();
    const refPassword = useRef();


    //페이지 이동처리를 위한 useNavigate 훅 사용
    const navigate = useNavigate();


    const handleMember =(e)=>{
        setMember({...member,[e.target.name]:e.target.value});
    }

    const handleLogin =()=>{


        if(member.email === ""){
            alert("메일주소를 입력해주세요.");
            refEmail.current.focus();
            return false;
        }

        if(member.password === ""){
            alert("암호값을 입력해주세요.");
            refPassword.current.focus();
            return false;
        }
        
        axios.post('http://localhost:3005/api/member/login',member)
        .then((res)=>{
            console.log("로그인 백엔드 API 호출결과:",res.data);

            //사용자 웹브라우저의 로컬스토리지 공간에 키/값형태로 저장합니다.
            //window.localStorage.setItem("token",res.data.data);

            //dispatch함수를 통해 로그인전역공간의 토큰정보를 업데이트(저장)한다.
            globalDispatch(userLogin(res.data.data));


            if(res.data.code === "200"){
                navigate('/profile');
            }else{
                console.log("호출에러 발생",res.data.result);
            }
       
        }).catch((err)=>{

        });
    }



    return (
        <div>
            <h1>로그인 페이지 </h1>
            메일주소: <input type="text" name="email" ref={refEmail} value={member.email} onChange={handleMember} /><br/>
            암호:<input type="password" name="password" ref={refPassword} value={member.password} onChange={handleMember} /><br/>
            <button onClick={handleLogin}>로그인</button>
        </div>
    );
};

export default Login;