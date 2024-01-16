

//STEP1:액션타입 참조 
import { 
	SET_ACTIVE_TAB,
	SET_CONVERSATION_NAME_IN_OPEN_CHAT,
	OPEN_USER_PROFILE_SIDEBAR, 
	CLOSE_USER_PROFILE_SIDEBAR,
 } from "../../constants/actionTypes";

//STEP2: 채팅앱의 레이아웃 전역상태값 구조 정의 및 초기값 세팅
const INIT_STATE = {
	activeTab : "chat", //최좌측 메뉴탭 선택정보 
	userSidebar : false, //최우측 채팅대상자의 프로필정보 표시여부 정보
	conversationName : "Doris Brown", //기본 채팅대상자의 이름
	layoutMode : "light" //밤낮 레이아웃 테마 적용정보
};


//STEP3: Layout 전역데이터 처리 리듀서 함수 정의 
const Layout = (state = INIT_STATE, action) => {
	switch (action.type) {
		case SET_ACTIVE_TAB:
			return {
				...state,
				activeTab: action.payload
			};
		case SET_CONVERSATION_NAME_IN_OPEN_CHAT:
			return {
			...state,
			conversationName: action.payload
		};

		case OPEN_USER_PROFILE_SIDEBAR:
			return {
				...state,
				userSidebar: true
			};

		case CLOSE_USER_PROFILE_SIDEBAR:
			return {
				...state,
				userSidebar: false
			};
		default:
			return state;
	}
};


export default Layout;