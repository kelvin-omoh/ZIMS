import React from 'react'
import Layout from '../components/Layout'
import NavDashboard from '../components/NavDashboard'
import SupervisorLayout from '../components/SupervisorLayout'
import SupervisorNav from '../components/SupervisorNav'

const VisitorsDetails = () => {
  return (
    <div className=''>
        <SupervisorLayout/>
        <SupervisorNav/>

        <div className='absolute left-[13.5%] w-[81%] mt-40 ml-11 p-8 bg-zinc-100 z-[10]'>
            <h3 className='font-bold text-xl'>Visitors</h3>
            <form className=' w-full flex flex-col py-4 '>
                <label className='pb-1  pl-1'>Normal Adult</label>
                <input className='p-2 border border-gray-400 bg-zinc-50' type='text' />
                <label className='pt-3 pl-1'>Normal Child</label>
                <input className='p-2 border border-gray-400 bg-zinc-50'></input> 
                <label className='pt-3 pl-1'>Foreigner Child</label>
                <input className='p-2 border border-gray-400 bg-zinc-50'></input>
                <label className='pt-3 pl-1'>Foreigner Adult</label>
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

export default VisitorsDetails