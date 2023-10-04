import React from 'react'
import Navbar from "../Components/Navbar";

import Footer from "../Components/Footer";
import HeroImg2 from '../Components/HeroImg2';
import Fillform from "../Components/Fillform";

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Contact" text="Lets have a chat"/>
      <Fillform/>
      <Footer/>
    </div>
  )
}

export default Contact;