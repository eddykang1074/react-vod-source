import React,{useState} from 'react';

const Products = () => {

    //상품목록 데이터 
    const [products,setProducts] = useState([
        {
            id:1,
            productName: "삼성노트북",
            price:1000
        },
        {
            id:2,
            productName: "LG노트북",
            price:2000
        },
        {
            id:3,
            productName: "한성노트북",
            price:3000
        },
        {
            id:4,
            productName: "HP노트북",
            price:4000
        }
    ]);


    //단일 상품정보 관리 상태값 정의하기 
    const [product,setProduct] = useState({
        id:0,
        productName:"",
        price:0
    });


    //제품고유번호 상태값 정의하기 
    const [productId,setProductId] = useState(5);



    //단일 상품정보 입력요소 이벤트 처리기 
    const handleProduct = (e) =>{
        setProduct({...product,[e.target.name]:e.target.value});
    }

    //신규 상품 저장처리 
    const handleSave =()=>{
        //제품목록데이터의 복사본을 만들고 단일상품의 복사본을 만든후 제품번호를 다시 할당하고 단일 상품 데이터를 복사본 배열에 추가한다.
        setProducts([...products,{...product,id:productId}]);

        //제품고유번호 1 증가처리
        setProductId(productId+1);

        //단일상품등록 입력요소값을 초기화한다.
        setProduct({
            id:0,
            productName:"",
            price:0
        });

        //setProduct({...product,id:0,productName:"",price:0});


    }

    //상품 목록에서 특정 상품을 선택시 해당 상품 데이터가 전달되고
    //전달된 단일 객체를 입력요소의 표시한다.
    const handleSelect =(p)=>{

        //상품 입력요소에 바인딩된 데이터를 목록에서 선택한 단일 상품정보로 변경한다.
        setProduct(p);
    }


    //상품 목록에서 삭제선택한 항목을 상품목록에서 제거한다.
    const handleRemove=(p)=>{

        //삭제하고자하는 아이템의 제품번호와 다른 모든 제품목록의 복사본 배열을 만듭니다.
        const filteredProducts = products.filter((product)=>product.id  !== p.id );
        setProducts(filteredProducts);
    }


    const productList = products.map((p,i)=>(
        <tr key={i}>
            <td>{p.id}</td>
            <td>{p.productName}</td>
            <td>{p.price}</td>
            <td><button onClick={()=>handleSelect(p)}>선택</button></td>
            <td><button onClick={()=>handleRemove(p)}>삭제</button></td>
        </tr>
    ))


    return (
        <div>
            신규 제품 등록 : 
            제품명:<input type="text" name="productName" value={product.productName} placeholder='제품명' onChange={handleProduct}/>
            가격:<input type="text" name="price" value={product.price} placeholder='0' onChange={handleProduct}/>
            <button onClick={handleSave}>저장</button>

            <hr></hr>
            <table style={{width:"100%"}}>
                <thead>
                    <tr>
                        <th>제품번호</th>
                        <th>제품명</th>
                        <th>가격</th>
                        <th>선택</th>
                        <th>삭제</th>
                    </tr>
                </thead>

                <tbody>

                    {productList}    



                    {/* {
                        products.map((p,i)=>(
                            <tr key={i}>
                                <td>{p.id}</td>
                                <td>{p.productName}</td>
                                <td>{p.price}</td>
                                <td><button onClick={()=>handleSelect(p)}>선택</button></td>
                                <td><button onClick={()=>handleRemove(p)}>삭제</button></td>
                            </tr>
                        ))
                    } */}


                </tbody>
            </table>
            
        </div>
    );
};

export default Products;