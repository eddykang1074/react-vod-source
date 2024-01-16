import React from 'react';
import { useParams } from "react-router-dom";

//http://localhost:3000/about/products
//match방식은 react-router-dom v5.x에서만 사용이 가능하고 v.6x버전대에서 사용불가

const About = () => {

    const { category } = useParams();


    return (
        <div>
            <h1>상품 분류 정보 : {category}</h1>
        </div>
    );

};

export default About;