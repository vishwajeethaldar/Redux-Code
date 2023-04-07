import { Routes, Route } from "react-router-dom";

import React, { Component } from 'react'
import { render } from "react-dom";
import Home from "./Home";
import JobPost from "./JobPost";
import JobList from "./JobList";

// import React from 'react'

export default class MainRoutes extends Component {
  render(){
    return (
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/jobpost"  element={<JobPost/>}/>
          <Route path="/joblist" element={<JobList/>}/>
      </Routes>
    )
  }
}

