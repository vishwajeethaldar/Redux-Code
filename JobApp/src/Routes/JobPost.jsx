import { Box, Flex, FormLabel, Input, Select, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../Components/Navbar";
import { addnewPost } from "../store/jobs/action";


export default function JobPost() {
   const dispatch  = useDispatch()
    const [jobInfo, setJobInfo] = useState({
        "company": "",
        "postedAt": "",
        "city": "",
        "location": "",
        "role": "",
        "level": "",
        "contract": "",
        "position": "",
        "language": ""
    })

    const  handleChnage = (e)=>{
        let {name, value} = e.target;
        setJobInfo({...jobInfo, [name]:value})
    }

    const handlePost = (e)=>{
        e.preventDefault()
        dispatch(addnewPost(jobInfo))
        alert("posted Successfully")
    }
    return (
        <Box>
            <Navbar/>
            <Box mt={"20px"} w={["90%", "80%", "50%","45%"]} mx={"auto"} px={"15px"} py={"15px"} bg={"#eee"}>
            <Box textAlign={"center"} fontSize={"22px"} fontWeight={"bold"}> Post New Job</Box>
            <form onSubmit={handlePost}>
                <Flex direction={"column"}>
                    <FormLabel pt={"10px"}> Company name </FormLabel>
                    <Input onChange={handleChnage} type={"text"} name={"company"} placeholder={" Company Name"} value={jobInfo.company}/>
                    <FormLabel pt={"10px"}> City </FormLabel>
                    <Input onChange={handleChnage} type={"text"} name={"city"} placeholder={" City Name"} value={jobInfo.city}/>
                    <FormLabel pt={"10px"}> Location</FormLabel>
                    <Input onChange={handleChnage} type={"text"} name={"location"} placeholder={" Location"} value={jobInfo.location}/>
                    <FormLabel pt={"10px"}> Role </FormLabel>
                   
                   <Select onChange={handleChnage} name="role" value={jobInfo.role}>
                        <option value={""}>
                                Select Role
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

                    <FormLabel pt={"10px"}> Level  </FormLabel>
                    <Select onChange={handleChnage} name="level" value={jobInfo.level}>
                        <option value={""}>
                                Select Level
                        </option>
                        <option value={"junior"}>
                                Junior
                        </option>
                        <option value={"senior"}>
                                Senior
                        </option>
                    </Select>
                    <FormLabel pt={"10px"}> Position  </FormLabel>
                    <Select onChange={handleChnage} name={"position"} value={jobInfo.position}>
                        <option value="">Select Position</option>
                        <option value="Backend Developer">Backend Developer</option>
                        <option value="Junior Frontend Developer">Junior Frontend Developer</option>
                        <option value="Junior Backend Developer">Junior Backend Developer</option>
                        <option value="FSD">FSD</option>
                    </Select>

                    <FormLabel pt={"10px"}> Language  </FormLabel>
                    <Input onChange={handleChnage} type={"text"} name={"language"} placeholder={"Seperate Languages by Comma `,` ex - C,C++,JAVA"} value={jobInfo.language}/>
                    {/* <Select onChange={handleChnage} name={"language"} value={jobInfo.language}>
                        <option value="">Select Language</option>
                        <option value="Javascript">Javascript</option>
                        <option value="Java">Java</option>
                        <option value="C">C</option>
                        <option value="C++">C++</option>
                    </Select> */}
                    <FormLabel pt={"10px"}> Contract  </FormLabel>
                    <Select onChange={handleChnage} name={"contract"} value={jobInfo.contract}>
                        <option value="">Select Contract</option>
                        <option value="fulltime">Full Time</option>
                        <option value="parttime">Part Time</option>
                    </Select>
                    <FormLabel pt={"10px"}> Date  </FormLabel>
                    <Input onChange={handleChnage} type={"date"} name={"postedAt"} placeholder={"Post Date"} value={jobInfo.postedAt}/>
                    <Button type="submit" mt={"20px"} colorScheme={"facebook"}> Post Job </Button>
                </Flex>
            </form>
            </Box>

        </Box>
    )
}

// export default class JobPost extends React.Component{
//     constructor(props){
//         super(props)

//         this.state = {
//             jobInfo:{
//                 "company": "",
//                 "postedAt": "",
//                 "city": "",
//                 "location": "",
//                 "role": "",
//                 "level": "",
//                 "contract": "",
//                 "position": "",
//                 "language": ""
//             }
//         }

//         // this.handleChnage = this.handleChnage.bind(this)
//     }

//     handleChnage = (e)=>{
//         let {name, value} = e.target;
//         this.setState({jobInfo:{...this.state.jobInfo, [name]:value}})
//         console.log(this.state);
//     }

//     render(){
//         return (
//             <Box>
//                 <Navbar/>
//                 <Box mt={"20px"} w={["90%", "80%", "50%","45%"]} mx={"auto"} px={"15px"} py={"15px"} bg={"#eee"}>
//                 <Box textAlign={"center"} fontSize={"22px"} fontWeight={"bold"}> Post New Job</Box>
//                 <form >
//                     <Flex direction={"column"}>
//                         <FormLabel pt={"10px"}> Company name </FormLabel>
//                         <Input onChange={this.handleChnage} type={"text"} name={"company"} placeholder={" Company Name"} value={jobInfo.company}/>
//                         <FormLabel pt={"10px"}> City </FormLabel>
//                         <Input onChange={this.handleChnage} type={"text"} name={"city"} placeholder={" City Name"} value={jobInfo.city}/>
//                         <FormLabel pt={"10px"}> Location</FormLabel>
//                         <Input onChange={this.handleChnage} type={"text"} name={"location"} placeholder={" Location"} value={jobInfo.location}/>
//                         <FormLabel pt={"10px"}> Role </FormLabel>
                       
//                        <Select onChange={this.handleChnage} name="role" value={jobInfo.role}>
//                             <option value={""}>
//                                     Select Role
//                             </option>
//                             <option value={"frontend"}>
//                                     Frontend
//                             </option>
//                             <option value={"backend"}>
//                                     Backend
//                             </option>
//                             <option value={"fullstack"}>
//                                     FullStack
//                             </option>
//                         </Select>

//                         <FormLabel pt={"10px"}> Level  </FormLabel>
//                         <Select onChange={this.handleChnage} name="level" value={jobInfo.level}>
//                             <option value={""}>
//                                     Select Level
//                             </option>
//                             <option value={"junior"}>
//                                     Junior
//                             </option>
//                             <option value={"senior"}>
//                                     Senior
//                             </option>
//                         </Select>
//                         <FormLabel pt={"10px"}> Position  </FormLabel>
//                         <Select onChange={this.handleChnage} name={"position"} value={jobInfo.position}>
//                             <option value="">Select Position</option>
//                             <option value="Backend Developer">Backend Developer</option>
//                             <option value="Junior Frontend Developer">Junior Frontend Developer</option>
//                             <option value="Junior Backend Developer">Junior Backend Developer</option>
//                             <option value="FSD">FSD</option>
//                         </Select>

//                         <FormLabel pt={"10px"}> Language  </FormLabel>
//                         <Select onChange={this.handleChnage} name={"language"} value={jobInfo.language}>
//                             <option value="">Select Language</option>
//                             <option value="Javascript">Javascript</option>
//                             <option value="Java">Java</option>
//                             <option value="C">C</option>
//                             <option value="C++">C++</option>
//                         </Select>
//                         <FormLabel pt={"10px"}> Contract  </FormLabel>
//                         <Select onChange={this.handleChnage} name={"contract"} value={jobInfo.contract}>
//                             <option value="">Select Contract</option>
//                             <option value="fulltime">Full Time</option>
//                             <option value="parttime">Part Time</option>
//                         </Select>
//                         <FormLabel pt={"10px"}> Date  </FormLabel>
//                         <Input onChange={this.handleChnage} type={"date"} name={"postedAt"} placeholder={"Post Date"} value={jobInfo.postedAt}/>
//                         <Button mt={"20px"} colorScheme={"facebook"}> Post Job </Button>
//                     </Flex>
//                 </form>
//                 </Box>

//             </Box>
//         )
//     }
// }