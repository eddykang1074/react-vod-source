import React from 'react';


//props 명으로 부모컴포넌트에서 전달된 값을 활용
// const MyProfile = (props) => {
//     return (
//         <div>
//             <h1>{props.children}</h1>
//             <br/>
//             아이디: {props.userid}
//             <br/>
//             이름: {props.name}
//             <br/>
//             메일주소: {props.email}
//             <br/>
//             전화번호:{props.telephone}
//         </div>
//     );
// };


//직접 props내 속성을 객체로 정의해 사용하는방법
const MyProfile = ({userid,name,email,telephone,children}) => {
    return (
        <div>
            <h1>{children}</h1>
            <br/>
            아이디: {userid}
            <br/>
            이름: {name}
            <br/>
            메일주소: {email}
            <br/>
            전화번호:{telephone}
        </div>
    );
};




export default MyProfile;