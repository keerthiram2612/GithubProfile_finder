import "./Formstyle.css"
import React from 'react'

export default function form() {
  return (
    <div className="form">
      <form>
        <label>Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="text"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea row = "6" placeholder="Type your message here"/>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}
