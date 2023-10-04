import"./FooterStyles.css";
import React from 'react';
import {  FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";




const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff" ,marginRight:"2rem"}}/> 
                <div>
                    <p>Pimpri-Chinchwad,</p>
                    <p>Pune.</p>
                </div>
                </div>
            <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
            +91-7776974130.</h4>
            </div>
            <div className="email">
                
                <h4><FaMailBulk size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
            tanmaydandile2000@gmail.com</h4>
            </div>
            </div>   
        <div className="right">
        <h4>About me</h4>
        <p>This is Tanmay Dandile and I enjoy discussing new projects and design challanges.</p>
        <div className="social">
        <FaInstagram 
        size={30} 
        style={{color:"#fff",
        marginRight:"1rem"}}/>
        <FaGithub
        size={30} 
        style={{color:"#fff",
        marginRight:"1rem"}}/>
    
        <FaLinkedin
        size={30} 
        style={{color:"#fff",
        marginRight:"1rem"}}/>
        </div>
    </div>
    </div>
    </div>


  )
}

export default Footer;