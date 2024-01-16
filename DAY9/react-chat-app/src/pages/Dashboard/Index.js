
import React,{useState} from 'react';

//현재사용자의 채팅대상목록 표시 화면 컴포넌트 참조하기 
import ChatLeftSidebar from "./ChatLeftSidebar";

//우측 사용자 채팅 메인 컴포넌트  참조하기 
import UserChat from "./UserChat/Index";

//connect 객체를 참조합니다.
//현재 화면 컴포넌트와 리덕스 전역상태 값을 연결해주는 객체입니다.
import { connect } from "react-redux";


const Index = (props) => {


    return (
        <React.Fragment>
            {/* 현재 사용자의 최근 채팅대상자 목록 표시 영역 */}
            <ChatLeftSidebar recentChatList={props.users} />

            {/* 채팅대상자 목록에서 현재 사용자가 선택한 단일 채팅방에 대한 실제 채팅화면영역 */}
            <UserChat recentChatList={props.users} />

        </React.Fragment>
    );

};


//리덕스 스토어에 저장된 전역상태값중에 특정 전역상태값을 현재 컴포넌트의 props에 추가해준다.
//추가된 props내 전역상태 데이터 속성을 통해 useSelector Hook사용하지 않고도 전역데이터를 호출해서 사용가능하다.
const mapStateToProps = state =>{
    const { users } = state.Chat;
    return {users};
}


//export default Index;

//connect(mapStateToProps, mapDispatchToProps)(현재컴포넌트지정);
//mapStateToProps :  store로부터 state를 가져와서 컴포넌트의 props로 보내게 해준다. 
//mapDispatchToProps를 통해 dispatch 훅처럼 특정 전역상태값을 변경해주는 액션함수를 props안에 추가해서 props액션함수를 실행할수 있습니다.
//mapDispatchToProps(액션함수지정),해당 액션함수를 컴포넌트 상단에서 참조해줘야합닏. 
export default connect(mapStateToProps,{})(Index);