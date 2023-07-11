import React, { useEffect, useState } from "react";
import ABoutImg from '../assets/aboutImg.png'
import ZOO from '../assets/zoologicalgardens.jpg'
import { Link } from "react-router-dom";
// import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="bg-black bg-opacity-70 w-full h-[90vh] top-[90px]">
      <img
        className=" object-cover h-[90vh] w-full absolute -z-10"
        src={ZOO}
        alt="/"
      />
      <div className="max-w-[1400px] mx-auto  w-full h-[90%] flex flex-col justify-center text-white px-4 ">
        <p className="font-cold text-2xl mt-20 md:mt-0">Its Time to </p>
        <h1 className=" text-orange-500 font-bold text-5xl md:text-7xl drop-shadow-2xl">
          Get Wild
        </h1>
        <p className="max-w-[600px] drop-shadow-2xl py-4 text-md ">
          Welcome to our extraordinary zoo in nigeria, where the wonders of
          African wildlife come to life! Explore the rich biodiversity of our
          country as you encounter majestic lions, elegant elephants,graceful
          giraffes,and more
        </p>
        <div className="flex gap-3">
              <button className=" text-white  bg-[#3CCF4E]"><Link to='/tickets'>Buy your Ticket</Link></button>
               {/* <button className=" text-white "><Link to='/tickets'>Foreigner Ticket</Link></button> */}
            </div>
      </div>
    </div>







    //     <div className="max-w-[1400px] mx-auto py-4 px-4 ">
    //       <img className=' w-full h-screen bg-opacity-50 object-cover bg-black/90' src="https://media.istockphoto.com/id/1409785583/photo/herd-of-african-elephants-walking-towards-camera.jpg?s=612x612&w=0&k=20&c=2Dmt__4LVte9hqFFGspPsm6u0r1GYDzJhGluIk4jmaU=" alt="" />

    //       <div className="max-width-[1240px] px-4 py-[80px]  ">
    //         <p className="font-cold text-2xl">Its Time to </p>
    //         <h1 className=" text-orange-500 font-bold text-5xl md:text-7xl drop-shadow-2xl">
    //           Get Wild
    //         </h1>
    //         <p  className="max-w-[600px] drop-shadow-2xl py-4 text-md ">Welcome to our extraordinary zoo in nigeria, where the wonders of African wildlife come to life!  Explore the
    //           rich biodiversity of our country as you encounter majestic lions, elegant elephants,graceful giraffes,and more</p>
    // {/*
    //         <Typed
    //           className="max-w-[600px] drop-shadow-2xl py-4 text-lg "
    //           strings={[
    //             "Welcome to our extraordinary zoo in nigeria, where the wonders of African wildlife come to life!Explore the rich biodiversity of our country as you encounter majestic lions, elegant elephants,graceful giraffes,and more",
    //           ]}
    //           typeSpeed={30}
    //           backSpeed={120}
    //           loop
    //         /> */}
    //         <div>
    //           <button className="text-white m-2 bg-[#3CCF4E]"><Link>Regular Ticket</Link></button>
    //           <button className="text-white m-2"><Link>VIP Tickets</Link></button>
    //         </div>
    //       </div>
    //     </div>

    // <div className="w-full h-full">
    //   <div className="max-width-[1240px] mx-auto px-4">
    //     <div className=" mx-auto flex flex-col justify-center ">
    //       <p>Its Time to </p>
    //       <h1 className=" text-orange-500 font-bold text-5xl md:text-7xl drop-shadow-2xl">
    //         Get Wild
    //       </h1>
    //       <p className="max-w-[600px] drop-shadow-2xl py-2 text-lg ">
    //         Welcome to our extraordinary zoo in Nigeria, where the wonders of
    //         African wildlife come to life! Explore the rich biodiversity of our
    //         country as you encounter majestic lions, elegant elephants, graceful
    //         giraffes, and more
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Hero;
