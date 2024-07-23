import React from "react";
import "./index.css" ;
import Home from "./routes/Home"
import Contact from "./routes/Contact"
import About from "./routes/About"
import {Routes,Route} from "react-router-dom"
import Finder from "./routes/Finder"
import Repositories from "./components/Repositories";

function App() {
  return (
   <>
    <Routes>
      <Route path = "/" element ={<Home/>}/>
      <Route path = "/contact" element ={<Contact/>}/>
      <Route path = "/finder" element ={<Finder/>}/>
      <Route path = "/about" element ={<About/>}/>
      <Route path="/repositories/:login" element={<Repositories />} />
    </Routes>
   </>
  );
}

export default App;
