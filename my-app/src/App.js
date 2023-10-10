import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import { useCallback, useEffect  , useState} from 'react';
function App() {

  // 가져온 상품상태를 저장
  const [products , setProducts] = useState([])

  const fetchProductsHandler = useCallback(async()=>{
    try{
      // GET
      const response = await fetch('http://localhost:3001/product');

      if(!response.ok){
      throw new Error('가져오기 실패');
      }

     const data = await response.json(); // 받은 json형태를 자바스크립트 객체로 변환
      setProducts(data)
    }catch(error){
      console.error('실패', error)
    }
  },[]);
  console.log(products);
  useEffect(()=>{
    fetchProductsHandler()
  },[fetchProductsHandler]);

 
  return (
    <div>
    <Products productList = {products}/>
  </div>
  );
}

export default App;
