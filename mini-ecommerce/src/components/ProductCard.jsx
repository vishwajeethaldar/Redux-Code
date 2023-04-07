import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

import { Link } from 'react-router-dom'

export default function ProductCard({id, brand, title, image, category, price}) {



  return (
    <Flex border={"1px solid #ccc"} p={"15px"} direction={"column"} gap={"10px"} textAlign={"left"} fontSize={"20px"} boxShadow={"lg"}> 
        <Image src={image} alt={title}/>
        <Text><strong>Brand:</strong> {brand}</Text>   
        <Text><strong>Title:</strong> {title}</Text>   
        <Text><strong>Category:</strong> {category}</Text>   
        <Text><strong>Price: </strong>{price}</Text>   
        <Link to={`/product/${id}`}>
            <Button colorScheme={"blue"}>View Details</Button>
        </Link>
    </Flex>
  )
}
