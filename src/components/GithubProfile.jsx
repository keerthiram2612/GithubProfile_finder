import "./Githubstyle.css"
import React, { useState } from 'react'

export default function GithubProfile(){
  const [username,setUsername]=useState()
  function handleSubmit(){

  }
  return<div className="hero-image">
  <div className="github-profile-container">
     <div className="input-wrapper">
      <input type="text" name="search-by-username"
      placeholder="Search Github Username.."/>
      <button onClick={handleSubmit}Search></button>
     </div>
  </div>
  </div>
}
