import React from 'react';

import { connect } from "react-redux";

import { TabContent, TabPane } from "reactstrap";

//현재 사용자의 프로필 정보 표시 컴포넌트 
import Profile from "./Tabs/Profile";

//채팅영역 컴포넌트 
import Chats from "./Tabs/Chats";



const ChatLeftSidebar = (props) => {

    //현재 전역메뉴 선택된 탭아이디 정보조회-리덕스 전역데이터에서 호출(Layout리듀서에서)
    const activeTab = props.activeTab;

    return (
        <React.Fragment>
            <div className="chat-leftsidebar me-lg-1">

                <TabContent activeTab={activeTab}  >

                    <TabPane tabId="profile" id="pills-user"   >
                        <Profile />
                    </TabPane>
           
                    <TabPane tabId="chat" id="pills-chat">
                        <Chats recentChatList={props.recentChatList} />
                    </TabPane>
             

                    {/* <TabPane tabId="group" id="pills-groups">
                        <Groups />
                    </TabPane>
     
                    <TabPane tabId="contacts" id="pills-contacts">
                        <Contacts />
                    </TabPane>

                    <TabPane tabId="settings" id="pills-setting">
                        <Settings />
                    </TabPane> */}

                </TabContent>

            </div>
        </React.Fragment>
    );
};

//export default ChatLeftSidebar;

const mapStatetoProps = state => {
    return {
        ...state.Layout
    };
};

export default connect(mapStatetoProps, null)(ChatLeftSidebar);