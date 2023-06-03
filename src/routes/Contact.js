import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Form from '../components/Form'
import Footer from '../components/Footer'
import Accodion from '../components/Accodion'
import ContactQuestion from '../components/ContactQuestion'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading=''/>
        <Form/>
        <Accodion/>
        <ContactQuestion />
        <Footer/>



    </div>
  )
}

export default Contact