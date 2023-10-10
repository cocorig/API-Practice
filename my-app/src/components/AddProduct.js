
import React, { useRef } from "react";

export default function AddProduct(props) {
  const nameRef = useRef('');
  const priceRef = useRef('');

  
// POST 데이터 생성
// const productData = {
//   "id": 9,
//   "productName": "워케이션, 리케이션 책과 맵",
//   "price": 10000,
//   "stockCount": 1,
//   "viewCount": 0,
//   "pubDate": "2022-11-28",
//   "modDate": "2022-11-28"
// };
const ProductAddHandler = (e) =>{
  e.preventDefault();

  const productData = { // 전달할 데이터 생성
    "productName": nameRef.current.value,
    "price": priceRef.current.value,
  }

  props.AddProduct(productData)
}
  return (
    <form onSubmit={ProductAddHandler}>
      <div>
        <label htmlFor="productName"></label>
        <input type="text" id="productName" ref={nameRef}/>
      </div>
      <div>
        <label htmlFor="productPrice"></label>
        <input type="number" id="productPrice" ref={priceRef}/>
      </div>
      <button>제품 추가</button>
    </form>
  )
}
