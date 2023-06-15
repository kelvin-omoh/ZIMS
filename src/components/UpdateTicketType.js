import React from 'react'

const UpdateTicketType = () => {
  return (
    <div className='absolute left-[13.5%] w-[81%] mt-40 ml-11 p-8 bg-zinc-100 z-[10]'>
      <h3 className="font-bold text-xl">Update Ticket Type</h3>
        <div className='w-full py-3'>
        <form className='flex flex-col '>
        <label className='my-3 pl-1'>Ticket Type</label>
        <input className='p-2 border border-gray-400 bg-zinc-50'></input>
        <label className='my-3 pl-1'>Ticket Cost</label>
                <input className='p-2 border border-gray-400 bg-zinc-50'></input>
        </form>
        <div className='py-3'>
        <button className=" bg-indigo-600 justify-center flex text-white items-center ">
              Submit
            </button>
        </div>
        
        </div>
        
    </div>
  )
}

export default UpdateTicketType