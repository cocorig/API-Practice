import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ItemNewAll() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/ItemList") // Replace with your API endpoint
      .then((response) => {
        console.log(response);
        const item = response.data.item;
        setProductList(item);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>신간도서</h1>
      <ul>
        {productList.map((product) => (
          <li key={product.itemId}>
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
