import React from 'react';
import {Outlet} from 'react-router-dom';

const Company = () => {
    return (
        <div>
            <h1>회사소개 페이지</h1>
            <p>엠소프트웨어는 전문 비대면 솔루션 기업입니다.</p>
            <Outlet />
        </div>
    );
};

export default Company;