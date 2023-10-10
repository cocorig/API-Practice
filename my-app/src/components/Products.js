import { useEffect, useState } from "react"
import Product from "./Product";

export default function Products({productList}) {

  console.log(productList);
  
  return (
    <>
     <ul>
     {productList.map((product) => (
        <Product
        key={product.id}
        name={product.productName
        }
        price={product.price
        } 
        />
      ))}
    </ul>
    
    </>
  )
}
