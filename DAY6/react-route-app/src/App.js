import logo from './logo.svg';
import './App.css';

import {Routes,Route} from "react-router-dom";


//App.js 전체 페이지 레이아웃 구성 컴포넌트의 상단 과 하단 공통 영역을 담당한 컴포넌트 참조
import TopMenuBar  from "./components/TopMenu";
import FooterBar from "./components/Footer";


//각종 웹페이지를 구성하는 페이지 컴포넌트를 참조
import MainPage from "./pages/Main";

import ArticleListPage from "./pages/articles/ArticleList";
import ArticleRegistPage from "./pages/articles/ArticleRegist";
import ArticleModifyPage from "./pages/articles/ArticleModify";

import CategoryListPage from "./pages/CategoryList";
import AboutPage from "./pages/About";

import CompanyPage from "./pages/Company";
import LocationPage from "./pages/Location";

function App() {
  return (
    <div className="App">
      <TopMenuBar></TopMenuBar>



      {/* 컨텐츠 영역에 표시할 컴포넌트 또는 페이지의 라우팅 주소체계별 화면 정의하기  */}

      {/* http://localhost:3000/ 주소 호출시 메인 화면 페이지 출력하기  */}
      <Routes>
        <Route path='/' Component={MainPage} exact={true}></Route>


        {/* 상품분류 화면 표시할때 상품분류코드를 쿼리스트링방식으로 전달합니다.
        localhost:3000/category?cidx=100&sort=price */}
        <Route path='/category' Component={CategoryListPage} ></Route>

        <Route path='/article/list' Component={ArticleListPage} ></Route>
        <Route path='/article/regist' Component={ArticleRegistPage} ></Route>

        {/* localhost:3000/article/modify/1 */}
        <Route path='/article/modify/:idx' Component={ArticleModifyPage} ></Route>

        {/* localhost:3000/about/products
        localhost:3000/about/100 */}
        <Route path='/about/:category'  Component={AboutPage} ></Route>


        {/* localhost:3000/company/location  */}
        <Route path='/company'  Component={CompanyPage}>
          <Route path="location" Component={LocationPage}></Route>
        </Route>

      </Routes>
      
      <FooterBar></FooterBar>
    </div>
  );
}

export default App;
