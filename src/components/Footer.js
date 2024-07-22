import { FaHome, FaPhone ,FaMailBulk, FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"
import "./FooterStyle.css"
import { Link } from "react-router-dom"
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
        <div className="contact-us">
         <Link to ="queries"><h4>Contact Us</h4></Link>
          <p>Email: <a href="mailto:support@githubfinderapp.com">support@githubfinderapp.com</a></p>
        </div>
        <div className="footer-bottom">
        <p>© 2024 GitHub Profile Finder. All rights reserved.</p>
      </div>
      <div className="legal">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>
      <div className="social">
        <FaLinkedin onClick={handleClick}size={30} style={{color:"white",marginRight:"1rem"}}/>
        <FaInstagram onClick={handleClick1}size={30} style={{color:"white",marginRight:"1rem"}}/>
        <FaGithub  onClick={handleClick2}size={30} style={{color:"white",marginRight:"1rem"}}/>
        </div>
        </div>
      </div>
  )
}
