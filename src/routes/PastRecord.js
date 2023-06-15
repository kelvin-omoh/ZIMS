import React from 'react'
import SupervisorLayout from '../components/SupervisorLayout';
import SupervisorNav from '../components/SupervisorNav';

const PastRecord = () => {
    return (
        <div>
          <SupervisorLayout />
          <SupervisorNav />
    
          <div className="absolute left-[13.5%] w-[81%] mt-40 ml-11 p-8 bg-zinc-100 ">
            <form className="flex flex-col gap-1">
            <label className='my-3 pl-1'>View Past Record</label>
            <input className='p-2 border border-gray-400 bg-zinc-50' type='text' name="Ticket ID or Visitor Name" />
            </form>
            <div className='py-3'>
            <button className=" bg-indigo-600 justify-center flex text-white items-center ">
                  Submit
                </button>
            </div>
          </div>
        </div>
      );
}

export default PastRecord