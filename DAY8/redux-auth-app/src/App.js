import logo from './logo.svg';
import './App.css';

//리액트 주소 라우팅 정의를 위한 라우트 객체 참조
import {Routes,Route} from 'react-router-dom';


//공통 레이아웃 컴포넌트 참조하기
import TopMenuBar  from './components/TopMenu';
import FooterBar from './components/Footer';


//컨텐츠 페이지 컴포넌트 참조하기 
import MainPage from './pages/Main';
import EntryPage from './pages/auth/Entry';
import LoginPage from './pages/auth/Login';
import ProfilePage from './pages/auth/Profile';


function App() {
  return (
    <div className="App">
 
      {/* 상단 메뉴바 컴포넌트 표시 */}
      <TopMenuBar/>

      {/* 콘텐츠 페이지 출력영역  */}
      <Routes>
        <Route path="/" Component={MainPage} exact={true}/>
        <Route path="/entry" Component={EntryPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/profile" Component={ProfilePage} />
      </Routes>

      {/* 하단 카피풋터 컴포넌트 표시 */}
      <FooterBar/>
 
    </div>
  );
}

export default App;
