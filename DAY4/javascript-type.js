
//원시타입의 number1이라는 변수를 정의하고 값을 할당합니다.
var number1 = 100;


console.log("number1",number1);

//number2변수에 number1을 복사 넣기 
var number2 = number1;

console.log("number2",number2);

//number2값을 200으로 변경해도 number1의 값은 100으로 유지된다.
number2 = 200;

console.log("number2",number2);
console.log("number1",number1);

console.log("number1 === number2",number1 === number2);



//참조 타입의 불변성에 대해 실습해봅니다.

var object1 = {
    id:"1",
    name:"eddy",
    age:45,
    address:{sido:"경기도",detail:"성남시 수정구"}
};

console.log("참조타입-객체정의하고 값할당하기-object1,",object1);

//기존 정의된 객체의 특정 속성값을 변경합니다.
object1.name ="test";
object1.age = 50;

//값을 변경해도 한번 할당된 메모리 주소와 할당공간을 재사용합니다.- 참조타입의 불변성 이슈 발생 
console.log("참조타입-객체값 변경완료-object1,",object1);


//새로운 객체를 정의하고 기존객체값으로 값을 할당합니다.
var object2 = object1;
object2.name = "gabriel";


console.log("object2",object2);
console.log("object1",object1);


//Operator 연산자 실습하기 

//1.오퍼레이터 연산자로 배열 병합하기 
const numbersOne = [1,2,3];
const numbersTwo = [4,5,6];

const numbersCombined = [...numbersOne,...numbersTwo];
console.log("1.배열 병합하기:",numbersCombined);


//2.나머지 배열넣기 
const numbers = [1,2,3,4,5,6];
const [one,two,...rest] = numbers;

console.log("나머지 배열값 출력하기",one,two,rest);


//3.배열 복사하기(복제)
const originNumbers = [1,2,3,4,5];
const newNumbers =[...originNumbers];
console.log("3.배열 복사하기(얕은카피)",newNumbers);



//객체에 대한 Operator 연산자 사용하기 

//4.객체 복사하기(얕은복사-1Depth까지만 데이터 복사됨)
const myCar ={
    brand:"Ford",
    model:"Mustang",
    color:"red",
};

const newCar = {...myCar};
//const newCar =myCar;

newCar.brand = "KIA";

console.log("MyCar",myCar);
console.log("newCar",newCar);


//5.단일객체 특정속성/변경/추가 복사하기 
const companyCar ={
    brand:"Ford",
    model:"Mustang",
    color:"red",
};

const newCompanyCar = {...companyCar,brand:"KIA",model:"K8",price:1000};
console.log("복사한 객체의 속성값을 변경하거나 추가할수있다.",newCompanyCar);


//6.여러 객체를 병합하기
const myVehicle = {
    brand:"Ford",
    model:"Mustang",
    color:"red",
};


const updateMyVehicle ={
    type:"car",
    year:2021,
    color:"yellow"
}

const myUpdateVehicle={...myVehicle,...updateMyVehicle};

console.log("병합된 객체 결과:",myUpdateVehicle);



//7. 객체의 딥속성 변경하기
// 얕은 카피는 기본적으로 객체의 1Depth까지만 복사되지만 2,3Depth값도 얕은복사 기능을 이용해서 데이터를 복사할수있습니다
const order ={
    orderNo :1000,
    orderName:"강창훈",
    price:3000,
    products:[
        {pid:1,productName:'LG노트북'},
        {pid:2,productName:'LG마우스'}
    ],
    address:{
        zipeCode:"1111",
        sido:"경기도",
        detail:"성남시 수정구"
    }
};


const newOrder = {
    ...order,
    products:[...order.products.map((p)=>{
        if(p.pid === 1){
            return {...p,productName:"제품병 변경"}
        }
        return p;
    })]
    ,address:{...order.address,zipeCode:"2222"}
}

console.log("객체의 얕은복사 기능을 이용한 깊은복사기능 구현하기",newOrder);



























