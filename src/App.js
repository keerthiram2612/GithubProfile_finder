import React from "react";
import "./index.css" ;
import Home from "./routes/Home"
import Contact from "./routes/Contact"
import Project from "./routes/Project"
import About from "./routes/About"
import {Routes,Route} from "react-router-dom"
import Certificate from "./routes/Certificate"

function App() {
  return (
   <>
    <Routes>
      <Route path = "/" element ={<Home/>}/>
      <Route path = "/contact" element ={<Contact/>}/>
      <Route path = "/project" element ={<Project/>}/>
      <Route path = "/about" element ={<About/>}/>
      <Route path = "/certificate" element ={<Certificate/>}/>
    </Routes>
   </>
  );
}

export default App;
