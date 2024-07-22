import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HeroImage2 from '../components/HeroImage2'

export default function Project() {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading = "PROJECTS." text="Some of my most recent works"/>
      <Footer/>
    </div>
  )
}
