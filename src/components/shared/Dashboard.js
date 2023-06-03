import React from 'react'
import Layout from './Layout'

const Dashboard = () => {
  return (
    <div className=' relative w-full h-full flex  '>
      <div className='  '>
          <Layout/>
      </div>
    
      <div className='absolute top-[5em] bg-red-500  ml-64 h-8 '>
       <h1> hello</h1>
      </div>
    </div>
  )
}

export default Dashboard