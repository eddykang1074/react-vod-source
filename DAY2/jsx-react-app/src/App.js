
import React,{Fragment} from 'react';

import logo from './logo.svg';
import './App.css';

function App() {

  //P1:상수/변수를 정의하고 화면영역에 출력하기 
  const userName = "강창훈1";


  //P4:현재 컴포넌트에서만 사용하는 임베디드 스타일 정의하기 
  //스타일은 객체타입으로 정의합니다.
  const myStyle ={
    backgroundColor:"blue",
    color:"white",
    fontSize:"48px",
    fontWeight:"bold",
    padding:16,
  }

  return (

    // P7: JSX 영역 최상위 태그는 하나의 태그로 시작해야하지만 두개이상 하는경우는 Fragment를 이용하거난 <></>를 사용한다.
    <Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          {/* P1: 변수값 출력하기  */}
          <h3>현재 사용자는 {userName} 입니다.</h3>

          {/* P2:삼항연산자를 통해 화면영역에 제어구문 기반 데이터 출력하기  */}
          {
          
            userName === "강창훈" ?(
              <h4>{userName}님 반가워요.</h4>
            ):(
              <h4>게스트 팀 반가워요.</h4>
            )
          
          }


          {/* P3:태크에 바로 인라인 스타일 적용하기  */}
          <p style={{ backgroundColor:"blue",color:"red"}}>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          {/* P4:임베디드 방식으로 스타일 적용하기 */}
          <div style={myStyle}> 즐거운 리액트 코딩 시간 되세요.</div>


          {/* P5:스타일 파일의 정의된 클래스명 기반 스타일 적용하기  */}
          <div className="Sample">스타일 파일에 정의된 클래스를 이용해 스타일 적용하기</div>

          {/* P:6 JSX 홑태그 사용하기  */}
          <br></br>
          <br/>

          <img src={logo} alt="" style={{ width:"50px",height:"50px"}}/>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>




        </header>
      </div>

      <div style={{height:"100px",backgroundColor:"blue",textAlign:"center",fontSize:"20px"}}>최상위에 두개의 태그로 구성된 경우</div>
    </Fragment>

  );
}

export default App;
