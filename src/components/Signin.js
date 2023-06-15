import React, {useState} from 'react' 
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'
import Elephant from '../assets/ELephant.png'


const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try{
         await signIn(email, password);
         navigate('/visitor')
    }catch{
        setError(e.message)
        console.log(e.message)
    }

  }

  return (
    <div className='relative w-full h-screen bg-zinc-900/90 z-[90] '>
    {/* <img className='absolute w-full h-full object-cover mix-blend-overlay z-0' src={Elephant} alt='/'/> */}

<div className='flex justify-center z-[90] items-center h-full bg-black/60'>     
    <form onSubmit={handleSubmit} className='z-[90] max-w-[400px] w-full mx-auto bg-white p-8 '>
        <h2 className='text-3xl font-bold text-center p-4'>ZIMS SUPERVISOR</h2>
        <div className='flex z-[90] flex-col '>
            <label>Email</label>
            <input onChange={(e) => setEmail(e.target.value)} className='border relative z-[90] bg-gray-100 p-2'  type='email'></input>
        </div>
        <div className='flex flex-col mb-4 '>
            <label>Password</label>
            <input onChange={(e) => setPassword(e.target.value)} className='border relative bg-gray-100 p-2' type='password'></input>
        </div>
        <button className='w-full py-3 mt-3 z-[90] bg-indigo-600 hover:bg-indigo-500 relative text-white'>Sign In</button>
        <p className='flex z-[90] items-center mt-2'><input type='checkbox'/>Remember Me</p>
        <p className=' z-[90]  text-center mt-8'>Not an Admin? <Link to='/signup' className=' cursor-pointer underline z-[90]'> Sign up now</Link></p>
 </form>
</div>

</div>

//     <div className='max-w-[700px] mx-auto my-16 p-4'>
//     <div>
//         <h1 className='text-3xl text-center font-bold py-2'>ZIMS SUPERVISOR</h1>
        
//     </div>
//     <form onSubmit={handleSubmit}>
//         <div className='flex flex-col py-2'>
//             <label className='py-2 font-medium'>Email Address</label>
//             <input onChange={(e) => setEmail(e.target.value)} className='border p-3' type='email'/>
//         </div>
//         <div className='flex flex-col py-2'>
//             <label className='py-2 font-medium'>Password</label>
//             <input onChange={(e) => setPassword(e.target.value)} className='border p-3' type='password'/>
//         </div>
//         <button className='text-white border border-indigo-500  bg-indigo-600 hover:bg-indigo-500 w-full p-4 my-2 '>Sign Up</button>
//     </form>
//     <p className='py-2 text-center'>Don't have an account yet? <Link to='/signup' className='underline'>Sign up</Link></p>
// </div>
  )
}

export default Signin