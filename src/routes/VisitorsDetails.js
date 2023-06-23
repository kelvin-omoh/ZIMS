import React, { useState } from 'react'
import Layout from '../components/Layout'
import NavDashboard from '../components/NavDashboard'
import SupervisorLayout from '../components/SupervisorLayout'
import SupervisorNav from '../components/SupervisorNav'
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebase'
const VisitorsDetails = () => {
  const[NormalAdult,setNormalAdult]=useState('')
  const[NormalChild,setNormalChild]=useState('')
  const[ForeignerChild,setForeignerChild]=useState('')
  const[ForeignerAdult,setForeignerAdult]=useState('')

  const handleSubmit=async(e)=>{
    e.preventDefault()
    
    try {
      const docRef = await addDoc(collection(db, "SupervisorDetail"), {
       NormalAdult,
       NormalChild,
       ForeignerChild,
       ForeignerAdult,
      });
      
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
 alert('successful !')
    setNormalAdult('')
    setNormalChild('')
    setForeignerChild('')
    setForeignerAdult('')
  }
  return (
    <div className=''>
        <SupervisorLayout/>
        <SupervisorNav/>

        <div className='absolute left-[13.5%] w-[81%] mt-40 ml-11 p-8 bg-zinc-100 z-[10]'>
            <h3 className='font-bold text-xl'>Visitors</h3>
            <form className=' w-full flex flex-col py-4 '>
                <label className='pb-1  pl-1'>Normal Adult</label>
                <input value={NormalAdult} onChange={(e)=>setNormalAdult(e.target.value)} className='p-2 border border-gray-400 bg-zinc-50' type='text' />
                <label className='pt-3 pl-1'>Normal Child</label>
                <input value={NormalChild} onChange={(e)=>setNormalChild(e.target.value)} className='p-2 border border-gray-400 bg-zinc-50'></input> 
                <label className='pt-3 pl-1'>Foreigner Child</label>
                <input value={ForeignerChild} onChange={(e)=>setForeignerChild(e.target.value)} className='p-2 border border-gray-400 bg-zinc-50'></input>
                <label className='pt-3 pl-1'>Foreigner Adult</label>
                <input value={ForeignerAdult} onChange={(e)=>setForeignerAdult(e.target.value)} className='p-2 border border-gray-400 bg-zinc-50'></input>
                
            </form>
            <div className=''>
        <button onClick={(e)=>handleSubmit(e)} className=" bg-indigo-600 justify-center flex text-white items-center ">
              Submit
            </button>
        </div>
        </div>
        
    </div>
  )
}

export default VisitorsDetails