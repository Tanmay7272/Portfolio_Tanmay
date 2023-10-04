import "./AboutContentStyles.css";

import React from 'react'
import { NavLink } from "react-router-dom";
import allicons from "../assets/allicons.jpg";
import react1 from "../assets/react1.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left"> 
        <h1>Who am i?</h1>
        <p>i'm Full Stack web developer,
            I create responsive and secure websites for my Clients.
            </p>
        <NavLink to="/contact">
          <button className="btn">Contact</button>
        </NavLink>
       
      </div>
      <div className="right">
        <div className="image-container">
          <div className="image-stack top">
            <img src={allicons}
            className="image" alt="all"/>
          </div>
          <div className="image-stack bottom">
            <img src={react1}
            className="image" alt="all"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent