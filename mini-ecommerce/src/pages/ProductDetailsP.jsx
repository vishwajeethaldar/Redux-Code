import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Box, Button, Text,Image, Flex } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'

import { ADD_TO_CART } from '../store/types/products.types'
import { addToCart } from '../store/actions/cart.action'
import { ADD_PRODUCTS_TO_CARTS_SUCCESS } from '../store/types/cart.types'

export default function ProductDetailsP() {
const [product, setProduct]  = useState({})
const param =  useParams()
const products = useSelector(store=>store.product)
const cart = useSelector(store=>store.cart)
const dispatch = useDispatch();
const navigate= useNavigate()


useEffect(()=>{
  let prod = products.products.filter((product)=>{
    return product.id==param.id
  })
  setProduct(prod[0])

},[])


  return (
    <div>
       <Navbar/>
        <Flex boxShadow={"lg"} p={"20px"} w={["80%", "80%", "45%", "45%"]} margin={"auto"} direction={"column"} gap={"15px"} justify="flex-start" textAlign={"left"}>
            <Text pl={"5px"} fontSize={["18px", "20px", "22px", "22px"]}>  Product Name : {product.title}  </Text>
            <Image src={product.image} alt={product.title} borderRadius={"10px"}/>
            <Text> <strong> Price : </strong> {product.price}</Text>
            <Text>
              <strong>Description</strong>
              <br/>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente impedit ipsum a at unde, qui, accusamus sed doloribus deserunt excepturi, facere commodi sequi. Nihil inventore tenetur, quas enim quam itaque?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quos impedit asperiores libero eaque quo quae maxime a adipisci dolore. Nostrum, voluptas ipsum! Officiis deleniti ex iusto illum eligendi dolore!
            </Text>
            
            <Flex gap={"25px"} >
              <Button  colorScheme={"linkedin"} onClick={()=>navigate(-1)}> Back To Products</Button>
              <Button colorScheme={"linkedin"} onClick={()=>{
                dispatch(addToCart(product))
                navigate('/cart')
              }}> 
                  Add To Cart
              </Button>
            </Flex>

        </Flex>

    </div>
  )
}

// dispatch({type:ADD_TO_CART , payLoad:responce.data})