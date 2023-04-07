import React from 'react'
import style from '../styles/ProductCard.module.css'
export default function ProductCard({title,description,price,thumbnail,brand}) {

  return (
    <div className={style.card}>
      <img src={thumbnail} alt="thumbnail" width={"100%"}  height={"200px"}/>
      <h2> {title}</h2>
      <p>{description}</p>
      <h2>Brand : {brand}</h2>
      <h2> Price : {price} </h2>
    </div>
  )
}
