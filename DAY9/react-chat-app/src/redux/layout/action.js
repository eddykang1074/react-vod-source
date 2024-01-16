//layout 액션파일에서는 채팅앱내의 모든 레이아웃 전역설정정보를 관리합니다.


//STEP1:액션타입 참조 
import { 
	SET_ACTIVE_TAB,
	SET_CONVERSATION_NAME_IN_OPEN_CHAT,
	OPEN_USER_PROFILE_SIDEBAR, 
	CLOSE_USER_PROFILE_SIDEBAR,
} from "../../constants/actionTypes";


//STEP2:액션함수 정의 

//현재 선택한 메뉴아이디 탭 정보변경 액션함수 
export const setActiveTab = (tabId) => ({
	type: SET_ACTIVE_TAB,
	payload: tabId
});


//채팅 대상자 닉네임 변경 액션함수 
export const setconversationNameInOpenChat = (conversationName) => ({
	type: SET_CONVERSATION_NAME_IN_OPEN_CHAT,
	payload: conversationName
});

//채팅대상자 상세 프로필 정보영역 표시 변경 액션함수
export const openUserSidebar = () => ({
	type: OPEN_USER_PROFILE_SIDEBAR
});

//채팅대상자 상세 프로필 정보영역 숨기기 변경 액션함수
export const closeUserSidebar = () => ({
	type: CLOSE_USER_PROFILE_SIDEBAR
});




