
import { Box, Button, Flex, Select } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../store/actions/products.actions'
import ProductCard from './ProductCard'

export default function Products() {
const [allProuct, setAllProduct] =  useState([])
const [sorted, setSorted] =  useState([])
const dispatch = useDispatch()
const products = useSelector(store=>store.product)
const [page, setPage] = useState(1)
const [totalPages, setTotalPages] =  useState([1,2,3,4])

useEffect(()=>{
    dispatch(getAllProducts(page))
},[page])

useEffect(()=>{
  setAllProduct(products.products)
},[products.products])


function handleFilter(e){
  if(e.target.value===""){
    setAllProduct(products.products)
    return 
  }

  let filters = products.products.filter((product)=>{
    return product.category===e.target.value;
  })
  setAllProduct(filters)
}


async function handleSort(e){
  setSorted([])
  if(e.target.value==="asc"){
    let sorted = allProuct.sort((a,b)=>a.price-b.price)
    setAllProduct(sorted)

  }

  if(e.target.value=="dsc"){
    let sorted = allProuct.sort((a,b)=>b.price-a.price) 
    setAllProduct(sorted)
  }
 
}



  return (
    <>
    <Flex px={"20px"} gap="20px">
        <Select border={"1px solid blue"} onChange={handleFilter} w={"250px"} my={"20px"}>
          <option value="">Select Filter</option>
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kids">Kids</option>
          <option value="homedecor">Homedecor</option>
        </Select>

        <Select border={"1px solid blue"} onChange={handleSort} w={"250px"} my={"20px"}>
          <option value="">Sort by Price</option>
          <option value="asc">ASC</option>
          <option value="dsc">DSC</option>
        </Select>

    </Flex>
    <Flex gap={"10px"} wrap={"wrap"} justify={"center"}>
        {allProuct.map((product)=>{
            return (
               <Box key={product.id} w={["80%","80%","45%","24%" ]}>
                 <ProductCard id={product.id} title={product.title} image={product.image} category={product.category} price={product.price} brand={product.brand}/>
               </Box>
            )
        })}
    </Flex>
        
      <Flex gap={"5px"} justify={"center"} py={"15px"}>
        <Button onClick={()=>{
          setPage(page=>page-1)
        }} disabled={page===1} colorScheme={"facebook"}>
            &lt;
        </Button>

        {
           totalPages.map((pageNo, i)=>{
           
            return (
              <Button key={pageNo} w={"70px"} onClick={()=>{
                setPage(i+1)
              }} colorScheme={"facebook"} variant={"outline"} disabled={i+1===page}> {i+1} </Button>
            )
          })
        }
         <Button onClick={()=>{
          setPage(page=>page+1)
        }}
        disabled={page===products.totalPage} colorScheme={"facebook"}>
          &gt;
        </Button>
        </Flex>  
  
    </>
  )
}
