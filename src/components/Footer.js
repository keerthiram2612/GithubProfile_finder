import { FaHome, FaPhone ,FaMailBulk, FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"
import "./FooterStyle.css"

import React from 'react'

export default function Footer() {
  const handleClick =()=>{
    window.location.href="https://www.linkedin.com/in/keerthana-rajaram-66aa33242/"
  }
  const handleClick1=()=>{
    window.location.href = "https://www.instagram.com/keerthana_rajaram/"
  }
  const handleClick2=()=>{
    window.location.href="https://github.com/keerthiram2612"
  }
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={25} style={{color:"white",marginRight:"2rem"}}/>
                <p>72 A Ambedkar nagar,
                Chennai.</p>
                
            </div>
            <div className="phone">
                <h4><FaPhone size={20} style={{color:"white",marginRight:"2rem"}}/>+91 6382819707</h4>
            </div>
            <div className="email">
            <h4><FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}}/>keerthiram2612@gmail.com</h4>
            </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>This is Keerthana FrontEnd developer .
            I enjoy discussing <br/>
            new projects and design 
            challenges. </p>
            <div className="social">
        <FaLinkedin onClick={handleClick}size={30} style={{color:"white",marginRight:"1rem"}}/>
        <FaInstagram onClick={handleClick1}size={30} style={{color:"white",marginRight:"1rem"}}/>
        <FaGithub  onClick={handleClick2}size={30} style={{color:"white",marginRight:"1rem"}}/>
        </div>
        </div>
      </div>
    </div>
  )
}
