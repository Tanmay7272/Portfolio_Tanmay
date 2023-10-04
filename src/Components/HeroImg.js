import "./HeroImgStyles.css";
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import { NavLink } from "react-router-dom";


const HeroImg = () => {
  return (
    <div className="hero">
    <div className="mask">
      <img className="intro-img"
      src={IntroImg} alt="IntroImg"/>
    </div>
    <div className="content">
      <p>HI, I'M TANMAY</p>
      <h1>A Web Developer</h1>
      <div>
        <NavLink to="/project" className="btn">Projects</NavLink>
        <NavLink to="/contact" className="btn btn-light">Contact</NavLink>

      </div>
    </div>
    </div>
  )
}

export default HeroImg;