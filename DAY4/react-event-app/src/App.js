import logo from './logo.svg';
import './App.css';


//원시타입으로 정의된 상태값 컴포넌트 참조하기 
import PrimitiveTypeEvent from './PrimitiveTypeEvent';

//참조유형으로 정의된 상태값 컴포넌트 참조하기 
import ReferTypeEvent from './ReferTypeEvent';


//제품정보관리 컴포넌트 참조하기 
import ProductList from './Products';

function App() {
  return (
    <div className="App">

      {/* 원시타입으로 정의된  컴포넌트  */}
      {/* <PrimitiveTypeEvent></PrimitiveTypeEvent> */}

      {/* 참조유형으로 정의된 컴포넌트  */}
      {/* <ReferTypeEvent></ReferTypeEvent> */}


      <ProductList></ProductList>

    </div>
  );
}

export default App;
