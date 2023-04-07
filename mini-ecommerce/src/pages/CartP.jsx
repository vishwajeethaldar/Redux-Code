import { Flex,Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'

export default function CartP() {
  const [cartItems, setCartitems] = useState([])
  const cart = useSelector(store=>store.cart)

  return (
    <div>
      <Navbar/>

    <Flex direction={"colimn"} h={"100vh"} overflow={"scroll"}>
       
    </Flex>

    </div>
  )
}
