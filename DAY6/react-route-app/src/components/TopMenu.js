import React from 'react';

import { Link } from "react-router-dom";

const TopMenu = () => {
    return (
        <div style={{width:"100%",height:"50px",paddingTop:"15px",textAlign:"left",paddingLeft:"15px",backgroundColor:"#3fb2e6"}}>
            {/* <h1>GNB 공통 상단 메뉴 영역 </h1> */}
            <span><Link to="/">메인</Link></span>
            |
            <span><Link to="/article/list">게시글 목록</Link></span>
            |
            <span><Link to="/about">회사소개</Link></span>
        </div>
       
    );
};

export default TopMenu;