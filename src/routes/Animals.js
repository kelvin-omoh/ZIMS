import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import AnimalImages from '../components/AnimalImages'

const Animals = (props) => {
  return (
    <div>
        <Navbar/>
        <HeroImage heading='Our Animals'/>
        <AnimalImages/>

        <Footer/>


    </div>
  )
}

export default Animals