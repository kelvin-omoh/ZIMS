import React, {useState} from 'react'
import Elephant from '../assets/ELephant.png'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

const AdminLogin = () => {
   
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { adminLogin } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try{
         await adminLogin(email, password);
         navigate('/dashboard')
         alert()
    }catch{
        setError(e.message)
        console.log(error)  
    }

  }
  

  return (
    <div className='relative w-full h-screen bg-zinc-900/90 z-[90] '>
        <img className='absolute w-full h-full object-cover mix-blend-overlay z-0' src={Elephant} alt='/'/>

    <div className='flex justify-center z-[90] items-center h-full'>     
        <form onSubmit={handleSubmit} className='z-[90] max-w-[400px] w-full mx-auto bg-white p-8 '>
            <h2 className='text-4xl font-bold text-center p-4'>ZIMS Admin</h2>
            <div className='flex z-[90] flex-col '>
                <label>Email</label>
                <input required onChange={(e) => setEmail(e.target.value)} className='border relative z-[90] bg-gray-100 p-2'  type='email'></input>
            </div>
            <div className='flex flex-col mb-4 '>
                <label>Password</label>
                <input required onChange={(e) => setPassword(e.target.value)} className='border relative bg-gray-100 p-2' type='password'></input>
            </div>
            <button type='submit' className='w-full py-3 mt-3 z-[90] bg-indigo-600 hover:bg-indigo-500 relative text-white'>Sign In</button>
            <p className='flex z-[90] items-center mt-2'><input type='checkbox'/>Remember Me</p>
            <p className=' z-[90]  text-center mt-8'>Not an Admin? <Link to='/signup' className=' cursor-pointer underline z-[90]'> Sign up now</Link></p>
     </form>
    </div>
    
    </div>
  )
}

export default AdminLogin