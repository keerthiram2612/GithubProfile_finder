import React from "react";
import "./index.css" ;
import Home from "./routes/Home"
import Contact from "./routes/Contact"
import About from "./routes/About"
import {Routes,Route} from "react-router-dom"
import Finder from "./routes/Finder"

function App() {
  return (
   <>
    <Routes>
      <Route path = "/" element ={<Home/>}/>
      <Route path = "/contact" element ={<Contact/>}/>
      <Route path = "/finder" element ={<Finder/>}/>
      <Route path = "/about" element ={<About/>}/>
    </Routes>
   </>
  );
}

export default App;
