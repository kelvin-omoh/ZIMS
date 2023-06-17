import React from "react";
import Data from "./mockData";

const AnimalImages = () => {
  return (
    <div className="max-w-[1240px] mx-[15%] my-20">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-[2rem] py-11">
        {Data.map((item) => (
          <>
          <div className=" relative    w-full h-[20em] rounded-lg">

             <img
            className="w-full h-full object-cover rounded-2xl   cursor-pointer hover:scale-105 ease-in-out duration-300"
            src={item.src} alt={item.alt}
          />
          <p className=" p-4   top-[80%] w-full rounded-b-2xl  absolute text-[1.4em]  text-[#fcf7f7] font-bold
           text-center">{item.name}</p>
          </div>
      
         
            </>
        ))}
      </div>
    </div>
  );
};

export default AnimalImages;
