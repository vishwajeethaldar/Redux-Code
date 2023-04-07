import { Box,Flex, Input, Button} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useToast } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { authLogin } from '../store/authSlice'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [usercred, setUsercred] = useState({email:"", password:""})
  const [loginReq, setLoginReq] = useState(false)
  const toast = useToast()
  const auth = useSelector(store=>store.auth)
  const dispatch= useDispatch()
  const navigate = useNavigate()
  
  const handleChange = (e)=>{
      const {name, value} = e.target;
      setUsercred({...usercred, [name]:value})

  }

  const handleLogin=()=>{
    dispatch(authLogin(usercred))
    setLoginReq(true)
  }

  useEffect(()=>{
    if(auth.isAuth && loginReq){
      toast({
        title: 'Logged In Successfully.',
        description: ".",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      setUsercred({email:"", password:""})
      setLoginReq(false)
      navigate("/data")
    }

    if(auth.error){
      toast({
        title: 'Logged In Failed.',
        description: ".",
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }

  },[auth])

  useEffect(()=>{
    if(auth.isAuth){
      navigate("/data")
    }
  },[])

  return (
    <>
    <Navbar/>
    <Box w={["90%", "80%", "60%", "40%"]} mx={"auto"} p={"10px"}border={"1px solid #ccc"}>
        
        <Flex direction={"column"} textAlign={"left"}  gap={"15px"}>
        <Box my={"10px"} textAlign={"center"} fontWeight={"bold"} fontSize={"24px"}> Login </Box>
          <Box>Email :</Box>
          <Input type="text"  name={"email"} placeholder={"email"} value={usercred.email} onChange={handleChange}/>
          <Box>Password :</Box>
          <Input type="text" name={"password"} placeholder={"passoword"} value={usercred.password} onChange={handleChange}/>
          <Button onClick={handleLogin}>Login</Button>
        </Flex>
    </Box>
    </>
  )
}
