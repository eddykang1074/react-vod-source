import React,{useState,useRef} from 'react';
import axios from "axios";

// import {useHistory } from 'react-router-dom'; //ver 5.x
import {useNavigate} from 'react-router-dom';  //ver 6.x

const ArticleRegist = () => {

    const [article,setArticle] = useState({title:"",contents:""});

    const refTitle = useRef();
    const refContents = useRef();

    //const history = useHistory();

    const navigate = useNavigate();


    //저장버튼 클릭 이벤트 처리 함수 
    const handleSave = ()=>{
        //게시글 입력정보를 백엔드로 전송합니다.
        //백엔드에서 게시글 등록처리를 완료하면 
        //특정 페이지로 화면을 이동시킬때... navigate활용 처리 
        //navigate('/article/list');

        if(article.title === ""){
            alert("제목을 입력해주세요.");
            refTitle.current.focus();
            return false;
        }

        if(article.contents === ""){
            alert("내용을 입력해주세요.");
            refContents.current.focus();
            return false;
        }

        //axios를 통해 사용자가 입력한 단일 게시글정보를 백엔드로 전달합니다.
        axios.post('http://localhost:3005/api/articles',article)
        .then((res)=>{
            console.log("백엔드에서 등록처리하고 전달된 결과값:",res.data);
            alert("등록완료");
            navigate('/article/list');
        }).catch();


    }







    //게시글 정보 입력처리 이벤트 핸들러 
    const handleArticle =(e)=>{
        setArticle({...article,[e.target.name]:e.target.value});
    }

    //목록 페이지 이동 이벤트 처리함수 
    // const handleList = ()=>{
        
    // }



    return (
        <div>
            <h1>게시글 등록 페이지</h1>
            <div>
                <label for="title">제목</label>
                <input type="text" ref={refTitle} id="title" name="title" value={article.title} onChange={handleArticle} />
            </div>

            <div>
                <label for="contents">내용</label>
                <textarea ref={refContents} value={article.contents} id="contents" name="contents" onChange={handleArticle}></textarea>
            </div>

            <div>
            <button onClick={handleSave}>저장</button>
            <button onClick={() => { navigate('/article/list')}}>게시글목록이동</button>
            </div>
    
        </div>
    );
};

export default ArticleRegist;