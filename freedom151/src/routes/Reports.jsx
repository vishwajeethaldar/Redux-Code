import { Box,Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Doughnut } from 'react-chartjs-2';


export default function Reports() {

  const data = {
    labels: ['Red', 'Orange', 'Blue'],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
        {
          label: 'Popularity of colours',
          data: [55, 23, 96],
          // you can set indiviual colors for each bar
          backgroundColor: [
            'rgba(255, 255, 255, 0.6)',
            'rgba(255, 255, 255, 0.6)',
            'rgba(255, 255, 255, 0.6)'
          ],
          borderWidth: 1,
        }
    ]
  }
  const auth = useSelector(store=>store.auth)
  const userData = useSelector(store=>store.app.data)
  const [reportData, setReportData] = useState({avrg:0,ageG1:[], ageG2:[], ageG3:[], student:[], professional:[]})
  const navigate = useNavigate()
  useEffect(()=>{
    if(!auth.isAuth){
      navigate("/login")
    }

  },[])

  useEffect(()=>{
      let a1 = userData.filter((user)=>{
        return user.age>=13 && user.age<18
      })

      let a2 = userData.filter((user)=>{
        return user.age>=18 && user.age<25
      })

      let a3 = userData.filter((user)=>{
        return user.age>25
      })
     let avrg = (a1.length+a2.length+a3.length)/3

     let student = userData.filter((user)=>{
      return user.profesion==="student"
    })

    let employed = userData.filter((user)=>{
      return user.profesion==="employed"
    })

    setReportData({avrg:avrg,ageG1:a1, ageG2:a2, ageG3:a3, student:student, professional:employed})
  console.log(reportData, userData);
  },[userData])
  console.log(Doughnut);
  return (
    <Box>
       <Navbar/>

       <Box>
          <Box textAlign={"center"} fontSize={"24px"}>
              Registration Details
          </Box>
          <Flex gap={"35px"}  px={"20px"} mt={"25px"} fontSize={"18px"}>
            <Box>
              <Box> Age Group Between 13-18 : <strong>{reportData.ageG1.length}</strong> </Box>
              <Box> Age Group Between 18-25 : <strong>{reportData.ageG2.length}</strong> </Box>
              <Box> Age Group Greater 25 : <strong>{reportData.ageG3.length}</strong> </Box>
            </Box> 

            <Box>
                <Box> Average : <strong>{reportData.avrg.toFixed(2)}</strong> </Box>
             
            </Box> 

            <Box>
                <Box> Students : <strong>{reportData.student.length}</strong> </Box>
                <Box> Profesionals : <strong>{reportData.professional.length}</strong> </Box>
            </Box> 
            
            </Flex>
       </Box>

      
       {/* <Doughnut data={data} /> */}
    </Box>
  )
}
