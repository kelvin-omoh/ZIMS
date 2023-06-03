import React from 'react'
import { Link } from 'react-router-dom'

const Directions = () => {
  return (
    <div className='max-w-[1240px] mt-20 mx-auto py-4 px-4'>
         <div className="grid grid-cols-1 md:grid-cols-2">
        <div>kfbusdkfus</div>
      
        <div className="self-center">
          <h3 className="font-bold text-3xl md:text-5xl ">Directions</h3>
          <p className=" text-lg py-4">
          ZIMS is located at the intersection of CVVV+4WR, Appleton Rd, 200132, Ibadan, Oy
          </p>
          <div className=" ">
            <button className="bg-orange-500 text-white py-4 font-bold px-7">
              <Link to="/plan">Get Directions</Link>
            </button>
          </div>
        </div>

    </div>
    </div>
  )
}

export default Directions