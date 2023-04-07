import { Box,Flex, Input,Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import Navbar from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "../store/jobs/action";
import JobCard from "../Components/JobCard";
import Paginate from "../Components/Paginate";


export default function Home() {
    const josList = useSelector(store=>store.jobsreducer)
    const dispatch =  useDispatch()
    const [jobs, setJobs] = useState([])
    const [range, setRange] = useState({start:0, end:9})

    const handleSearch = (e)=>{
        let val = e.target.value
        if(val===""){
            setJobs(josList?.jobs)
            return
        }
        // let x = "ss"
        // x.toUpperCase
        let searched = josList?.jobs.filter((job)=>{
                return job.language.toUpperCase().includes(val.toUpperCase())
        })
        setJobs(searched)
    }


    const filterRole = (e)=>{
        let val = e.target.value
        if(val===""){
            setJobs(josList?.jobs)
            return
        }
        let searched = josList?.jobs.filter((job)=>{
            return job.role === val
    })
    setJobs(searched)
    }


    useEffect(()=>{
        dispatch(getAllPost())
    },[])

    useEffect(()=>{
        let newList = josList?.jobs.filter((item, i)=>{
            return i<=range.end && i>=range.start
        })
     
       setJobs(newList)
    },[josList])

    useEffect(()=>{
        let newList = josList?.jobs.filter((item, i)=>{
            return i<=range.end && i>=range.start
        })
        console.log(newList, range);
        setJobs(newList)
     },[range])
    return (
        <Box h={"80vh"} w={"100%"} bg={"#eef"}> 

            <Navbar/>

            <Flex gap={"20px"} mt={'20px'} bg={"#fff"} py={"10px"} px={"20px"}>
                <Input type={"text"} placeholder={"search"}  onChange={handleSearch} w={"300px"} />
            
                <Select onChange={filterRole} name="role" w={"300px"}>
                        <option value={""}>
                                Filter by Role
                        </option>
                        <option value={"frontend"}>
                                Frontend
                        </option>
                        <option value={"backend"}>
                                Backend
                        </option>
                        <option value={"fullstack"}>
                                FullStack
                        </option>
                    </Select>
            </Flex>

            <Flex direction={"column"} gap={"20px"} w={"100%"} align={"center"} py={"20px"}>
            {
               jobs?.map((job, i)=>{
                return (
                   <JobCard jobIn={job} key={job.id}/>
                )
               }) 
            }  
            </Flex>
            <Paginate total={josList.jobs.length} range={range} onChange={setRange}/>
        </Box>
    )
}

// export default class Home extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {}
        
//     }

//     updateState=()=>{
//         let x  = useSelector(store=>store.jobsreducer)
//         this.setState({jobList:x})
//     }
//     componentDidMount=()=>{
 
//         console.log(this.state);
//     }
//     render(){
//         return (
            
//             <Box h={"80vh"} w={"100%"}>
//                 <this.updateState/>
//                 <Navbar/>
//                 <Flex>
//                     <Link>  </Link>    
//                 </Flex>  
//             </Box>
//         )
//     }
// }