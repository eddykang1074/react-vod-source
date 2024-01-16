

//STEP1:액션타입 참조 
import { 
    CHAT_USER,
    ACTIVE_USER,
    FULL_USER,
    CHAT_SEND_MSG,
    CHAT_RECEIVE_MSG
} from "../../constants/actionTypes";


//STEP2:액션함수 정의 

//해당액션함수는 전역데이터 공간에서 제공해주는 모든 채팅대상자 목록을 조회해온다.
export const chatUser = () => ({
    type: CHAT_USER
});


//채팅대상자 채널을 선택시 해당 사용자의 아이디값(숫자)를 전역데이터로 저장한다.
export const activeUser = (userId) => ({
    type: ACTIVE_USER,
    payload : userId
});

//기존 필터링된 채팅 대상자 목록을 전체 사용자로 업데이트 갱신 처리 
export const setFullUser = (fullUser) => ({
    type: FULL_USER,
    payload : fullUser
});

//현재 사용자 입력한 신규 전송 메시지 저장처리 액션함수
export const setSendMessage = (msg) => ({
    type: CHAT_SEND_MSG,
    payload : msg
});

//타인이 보낸 수신 메시지를 저장처리하는 액션함수
export const setReceiveMessage = (msg) => ({
    type: CHAT_RECEIVE_MSG,
    payload : msg
});




