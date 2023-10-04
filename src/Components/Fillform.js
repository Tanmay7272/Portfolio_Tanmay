import "./FillformStyles.css"
import React from 'react'

const Fillform = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <input type="text"></input>
            <textarea rows={6} placeholder="Type Your Message Here."/>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Fillform