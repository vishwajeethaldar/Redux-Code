import { Box, Flex, Input, Radio, Select,RadioGroup, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { addnewUser } from '../store/appSlice';

export default function User() {
  const [regInfo, setregInfo] =  useState({name:"", age:"", gender:"", country:"", profession:""})
  const toast = useToast()
  const [netReq, setNetReq] = useState(false)
  const app = useSelector(store=>store.app)
  const dispatch = useDispatch()
  
  
  const handleChange = (e)=>{
    const {name, value} = e.target;
    setregInfo({...regInfo, [name]:value})
  }

  const handleRegistraton = ()=>{
      dispatch(addnewUser(regInfo))
      setNetReq(true)
      
  }

  useEffect(() => {
      if(netReq&&!app.loading&&!app.error){

        toast({
          title: 'Registerd Successfully.',
          description: "We've Registerd your information for you.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
        setNetReq(false)
      }
      
  }, [app])
  
  return (
    <>
    <Box w={["90%", "80%", "60%", "40%"]} mx={"auto"} p={"10px"}border={"1px solid #ccc"}>
      <Box my={"20px"} textAlign={"center"} fontWeight={"bold"} fontSize={"24px"}> Registration for Freedom 151</Box>
      <Flex direction={"column"} textAlign={"left"}  gap={"15px"}>
        <Box>Name :</Box>
        <Input type="text"  name={"name"} value={regInfo.name} onChange={handleChange}/>
        <Box>Age :</Box>
        <Input type="text" name={"age"} value={regInfo.age} onChange={handleChange}/>
        <Box>Gender :</Box>
       
        <Flex gap={"20px"}>
          {/* <Radio name={"gender"}value={"female"}/>Female
          <Radio name={"gender"}value={"male"}/>Male */}
          <input onChange={handleChange}  type="radio"name={"gender"} value={"female"} />Female
          <input  onChange={handleChange} type="radio"name={"gender"} value={"male"} />Male
        </Flex>
    
        <Box>Country :</Box>
        <Input type="text" name={"country"} value={regInfo.country} onChange={handleChange}/>
        <Box>Profession  :</Box>
        <Select name={"profession"} onChange={handleChange}>
        <option value="">
                Select Profession
          </option>
          <option value="student">
                Student
          </option>
          <option value="employed">
                Employed
          </option>
        </Select>
        <Button onClick={handleRegistraton} colorScheme={"green"}> Register </Button>
      </Flex>
      
    </Box>
      <Box mx={"auto"} w={"200px"}>
          <Link to="/"> <Button>Back to Home </Button></Link>
      </Box>
  </>
  )
}
