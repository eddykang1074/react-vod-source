import React,{useState,useEffect} from 'react';

const UseEffectSample = () => {

    const [user,setUser]= useState({name:"",nickName:"",email:""});

    const handleUserInfo =(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }


    //Case1: 최초로 해당 컴포넌트가 렌더링될떄 최초1회발생
    //useEffect('실행함수','빈배열')
    useEffect(()=>{
        //최초로 현재 컴포넌트 렌더링 될떄 실행해야하는 로직을 여기에 구현합니다.
        console.log("프로필 소개 컴포넌트가 최초로 로딩되었습니다.");
    },[]);


    //Case2: 화면내의 각종 렌더링이 발생할때마다 특정 로직을 실행시키고 싶은경우..
    useEffect(()=>{
        console.log("화면이 다시 그려질떄마다 실행됩니다.");   

        //cleanup 함수를 정의하고 실행할수 있다.
        return ()=>{
            console.log("clean up........");
        }
    });



    //Case3:특정 데이터 상태가 변경될떄마다  특정로직을 실행시키고 싶은경우
    useEffect(()=>{ 
        console.log("user객체 데이터가 변경되어 UI가 렌더링 될떄마다 실행됩니다.",user);

        //cleanup 함수를 정의하고 실행할수 있습니다.
        //데이터가 변경되기전의 값이 출력됩니다..
        return ()=>{
            console.log("clean up..............",user);
        }
    },[user]);


    return (
        <div>
            <h1>사용자 정보 입력영역</h1>
            <input value={user.name} name="name" onChange={handleUserInfo} />
            <input value={user.nickName} name="nickName" onChange={handleUserInfo} />
            <input value={user.email} name="email" onChange={handleUserInfo} />

            <h1>사용자 정보 출력영역</h1>
            <div>이름:{user.name}</div>
            <div>닉네임:{user.nickName}</div>
            <div>메일주소:{user.email}</div>

        </div>
    );
};

export default UseEffectSample;