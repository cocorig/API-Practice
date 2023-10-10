import React from 'react'

export default function Product(props) {

  return (
    <div>
      <h3>{props.name}</h3>
      <p>$ price :{props.price}</p>
   </div>
  )
}
