import { Flex, Image,Box } from '@chakra-ui/react'
import React from 'react'

export default function JobCard({jobIn}) {
  return (
    <Flex justify={"space-between"} bg={"#fff"} height={"200px"} w={"100%"}  px={"25px"} boxShadow={"lg"} align={"center"}>
         <Flex  gap={"25px"} align={"center"}>
            <Image src={"https://loremflickr.com/320/240"} w={"150px"} h={"150px"} borderRadius={"50%"}/>
            <Box>
                {jobIn.company}
                <Box>
                {jobIn.position}
                </Box>
                <Flex>
                    {jobIn.postedAt}
                    {jobIn.contract}
                    {jobIn.location}
                </Flex>
            </Box>
         </Flex>
        <Flex gap={"20px"} align={"center"} >

            <Box>
            {jobIn.role}
            </Box>
            
           <Box>
           {jobIn.level}
           </Box>
            {jobIn.language.split(",").map((item)=>{
                return (
                    <Box key={item}>
                        {item}
                    </Box>
                )
            })}
          
        </Flex>
    </Flex>
  )
}
