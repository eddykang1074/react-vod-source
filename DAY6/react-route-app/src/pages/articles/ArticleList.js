import React,{useState,useEffect} from 'react';

//import {Link,useHistory}  from "react-router-dom"; //v5.x useHistory훅사용..

import {Link,useNavigate} from 'react-router-dom';  //ver 6.x

import axios from "axios";

const ArticleList = () => {

    //게시글 목록 데이터 관리 useState 상태값
    const [articleList,setArticleList] = useState([]);

    //최초에 게시글 목록 컴포턴트가 렌더링될때만 딱 1회만 실행됨....
    useEffect(()=>{

        //백엔드에서 특정 API를 호출해서 데이터를 조회한다.
        //axios 동기방식 호출패턴
        axios.get('http://localhost:3005/api/articles').then((res)=>{
            console.log("백엔드에서 전달된 데이터 값 확인하기",res);
            setArticleList(res.data.data);

        }).catch((err)=>{
            console.log("AXIOS 호출에러발생:",err);
        });

    },[]);


    //const history = useHistory();
    const navigate = useNavigate();

    //게시글 작성 버튼 클릭시 실행되는 이벤트 처리함수 
    const handleRegist =()=>{
        //history.push("/article/regist");
        navigate('/article/regist');
    }

    return (
        <div style={{textAlign:"center"}}>
            <h1>게시글 목록 페이지</h1>
            <button onClick={handleRegist}>게시글작성</button>

            <table>
                <thead>
                    <tr>
                        <th>글고유번호</th>
                        <th>제목</th>
                        <th>조회수</th>
                        <th>IP주소</th>
                        <th>게시여부</th>
                        <th>등록일시</th>
                        <th>등록자</th>
                    </tr>
                </thead>

                <tbody>


                    {articleList.map((item,index)=>(
                        <tr key={index}>
                            <td>{item.article_id}</td>
                            <td><Link to={{pathname:"/article/modify/"+item.article_id}}>{item.title}</Link></td>
                            <td>{item.view_count}</td>
                            <td>{item.ip_address}</td>
                            <td>{item.is_display_code}</td>
                            <td>{item.reg_date}</td>
                            <td>{item.reg_member_id}</td>
                        </tr>
                    ))}
   

                </tbody>
            </table>
        </div>
    );
};

export default ArticleList;