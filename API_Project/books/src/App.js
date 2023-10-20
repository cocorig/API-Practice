import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/productList") // Replace with your API endpoint
      .then((response) => {
        const item = response.data.item;
        setProductList(item);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>베스트 셀러</h1>
      <ul>
        {productList.map((product) => (
          <li key={product.itemId}>
            <div>
              <img src={product.cover} alt={product.title} />
            </div>
            <div>
              <h2>제목:{product.title}</h2>
              <p>저자:{product.author}</p>
              <p>가격: {product.priceSales} KRW</p>
              <p>{product.publisher}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
