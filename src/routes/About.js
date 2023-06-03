import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Abouts from '../components/Abouts'
import Testimonial from '../components/Testimonial'
import Adventure from '../components/Adventure'

const About = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage heading='About Us'/>
        <Abouts/>
        <Testimonial/>
        <Adventure/>
        <Footer/>

    </div>
  )
}

export default About