import logo from './logo.svg'
import './App.css'

//P1: 함수형 자식 컴포넌트와 클래스형 자식 컴포넌트를 참조하고 사용해보자
import MyComponent1 from "./MyFirstFunctionComponent";
import MyComponent2 from "./MyFirstClassComponent";

import MyProfile from "./MyProfile";


function App() {
    return (
        <div className="App">

            {/* P1:함수형/클래스형 컴포넌트를 표현한다. */}
            <MyComponent1></MyComponent1>
            <MyComponent2></MyComponent2>
            <hr></hr>

            {/* P2: 내소개 함수형컴포넌트에 props 정의하고 값 전달하기 */}
            <MyProfile userid="test" name="강창훈" email="eddy@test.co.kr" telephone="010-555-6666">
                내 프로필1
            </MyProfile>


        </div>
    )
}

export default App
