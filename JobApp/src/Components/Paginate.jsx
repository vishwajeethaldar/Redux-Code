import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'

export default function Paginate({range, total, onChange}) {
    const pages = Array(Math.ceil(total/10)).fill(0)
  return (
    <Flex justify={"center"} py={"20px"} gap={"20px"}>

            {pages.map((page, i)=>{
                return <Button onClick={()=>onChange({...range,start:(i+1)*10-10, end:(i+1)*10-1})} key={i}>{i+1}</Button>
            })}
    </Flex>
  )
}
