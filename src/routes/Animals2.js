import React from 'react'
import SupervisorLayout from '../components/SupervisorLayout'
import SupervisorNav from '../components/SupervisorNav'

const Animals2 = () => {
  return (
    <div className=''>
    <SupervisorLayout/>
    <SupervisorNav/>

    <div className='absolute left-[13.5%] w-[81%] mt-40 ml-11 p-8 bg-zinc-100 z-[10]'>
        <h3 className='font-bold text-xl'>Add Animal Details</h3>
        <form className=' w-full flex flex-col py-4 '>
            <label className='pb-1  pl-1'>Animal Name</label>
            <input className='p-2 border border-gray-400 bg-zinc-50' type='text' />
            <label className='pt-3 pl-1'>Animal Image</label>
            <input className='p-2 border border-gray-400 bg-zinc-50'></input> 
            <label className='pt-3 pl-1'>Cage Number</label>
            <input className='p-2 border border-gray-400 bg-zinc-50'></input>
            <label className='pt-3 pl-1'>Feed Number</label>
            <input className='p-2 border border-gray-400 bg-zinc-50'></input>
             <label className='pt-3 pl-1'>Breed</label>
            <input className='p-2 border border-gray-400 bg-zinc-50'></input>
            <label className='pt-3 pl-1'>Description</label>
            <input className='p-2 border border-gray-400 bg-zinc-50'></input>
        </form>
        <div className=''>
    <button className=" bg-indigo-600 justify-center flex text-white items-center ">
          Submit
        </button>
    </div>
    </div>
    
</div>
  )
}

export default Animals2