import React,{useState,useEffect} from 'react';
import axios from 'axios';


//전역데이터 공간에 저장된 값을 Subscribe하기 위해 useSelector훅을 참조합니다.
import { useSelector } from 'react-redux';



const Profile = () => {

    const token = useSelector((state)=>state.Login.token);
    console.log("전역 데이터에 저장되어 있는 jwt사용자인증토큰값 조회:",token)

    const [member,setMember] = useState({email:"",name:""});

    useEffect(()=>{
        //웹브라우저에 저장된 토큰값 조회 
        //var token = window.localStorage.getItem("token");

        axios.get('http://localhost:3005/api/member/profile',{
            headers:{Authorization:`Bearer ${token}`}
        }).then((res)=>{
            console.log("프로필정보 조회결과: ",res.data);
            setMember(res.data.data);
        })
        .catch();

    },[]);


    return (
        <div>
            <h1>로그인 사용자 프로필 정보 확인</h1>
            메일주소:{member.email}<br/>
            이름:{member.name}
        </div>
    );
};

export default Profile;