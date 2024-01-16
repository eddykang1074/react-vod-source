//각종 리덕스 액션타입(액션이름)을 상수값으로 정의해서  전역으로 사용할수 있는 환경제공


//사용자가 로그인을 실시하고 로그인한 사용자의 기본정보를 전역데이터 공간에 저장하는 시나리오를 정의함
export const USER_LOGIN ="USER_LOGIN";


//좌측바 탭 클릭시 선택한 탭의 정보를  전역상태로 관리해주는 액션타입정의  
export const SET_ACTIVE_TAB = "SET_ACTIVE_TAB";

//채팅앱 현재 사용자의 채팅관련 전역데이터(대화상대목록-채팅방목록,현재 채팅서버에 연결된 사용자목록, 대화상대별 채팅이력) 정보를 관리해주는 액션타입정의 
export const CHAT_USER= "CHAT_USER";

//현재 선택한 채팅 대상자 사용자 아이디-숫자 변경
export const ACTIVE_USER= "ACTIVE_USER";

//채팅 대상자 채널을 클릭시 우측에 채팅대상자 이름을 변경처리하는 액션 타입 
export const SET_CONVERSATION_NAME_IN_OPEN_CHAT= "SET_CONVERSATION_NAME_IN_OPEN_CHAT";


//채팅대상자 상세 프로필 영역 표시하기 액션타입
export const OPEN_USER_PROFILE_SIDEBAR ="OPEN_USER_PROFILE_SIDEBAR";

//채팅대상자 상세 프로필 영역 숨기기 액션타입
export const CLOSE_USER_PROFILE_SIDEBAR="CLOSE_USER_PROFILE_SIDEBAR";


export const FULL_USER ="FULL_USER";


//채팅 메시지 발송 데이터 전역데이터 저장 액션타입
export const CHAT_SEND_MSG = "CHAT_SEND_MSG";

//외부에서 전송된 수신 메시지 데이터를 전역 데이터에 저장 액션타입
export const CHAT_RECEIVE_MSG = "CHAT_RECEIVE_MSG";



