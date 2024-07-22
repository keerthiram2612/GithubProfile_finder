import React from 'react'
import "./AboutContentstyle.css"
import { Link } from 'react-router-dom'
import React1 from "../assets/react1.jpg"
import React2 from "../assets/react2.webp"

export default function AboutContent() {
  return (
    <div className='about'>
      <div className='left'>
        <h1>Who Am I?</h1>
        <p>I am a react front-end developer. I create responsive & secure websites for my clients.</p>
        <Link to = "/contact">
        <button className='btn'>contact</button>
        </Link>
      </div>
      <div className='right'>
        <div className='img-container'>
          <div className='img-stack top'>
              <img src= {React1}  className="img" alt='image'/>
            </div>
          <div className='img-stack bottom'>
              <img src= {React2}  className="img" alt='image'/>
            </div>
        </div>
      </div>
    </div>
  )
}
