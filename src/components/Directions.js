import React from 'react'
import { Link } from 'react-router-dom'

const Directions = () => {
  return (
    <div className='max-w-[1240px] mt-10 mx-auto py-4 px-4'>
         <div className="h-[500px] grid justify-center items-center grid-cols-1 md:grid-cols-2 gap-5">
        <div className='w-full h-full place-content-center grid'> <iframe  className="h-[300px] w-[300px] md:w-ful md:h-[500px] md:w-[500px]  rounded-xl" height={300} width={350}   class="gmap_iframe"  frameborder="0" scrolling="no" marginheight="0"  marginwidth="0" src="https://maps.google.com/maps?width=900&amp;height=900&amp;hl=en&amp;q=ibadan zoo&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
       </div>
      
        <div className="self-center">
          <h3 className="font-bold text-3xl md:text-5xl ">Directions</h3>
          <p className=" text-lg py-4">
          ZIMS is located at the intersection of CVVV+4WR, Appleton Rd, 200132, Ibadan, Oyo
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