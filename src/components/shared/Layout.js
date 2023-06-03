import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
const Layout = () => {
  return (
    <div className=' flex  fixed h-full w-full'>
      
        <div className='bg-[#120A22] text-white w-[213px] relative list-none flex p-5   flex-col h-screen '>
                <h1 className='text-center text-[1.7em]'>   ZIMS ADMIN</h1>
               <ul className='list-none flex w-[100%] text-start h-[100%]  my-[4em] flex-col gap-8'>
              <li className=' p-4 border cursor-pointer border-red-300 hover:bg-white hover:text-black' >
                                <Link >Dashboard</Link>
                              </li>
                              <li  className=' p-4 border  cursor-pointer border-red-300 hover:bg-white hover:text-black' >
                                <Link >Animal Details</Link>
                              </li>
                              <li  className=' p-4 border  cursor-pointer border-red-300 hover:bg-white hover:text-black' >
                                <Link >Manage Tickets</Link>
                              </li>
                              <li  className=' p-4 border  cursor-pointer border-red-300 hover:bg-white hover:text-black' >
                                <Link>Report</Link>
                              </li>
                              <li className='flex  gap-3  cursor-pointer   p-4 border border-red-300 hover:bg-white hover:text-black' >
                                <Link className='flex  justify-center items-center gap-3'><AiOutlineSearch/> Search </Link>
                              </li>
                              <li className=' bottom-[2em]  cursor-pointer w-full  absolute'>
                                <button className=' justify-center flex  items-center w-[70%]'>Logout</button>
                              </li>
               </ul>
               
       </div>
        

    </div>
  )
}

export default Layout