//각종 리덕스 액션타입(액션이름)을 상수값으로 정의해서  전역으로 사용할수 있는 환경제공

//할일 목록 신규 추가시 호출할 액션타입 정의
//할일목록이 추가되었을떄 현재 할일건수(count)를 전역데이터에 반영하는 액션 시나리오를 정의함. 
export const TODO_ADD = "TODO_ADD";


//예시:사용자가 로그인을 실시하고 로그인한 사용자의 기본정보를 전역데이터 공간에 저장하는 시나리오를 정의함
export const USER_LOGIN ="USER_LOGIN";

//....