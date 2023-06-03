import React from 'react'
import Elephant from '../assets/ELephant.png'

const AdminLogin = () => {
  return (
    <div className='relative w-full h-screen bg-zinc-900/90 '>
        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={Elephant} alt='/'/>

    <div className='flex justify-center items-center h-full'>     
        <form className='max-w-[400px] w-full mx-auto bg-white p-8 '>
            <h2 className='text-4xl font-bold text-center p-4'>ZIMS Admin</h2>
            <div className='flex flex-col '>
                <label>Username</label>
                <input className='border relative bg-gray-100 p-2'  type='text'></input>
            </div>
            <div className='flex flex-col mb-4 '>
                <label>Password</label>
                <input className='border relative bg-gray-100 p-2' type='password'></input>
            </div>
            <button className='w-full py-3 mt-3 bg-indigo-600 hover:bg-indigi-500 relative text-white'>Sign In</button>
            <p className='flex items-center mt-2'><input type='checkbox'/>Remember Me</p>
            <p className='text-center mt-8'>Not an Admin? Sign up now</p>
     </form>
    </div>
    
    </div>
  )
}

export default AdminLogin