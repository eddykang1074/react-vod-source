import React,{useState} from 'react';

const ReferTypeEvent = () => {

    //사용자 정보를 참조유형(객체)타입으로 정의하기 
    const [user,setUser] = useState({
        userName:"",
        email:""
    });


    const handleUserInfo =(e)=>{

        //참조타입 불변성 이슈발생: 화면이 렌더링 되지 않음
        //이전 사용자 객체의 해당 속성의 값을 현재 입력한 값으로 변경했으나..실제 화면은 변경 렌더링이 발생하지 않습니다.
        // setUser((preUser)=>{
        //     preUser[e.target.name] = e.target.value;
        //     return preUser;
        // });


        //신규 객체를 정의하고 값을 할당한다.
        // setUser({
        //     [e.target.name]:e.target.value
        // });

        //기존 객체의 복사본을 만들어서 setter함수의 객체값으로 전달한다.
        // const newUser = {...user,[e.target.name]:e.target.value};
        // setUser(newUser);

        //user객체의 복사본(얕은복사-스왈로우 카피)를 만들고 새로운 복사본을 settter의 값으로 할당하여 리액트에서 값이 변경된것을 인지시켜준다.
        setUser({...user,[e.target.name]:e.target.value});

    }



    return (
        <div>

                <h1>참조타입 데이터 바인딩</h1>

                이름: <input type="text" name="userName" placeholder='사용자명' value={user.userName}  onChange={handleUserInfo}/>

                <br></br>
                <br></br>

                메일주소:<input type="text" name="email" placeholder='메일주소' value={user.email}  onChange={handleUserInfo}  />

                <hr></hr>

                {/* <button onClick={handleSave}>저장</button>
                <button onClick={handleInit}>초기화</button> */}


            
        </div>
    );
};

export default ReferTypeEvent;