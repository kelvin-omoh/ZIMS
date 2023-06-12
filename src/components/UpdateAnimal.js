import React from 'react'

const UpdateAnimal = () => {
  return (
    <div>
        <h3 className='font-bold text-xl'>Update Animal Detail</h3>
        <div className='flex flex-col p-3 '>
            <label className='my-2 text-md'>Animal Name</label>
            <input className='bg-zinc-200 w-[70%] border border-gray-300 p-2' type='text'/>
            <label className='my-2 text-md'>Animal Image</label>
            <input className='bg-zinc-200 w-[30%] border border-gray-300 p-2' type='image'/>
            <label className='my-2 text-md'>Cage Number</label>
            <input className='bg-zinc-200 w-[70%] border border-gray-300 p-2' type='text'/>  
            <label className='my-2 text-md'>Feed Number</label>
            <input className='bg-zinc-200 w-[70%] border border-gray-300 p-2' type='text'/>   
            <label className='my-2 text-md'>Breed</label>
            <input className='bg-zinc-200 w-[70%] border border-gray-300 p-2' type='text'/>  
            <label className='my-2 text-md'>Description</label>
            <input className='bg-zinc-200 w-[70%] border border-gray-300 p-2' type='text'/> 
            <div className='pt-3'>
        <button className=" bg-indigo-600 justify-center flex text-white items-center ">
              Update
            </button>
    </div>
        
        </div>
    
    </div>
  )
}

export default UpdateAnimal