import logo from './logo.svg';
import './App.css';

//ContextAPI사용을 위한 createContext 참조하기 
import React,{createContext,useState,useContext} from 'react';

//ContextAPI를 통한 전역상태관리기법 샘플
import ContextCounter from "./components/ContextCounter";
import ContextTodoList from "./components/ContextTodoList";


//Redux를 통한 전역상태관리기법 샘플
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";

//전체 리액트앱의 ContextAPI기반 전역데이터 관리를 위한 컨텐츠 생성
export const AppContext = createContext();

//AppContext의 기본 프로바이더를 개발자 직접기능 정의 
function CounterProvider({ children }) {
  const todoCountState = useState(0);
  return (
    <AppContext.Provider value={todoCountState}>
      {children}
    </AppContext.Provider>
  );
}




function App() {

  //const todoCount= 10;

  return (
    <div className="App">
      {/* <CounterProvider>
        <ContextCounter/>
        <hr></hr>
        <ContextTodoList/>
      </CounterProvider> */}

        <Counter/>
        <hr></hr>
        <TodoList/>

    </div>
  );
}

export default App;
