import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import { useCallback, useEffect  , useState} from 'react';
import AddProduct from './components/AddProduct';
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
      console.log(data);
    }catch(error){
      console.error('실패', error)
    }
  },[]);

  useEffect(()=>{
    fetchProductsHandler()
  },[fetchProductsHandler],);


  async function addProductsHandler(productData){
    try {
      const response = await fetch('http://localhost:3001/product', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData)
      });
      const data = await response.json();
  
      // Refresh the product list after adding a new product
      fetchProductsHandler();
    } catch (error) {
      console.error('추가하기 실패', error);
    }

  }

  return (
    <div>
      <section>
      <Products productList = {products}/>
      </section>
    <section>
      <AddProduct AddProduct = {addProductsHandler}/>
    </section>
  </div>
  );
}

export default App;
