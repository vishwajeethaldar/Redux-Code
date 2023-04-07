import React from 'react'
import { Link } from 'react-router-dom'
import {Flex, Box} from '@chakra-ui/react'
export default function Navbar() {
  return (
    <Flex mb={"10px"} px={"30px"} w={"100%"} gap="20px" justify={"flex-end"} py={"20px"} borderBottom={"1px solid #ccc"}>
        <Link to="/"> <Box fontSize={"18px"} fontWeight={"bold"}> Home </Box>  </Link>
        <Link to="/login"> <Box fontSize={"18px"} fontWeight={"bold"}> Login </Box>  </Link>
        <Link to="/data"><Box fontSize={"18px"} fontWeight={"bold"}> Data</Box> </Link>
        <Link to="/report"><Box fontSize={"18px"} fontWeight={"bold"}> Reports </Box></Link>
    </Flex>
  )
}
