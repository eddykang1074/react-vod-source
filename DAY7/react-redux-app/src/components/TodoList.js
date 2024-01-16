import React,{useState} from 'react';

//useDispatch훅은 Store내 전역공간에 저장된 특정데이터(상태)를 변경하고자 할떄 사용하는 전용훅
import { useDispatch } from 'react-redux';

//관련된 기정의한 액션실행함수를 참조한다.
import { addTodoList } from '../redux/actions'

const TodoList = () => {

    const [todo,setTodo] = useState({title:"",orderby:0});
    const [todoList,setTodoList] = useState([]);

    //전역리덕스 상태값을 변경하기 위한 디스패치 변수 생성
    const globalDispatch  = useDispatch();


    //할일정보 입력 데이터 바인딩 업데이트 처리 함수 
    const handleTodo =(e)=>{
        setTodo({...todo,[e.target.name]:e.target.value});
    }

    //신규 할일 등록처리 이벤트 함수 
    const handleAddTodo =()=>{
        //할일목록에 신규 할일추가 기능 구현
        setTodoList([...todoList,todo]);

        //할일목록 관리 컴포넌에서 신규 추가된 총 할일건수를 store전역데이터중 todoCount값을 변경한다.
        //변경하는 방법은 액션실행함수를 통해 전역데이터를 변경처리합니다. 
        globalDispatch(addTodoList((todoList.length+1).toString()));
    }

    return (
        <div>
            할일이름: <input type="text" name="title" value={todo.title} onChange={handleTodo} /><br/><br/>
            우선순위: <input type="text" name="orderby" value={todo.orderby} onChange={handleTodo} /><br/>
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

export default TodoList;