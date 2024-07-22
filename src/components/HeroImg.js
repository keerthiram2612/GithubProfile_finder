import "./HeroImageStyle.css"
import IntroImg from "../assets/intro-bg.jpg"
import React from 'react'
import { Link } from "react-router-dom"

export default function HeroImg() {
  const handleClick=()=>{
    window.location.href="https://github.com/keerthiram2612?tab=repositories"
  }
  return (
    <div className="hero">
       <div className="mask">
        <img className="intro-img" src = {IntroImg} alt = "IntroImg"/>
       </div>
       <div className="content">
        <h1>Github Profile Finder</h1>
        <p>GitHub Profile Finder is a powerful tool designed to help you effortlessly search for GitHub profiles.
          </p>
        <div>
            <Link  onClick={handleClick} to = "/finder" className="btn">Finder</Link>
            <Link   to = "/contact" className="btn">Queries</Link>
        </div>
       </div>
    </div>
  )
}
