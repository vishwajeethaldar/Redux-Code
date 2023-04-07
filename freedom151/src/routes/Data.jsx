import { Box, Flex, Image, Input, Select} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import UserCard from '../components/UserCard'
import { getRegisteredUsers } from '../store/appSlice'

export default function Data() {
  const auth = useSelector(store=>store.auth)
  const app = useSelector(store=>store.app)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [udata, setUData] = useState([])
  const [countryNm, setCountryNm] = useState([])

  const handleSearh = (e)=>{
    if(e.target.value===""){
      setUData(app.data)
      return
    }
    let serached = app?.data.filter((item)=>{
        return item?.name.toUpperCase().includes(e.target.value.toUpperCase())
    })
    setUData(serached)
  }

  const handleFilter = (e, type)=>{
      let val = e.target.value
      let filData = [];
  
      if(val===""){
        setUData(app.data)
        return  
      }

    if(type==="country"){
       filData = app.data.filter((user)=>{
        return user.country===val
      })
    }

    if(type==="gender"){
      filData =  app.data.filter((user)=>{
        return user.gender===val
      })
    }
    setUData(filData)
  }

  useEffect(()=>{
    if(!auth.isAuth){
      navigate("/login")
    }else{
      dispatch(getRegisteredUsers("jeet"))
    }
    
  },[])


  useEffect(()=>{
    setUData(app.data)
    let country = {}
    for(let user of app.data){
      country[user.country] = user.country
    }
    setCountryNm(Object.values(country))
  },[app])

  return (
    <>
    <Navbar/>

    <Box>
      <Flex gap={"20px"}> 
        <Input type="text" placeholder={"search by name"} onChange={handleSearh}/>
         <Select onChange={(e)=>handleFilter(e, "gender")}>
            <option value=""> Filter By Gender</option>
            <option value="male"> Male</option>
            <option value="female"> Female</option>
         </Select>
         <Select onChange={(e)=>handleFilter(e, "country")}>
              <option value=""> Filter By Country</option>
              {countryNm.map((country)=>{
                return  <option key={country} value={country}> {country}</option>
              })}
         </Select>
        </Flex>
      <Flex>
      {
       udata&&udata?.map((user)=>{
          return <Box key={user.id} w={"24%"}>
              <UserCard user={user}/>
          </Box>
        })
      }
      </Flex>
    </Box>
    </>
  )
}
