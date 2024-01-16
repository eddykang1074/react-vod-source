import React,{useState,useEffect} from 'react';

import {connect} from 'react-redux';

//전역 상태관리 영역의 메시지 전송 및 수신관련 액션함수 참조하기 
import { setReceiveMessage } from '../redux/actions';

//좌측 메뉴바 컴포넌트 참조 
import LeftSidebarMenu from "./LeftSidebarMenu";


//클라이언트 소켓 모듈 참조하기
//yarn add  socket.io-client
import { socket } from '../socket';



const AuthLayout = (props) => {


    //최초 한번 AuthLayout 컴포넌트가 호출될때
    //socket.connection이 실행되어야하고 각종 클라이언트 메시지 수신 이벤트를 등록해줘야한다.
    //그리고 AuthLayout 컴포넌트가 사라질때 socket 객체와 메시지 수신 이벤트들이 함께 제거되어야한다. 
    useEffect(()=>{

        //STEP2:클리언트소켓과 서버소켓이 연결되면 실행되는 이벤트 처리기 정의 
        socket.on('connect',onConnect);


        socket.on('disconnect',onDisconnect);

        function onDisconnect(){
            console.log("서버 소켓과 클라이언트 소켓이 연결 해제(끊어짐)되었습니다.");
        }


        //클라이언트 메시지 수신 이벤트 정의 및 핸들러 함수 정의 
        socket.on('receiveAll',onReceiveAll);


        //receiveAll 이벤트 수신기 처리 함수
        function onReceiveAll(msg){
            console.log("서버소켓으로부터 수신된 데이터: ",msg);
        }


        //클라이언트와 서버소켓이 연결되면 실행되는 이벤트 처리기 함수 
        function onConnect(){
            console.log("서버 채팅 소켓이 연결되었습니다.");

            //서버 소켓과 연결이 완료되면 아래 테스트용 메시지를 서버로 발송해본다.
            socket.emit("broadcast","리액트앱에서 보내는 메시지입니다.");
        }

        //리액트 메시지 전용 메시지 이벤트 정의 및 처리함수 구현
        socket.on('reactReceive',onReactReceive);

        function onReactReceive(msg){
            console.log("서버 소켓으로부터 수신된 리액트 데이터: ",msg);

            //리덕스 전역공간에 Chat.receiveMessage 데이터를 변경합니다.
            props.setReceiveMessage(msg);
        }
        


        //STEP1:socket.connect()메소드를 통해 서버 소켓과 클라이언트 소켓을 연결한다.
        socket.connect('http://localhost:3005/');


        //클리어 함수로 해당 컴포넌트가 사질떄 처리해야할 일들을 하기 클리어 함수에서 정의합니다.
        //AuthLayout 컴포넌트가 사라질때 해당 컴포넌트에서 생성한 socket객체와 각종 메시지 수신이벤트를 제거해줘야합니다.
        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('receiveAll', onReceiveAll);
            socket.off('reactReceive', onReactReceive);
        };

    },[]);


    //리덕스 전역공간의 Chat.sendMessage 전역값이 변경될때마다 실행되는 이벤트함수
    useEffect(()=>{

        if(props.sendMessage.member_id > 0){
            socket.emit("reactSend",props.sendMessage);
            console.log("메시지 서버로 사용자 입력메시지를 전송합니다.",props.sendMessage);
        }

    },[props.sendMessage]);






    return (
        <React.Fragment>
        <div className="layout-wrapper d-lg-flex">

                {/* 최좌측 채팅 좌측 메뉴바 영역  */}
                <LeftSidebarMenu />
            
                {/* 각종 인증된 페이지 컴포넌트 출력영역-dashboard,start */}
                {props.children}

            </div>
            
        </React.Fragment>
    );
};


//export default AuthLayout;

const mapStateToProps = (state) => {
    const { sendMessage,receiveMessage } = state.Chat;
    return { sendMessage,receiveMessage };
};

export default connect(mapStateToProps, {setReceiveMessage})(AuthLayout);