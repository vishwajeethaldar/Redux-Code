import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import {Link} from "react-router-dom";

export default class Navbar extends React.Component{
    render(){
       return (
        <Flex borderBottom={"1px solid #ccc"} gap={"20px"} align={"center"} px={"25px"} h={"50px"}>
            <Link to={"/"} > 
                <Box fontSize={["20px"]} fontWeight={"bold"}  textTransform={"uppercase"} _hover={{color:"#f05"}}>
                    Jobs
                </Box>
            </Link>

            <Link to={"/jobpost"}> 
                <Box fontSize={["20px"]} fontWeight={"bold"}  textTransform={"uppercase"} _hover={{color:"#f05"}}>
                    Post New Job
                </Box>
            </Link>
        </Flex>
       ) 
    }
}