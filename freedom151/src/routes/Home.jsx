import React from 'react'
import { Flex, Box, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <Flex h={"80vh"} w={"100%"} justify={"center"} align={"center"} gap={"20px"}>
         <Link to='/login'> <Button fontSize={"24px"} > Admin </Button></Link>
         <Link to='/user'><Button fontSize={"24px"} > User </Button></Link>
    </Flex>
  )
}
