import React from 'react'
import "./AboutContentstyle.css"
import { Link } from 'react-router-dom'
import React1 from "../assets/react1.jpg"
import React2 from "../assets/react2.webp"

export default function AboutContent() {
  return (
    <div className='about'>
      <div className='left'>
        <h1>What is GiPFi?</h1>
        <p>Welcome to GitHub Profile Finder, a powerful and user-friendly application built with React! Our tool allows you to easily search for GitHub profiles and explore detailed information about developers and repositories. Whether you're a recruiter, a fellow developer, or just curious about a specific GitHub user, our application provides a seamless experience to find and view profiles effortlessly.</p>
        <Link to = "/contact">
        <button className='btn'>contact</button>
        </Link>
      </div>
      <div className='right'>
        <div className='img-container'>
          <div className='img-stack top'>
              <img src= {React2}  className="img" alt='image'/>
            </div>
          <div className='img-stack bottom'>
              <img src= {React1}  className="img" alt='image'/>
            </div>
        </div>
      </div>
    </div>
  )
}
