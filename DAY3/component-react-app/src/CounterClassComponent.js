import React, { Component } from 'react';

class CounterClassComponent extends Component {

    constructor(props){
        super(props);

        //클래스형 컴포넌트에서는 this.state속성을 통해 상태값의 구조를 정의하고 초기값을 할당합니다.
        this.state = {
            count:200,
            userName:"강창훈",
        }
    }

    //1증가 이벤트 핸들러 함수 기능정의 
    handleIncrease =()=>{
        this.setState({count:this.state.count + 1})
    }

    //1감소 이벤트 핸들러 함수 기능 정의 
    handleDecrease =()=>{
        this.setState({count:this.state.count -1});
    }


    render() {
        return (
            <div>

                <h1>카운터 상태값 표시:{this.state.count}</h1>
                <button onClick={this.handleIncrease}>1증가</button>
                <button onClick={this.handleDecrease}>1감소</button>
            </div>
        );
    }
}

export default CounterClassComponent;