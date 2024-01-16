import React from 'react';
import { useSearchParams } from 'react-router-dom';


//localhost:3000/category?cidx=100&sort=price

const CategoryList = () => {

    const [searchParams,setSearchParams]  = useSearchParams();
    const cidx = searchParams.get("cidx");
    const sort = searchParams.get("sort");


    return (
        <div>
            <h1>상품 분류별 목록 페이지: {cidx} 정렬방식:{sort}</h1>
        </div>
    );
};

export default CategoryList;