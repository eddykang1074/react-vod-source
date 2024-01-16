import React,{useContext} from 'react';


//사용하고자 하는 전역 컨텐츠가 정의된 모듈(컴포넌트)를 참조한다.
import {AppContext} from '../App';


const ContextCounter = () => {

    //useContext 훅을 이용한 컨텍스트내 데이터값을 조회한다.
    //const todoCount = useContext(AppContext);

    const todoCount = useContext(AppContext);


    return (
        <div>
            {/* <h1>할일목록 건수:0 건</h1> */}

            {/* useContext Hook이 나오기전에 사용하던 방법1 */}
            {/* <AppContext.Consumer>
                {(todoCount)=>(
                    <h1>할일목록 건수:{todoCount}건</h1>
                )}
            </AppContext.Consumer> */}

            {/* useContext 훅을 이용한 전역데이터 추출하기 */}
            <h1>할일목록 건수:{todoCount}건 </h1>

            
        </div>
    );
};

export default ContextCounter;