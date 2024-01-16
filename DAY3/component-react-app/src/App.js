import logo from './logo.svg';
import './App.css';

//내소개 자식 컴포넌트 참조하기 
import MyProfile from "./MyProfile";

//카운터 함수형 컴포넌트 참조하기 
import Counter1 from './CounterFuntionComponent';

//카운터 클래스 컴포넌트 참조하기
import Counter2  from './CounterClassComponent';


//이벤트 기초 테스트 컴포넌트 참조 
import EventTest from './EventTest'


function App() {
  return (
    <div className="App">
    
      {/* <MyProfile userid="test1" name="강창훈1" email="eddy@msoftware.co.kr" telephone="010-2760-5246" age={50}>
        My Proile
        <h3>내 소개하기</h3>
      </MyProfile> */}

      {/* 카운터 함수형 컴포턴트 */}
      <Counter1></Counter1>

      {/* 카운터 클래스 컴포넌트  */}
      <Counter2></Counter2>


      {/* 이벤트 기초 테스트  */}
      <EventTest></EventTest>

    </div>
  );
}

export default App;
