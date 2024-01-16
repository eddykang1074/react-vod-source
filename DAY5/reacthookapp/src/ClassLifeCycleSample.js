import React, { Component } from 'react';

class ClassLifeCycleSample extends Component {

    //생성자 함수
    //super는 부모클래 생성자를 참조하기 위해 사용됩니다.
    //생성자함수를 정의하는경우 반드시 super를 호출하기전에는 this 기능을 사용할수 없습니다.
    constructor(props){
        super(props);
        console.log("1.생성자 함수가 호출되었습니다.");
    }

    //클래스형 컴포넌트의 상태구조 정의 및 초기화 
    state = {user:{name:"",nickName:"",email:""}};


    //최초에 컴포넌트가 렌더링(마운트)될때 실행됨
    componentDidMount(){
        console.log("componentDidMount =>최초에 컴포넌트가 렌더링(마운트)될때 실행됨.....");
    }

    //컴포넌트내에 props,state의 값이 바뀔떄마다 실행되는 생애주기 이벤트
    shouldComponentUpdate(prevProps,prevState){
        console.log("shouldComponentUpdate => 컴포넌트내에 props,state의 값이 바뀔떄마다 실행되는 생애주기 이벤트");
        //return this.props.data !== prevProps
        //기존에 props값이나 상태값(state)값이 변경되었는지 여부를 체크해서 그에 맞는 이벤트처리가 가능합니다.
        return true;
    }

    //컴포넌트가 화면에서 사라지기(언마운트) 바로전에 실행되는 이벤트
    componentWillUnmount(){
        console.log("componentWillUnmount => 컴포넌트가 화면에서 사라지기(언마운트) 바로전에 실행되는 이벤트");
    }

    //컴포넌트가 업데이트가 완료된 이후에 발생하는 이벤트
    componentDidUpdate(prevProps,prevState,shapshot){
        console.log("componentDidUpdate");
    }

    handleUserInfo =(e)=>{
        this.setState((state) =>({
            user:{...state.user,[e.target.name]:e.target.value}
        }));
    }



    render() {

        console.log("render()==>메소드가 호출되었습니다.");

        return (
            <div>
            <h1>사용자 정보 입력영역</h1>
                <input value={this.state.user.name} name="name" onChange={this.handleUserInfo} />
                <input value={this.state.user.nickName} name="nickName" onChange={this.handleUserInfo} />
                <input value={this.state.user.email} name="email" onChange={this.handleUserInfo} />

                <h1>사용자 정보 출력영역</h1>
                <div>이름:{this.state.user.name}</div>
                <div>닉네임:{this.state.user.nickName}</div>
                <div>메일주소:{this.state.user.email}</div>
            </div>
        );
    }
}

export default ClassLifeCycleSample;