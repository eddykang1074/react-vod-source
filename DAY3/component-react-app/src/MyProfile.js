import React from 'react';

import PropTypes  from "prop-types";


const MyProfile = (props) => {
    return (
        <div>
            {props.children}
            <br/>
            아이디: {props.userid}
            <br/>
            이름: {props.name}
            <br/>
            메일주소:{props.email}
            <br/>
            전화번호: {props.telephone}

            <br/>
            주소 : {props.address}
            <br/>
            나이:{props.age}
        </div>
    );
};



// const MyProfile = ({userid,name,email,telephone,children}) => {
//     return (
//         <div>
//             {children}

//             <br/>
//             아이디: {userid}
//             <br/>
//             이름: {name}
//             <br/>
//             메일주소:{email}
//             <br/>
//             전화번호: {telephone}
//         </div>
//     );
// };


MyProfile.defaultProps ={
    address:"경기도 성남시 수정구"
}


MyProfile.propTypes ={
    age : PropTypes.number.isRequired,
}

export default MyProfile;