import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Rules from '../components/Rules'
import HeroImage from '../components/HeroImage'

const Park = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage heading='Park Rules'/>
        <Rules/>
        <Footer/>

    </div>
  )
}

export default Park