import React,{useContext,useState} from 'react';

//전역데이터를 관리하는 해당 컨텍스트 참조하기
import {AppContext} from '../App';


//전역데이터 정보를 손쉽게 관리하기위한 사용자정의 State훅 기능정의 
function useTodoCountState(){
    const value = useContext(AppContext);
    return value;
}



const ContextTodoList = () => {

    //단일 할일정보의 데이터 구조를 정의하고 초기값을 세팅합니다.
    const [todo,setTodo] = useState({title:"",orderby:0});

    //할일 목록 객체의 배열을 정의하고 초기값을 세팅합니다.
    const [todoList,setTodoList] = useState([]);


    //전역데이터 상태값을 관리해주는 개발자정의 훅을 이용한 데이터 제어
    const[,setTodoCounter] = useTodoCountState();


    //사용자 액션에에 따른 사용자입력값을 해당 상태값에 바인딩적용하는 해당 이벤트 핸들러함수 정의 
    const handleTodo =(e)=>{
        setTodo({...todo,[e.target.name]:e.target.value});
    };

    //신규 할일 정보 등록처리 이벤트 핸들러 함수 정의 
    const handleAddTodo =()=>{
        setTodoList([...todoList,todo]);
        setTodoCounter(()=>todoList.length +1);
    }


    return (
        <div>

            할일이름:<input type="text" name="title" value={todo.title} onChange={handleTodo} /><br/>
            우선순위:<input type="text" name="orderby" value={todo.orderby} onChange={handleTodo} /><br/>
            <button onClick={handleAddTodo}>추가</button>

            <hr></hr>
            <ul>
                {
                    todoList.map((item,index)=>(
                        <li key={index}>
                            {item.orderby} ---- {item.title}
                        </li>
                    ))
                }
            </ul>
            
        </div>
    );
};

export default ContextTodoList;