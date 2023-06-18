import React, { useState } from 'react'
import Layout from '../components/Layout'
import NavDashboard from '../components/NavDashboard'
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebase';
const AnimalDetails = () => {
  const [cageNumber,setCageNumber]=useState('')
  const [animalName,setAnimalNAme]=useState('')
  const [feedNumber,setFeedNumber]=useState('')
  const [breed,setBreed]=useState('')
  const handleSubmit=async(e)=>{
    // alert("succeful")
    e.preventDefault()
   const items= {
    animalName,
    cageNumber,
    feedNumber,
    breed
   }
    try {
      const docRef = await addDoc(collection(db, "AnimalDetails"),items);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    alert("succeful")
    setAnimalNAme('')
    setCageNumber('')
    setFeedNumber('')
    setBreed('')

   
  }

  return (
    <div className=''>
        <Layout/>
        <NavDashboard/>

        <div className='absolute left-[13.5%] w-[81%] mt-40 ml-11 p-8 bg-zinc-100 z-[10]'>
            <h3 className='font-bold text-xl'>Add Animal Details</h3>
            <form    className=' w-full flex flex-col py-4 '>
                <label className='pb-1  pl-1'>Cage Number</label>
                <input required value={cageNumber} onChange={(e)=>setCageNumber(e.target.value)} className='p-2 border border-gray-400 bg-zinc-50' type='text' />
                <label className='pt-3 pl-1'>Animal Name</label>
                <input  required value={animalName} onChange={(e)=>setAnimalNAme(e.target.value)} className='p-2 border border-gray-400 bg-zinc-50'></input>
                <label className='pt-3 pl-1'>Feed Number</label>
                <input  required value={feedNumber} onChange={(e)=>setFeedNumber(e.target.value)} className='p-2 border border-gray-400 bg-zinc-50'></input>
               
                 <label className='pt-3 pl-1'>Breed</label>
                <input  required value={breed} onChange={(e)=>setBreed(e.target.value)} className='p-2 border border-gray-400 bg-zinc-50'></input>
            </form>
            <div className=''>
        <button onClick={(e)=>handleSubmit(e)} type='submit'  className=" bg-indigo-600 justify-center flex text-white items-center ">
              Submit
        </button>
        </div>
        </div>
        
    </div>
  )
}

export default AnimalDetails