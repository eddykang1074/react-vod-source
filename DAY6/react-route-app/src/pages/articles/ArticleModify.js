import React,{useState,useRef,useEffect} from 'react';
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";


const ArticleModify = () => {

    //useParams훅을 통해 라우터에서 정의된 파라메터 키값을 이용 값을 추출합니다.
    const { idx } = useParams();

    const inputTitleRef = useRef();
    const inputContentsRef = useRef();

    const [article,setArticle] = useState({title:"",contents:""});

    const navigate = useNavigate();

    console.log("파라메터 방식으로 URL을 통해전달되는 값을 추출합니다",idx);

    //최초로 게시글 정보 확인 컴포넌트가 렌더링될때만 1회 실행되는 함수기능구현
    useEffect(()=>{

        //수정 화면 컴포넌트가 최초 렌더링시 마우스커스를 제목입력박스에 맞춘다.
        inputTitleRef.current.focus();
        
        axios.get(`http://localhost:3005/api/articles/${idx}`).then((res)=>{
            console.log("백엔드로부터 전달되는 값출력:",res.data);
            setArticle(res.data.data);

        }).catch((err)=>{
            console.log("에러발생",err);
        });
    },[]);



    //게시글 정보 변경처리 바인딩 핸들러
    const handleArticle = (e) =>{
        setArticle({...article,[e.target.name]:e.target.value});
    }



    //수정버튼 클릭 이벤트처리 핸들러 
    const handleSave =()=>{
        console.log("수정 버튼이 클릭되었습니다");

        //사용자 정보 입력 유효성 검사 기능 구현

        if(article.title === ""){
            alert("제목을 입력해주세요.");
            inputTitleRef.current.focus();
            return false;
        }

        if(article.contents === ""){
            alert("글내용을 입력해주세요.");
            inputContentsRef.current.focus();
            return false;
        }


        axios.post(`http://localhost:3005/api/articles/${idx}`,article).then((res)=>{
            console.log("데이터 처리결과 : ",res.data);

            if(res.data.code === "200"){
                alert("수정완료!!");
                navigate("/article/list");
            }else{
                alert("백엔드 서버에러발생.. 백엔드 개발자에게 문의하세요.");
            }

            }).catch((err)=>{
                console.log("데이터 수정처리 에러발생....");
            });
    }






    //삭제버튼 클릭 이벤트 핸들러 
    const handleDelete =()=>{
        console.log("삭제 버튼이 클릭되었습니다");

        if(window.confirm("정말로 삭제하시겠습니까?")){

            axios.delete(`http://localhost:3005/api/articles/${idx}`).then(
                (res)=>{
                   console.log("삭제처리결과:",res.data);
                   if(res.data.code === "200"){
                    alert("삭제완료!!");
                    navigate("/article/list");
                   } 
                }
            ).catch((err)=>{
                console.log("데이터 삭제처리 에러발생....");
            });

        }
    }


    return (
        <div>
            <h1>게시글수정페이지</h1>
            제목:<input type="text" ref={inputTitleRef} name="title" value={article.title} onChange={handleArticle} /><br/>
            내용:<textarea rows="10" ref={inputContentsRef} cols="50" name="contents" value={article.contents} onChange={handleArticle}></textarea><br/>
            <button onClick={handleSave}>수정</button>
            <button onClick={handleDelete}>삭제</button>
            <button onClick={() => { navigate('/article/list')}}>게시글목록이동</button>

        </div>
    );
};

export default ArticleModify;