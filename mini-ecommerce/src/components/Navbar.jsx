import { Flex,Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <Flex px={"25px"} py={"15px"} justify={"space-between"} borderBottom={"1px solid #ccc"} mb={"20px"}> 
       <Box fontSize={"18px"} fontWeight={"700"} >
            <Link to="/"> <Text  _hover={{color:"red"}}>Home</Text></Link>
       </Box>

       <Flex fontSize={"18px"} fontWeight={"700"} gap={"15px"} >
            <Link to="/"><Text  _hover={{color:"red"}}>Products</Text></Link>
            <Link to="/cart" ><Text  _hover={{color:"red"}}>Cart</Text></Link>
       </Flex>
    </Flex>
  )
}
