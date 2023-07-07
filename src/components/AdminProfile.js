import React from 'react'
import Layout from './Layout'
import NavDashboard from './NavDashboard'
import { Link,useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

const AdminProfile = () => {
  const { user, logout} = UserAuth();
  const navigate = useNavigate();



  return (
    <div>
        <Layout/>
        <NavDashboard/>

        <div className='absolute left-[13.5%] w-[81%] mt-40  ml-11 p-8 bg-zinc-100 '>
            <h3 className='font-bold text-xl'>Admin Profile</h3>
            <form className='w-full flex flex-col py-4'>
                <label className='pb-1  pl-1'>Admin Name</label>
                <input  className='p-2 border border-gray-400 bg-zinc-50 ' type='text' placeholder='Essien Essien' name='Your name'></input>
                <label className='pb-1  pt-3 pl-1'>User Name</label>
                <input  className='p-2 border border-gray-400 bg-zinc-50 ' type='username' placeholder='Essien@1234' name='user name'></input> 
                 <label className='pb-1 pt-3  pl-1'>Contact Number</label>
                <input  className='p-2 border border-gray-400 bg-zinc-50 ' type='tel' placeholder='07030657654' name='phone number'></input>
                <label  className='pb-1 pt-3  pl-1'>Email Address </label> 
                <input  className='p-2 border border-gray-400 bg-zinc-50 ' type='email' placeholder='eessien396@gmail.com' name='email'></input>
            </form>
            {/* {user && user.email} */}

<button className=" bg-indigo-600 justify-center flex text-white items-center ">
              <Link to='/managetickets'>Update</Link>
            </button>
        </div>
        
        {/* <div className='absolute left-[13.5%] w-[81%] mt-40 ml-11 p-8 bg-zinc-100 -z-10'>
            <h3 className='font-bold text-xl'>Admin Profile</h3>
            <form className=' w-full flex flex-col py-4 '>
                <label className='pb-1  pl-1'>Admin Name</label>
                <input className='p-2 border border-gray-400 bg-zinc-50' type='text' name='Admin Name' ></input>
                <label className='pt-3 pl-1'>User Name</label>
                <input className='p-2 border border-gray-400 bg-zinc-50' type='text' name='Admin'/>
                <label className='pt-3 pl-1'>Contact Number</label>
                <input className='p-2 border border-gray-400 bg-zinc-50' type='tel' name='phone Number'/>
                <label className='pt-3 pl-1'>Emial Address</label>
                <input className='p-2 border border-gray-400 bg-zinc-50'></input >
                
            </form>
            <div className=''>
        <button className=" bg-indigo-600 justify-center flex text-white items-center ">
              Update
            </button>
        </div>
        </div> */}
        
    </div>
  )
}

export default AdminProfile