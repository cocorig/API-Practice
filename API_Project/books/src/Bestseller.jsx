import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Bestseller() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/productList")
      .then((response) => {
        const item = response.data.item;
        setProductList(item);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const onClick = (e) => {
    console.log(e);
  };
  return (
    <div>
      <h1>베스트 셀러</h1>
      <ul>
        {productList.map((product) => (
          <li key={product.itemId} onClick={onClick}>
            <div>
              <img src={product.cover} alt={product.title} />
            </div>
            <div>
              <h2>제목:{product.title}</h2>
              <p>저자:{product.author}</p>
              <p>{product.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
