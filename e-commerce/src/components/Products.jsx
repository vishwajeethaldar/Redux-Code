import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../features/products/productSlice'
import style from '../styles/Products.module.css'
import Pagination from './Pagination'
import ProductCard from './ProductCard'
export default function Products({token}) {
  const [page, setPage] = useState(0)
  const [products, setProducts] =  useState([])
  const product = useSelector(store=>store.productSlice)
  const dispatch = useDispatch()

  const getProducts = async(skip)=>{
      // const res =  await axios.get(`https://dummyjson.com/products?limit=12&skip=${skip}`)
      dispatch(getAllProducts(skip))
  }

  useEffect(()=>{
    getProducts(page)
    console.log(products);
  },[page])

  useEffect(()=>{
    // getProducts(page)
    // console.log(products);
    // console.log(product);
    setProducts(product.products)
  },[product])

  return (
    <div>
      <div className={style.productsCon}>
      {products.map((item)=>{
        return <ProductCard key={item.id} title={item.title} description={item.description} price={item.price} thumbnail={item.thumbnail} brand={item.brand}/>
      })}

     
    </div>
     <Pagination page={page} setPage={setPage}/>
    </div>
  )
}
