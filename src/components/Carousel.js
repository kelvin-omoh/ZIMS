import React from "react";
import Data from "./mockData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Carousel = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="max-w-[1240px] mx-auto py-4 px-4">
      <div className="grid grid-cols-2 ">
        <div>
          <h1 className="font-bold text-2xl  md:text-5xl p-8">
            Explore Our <span className="italic text-[#3CCF4E]">Animals</span>
          </h1>
        </div>

        <div className="flex justify-end items-center gap-2">
          <MdChevronLeft
            className=" border border-black rounded-full opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideLeft}
            size={50}
          />
          <MdChevronRight
            className="border  border-black rounded-full opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideRight}
            size={50}
          />
        </div>
      </div>

      <div className="relative flex items-center ">
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {Data.map((item) => (
            <img
              className="w-[350px] h-[450px] object-cover inline-block p-4 rounded-3xl cursor-pointer hover:scale-110 ease-in-out duration-300"
              src={item.img}
              alt="/"
            />
          ))}
        </div>
      </div>
      <div className='flex justify-center py-8'>
                <button className='bg-orange-500 text-white py-4 font-bold px-11 '><Link to='animals'>View Our Animals</Link></button>    
                </div>
    </div>
  );
};

export default Carousel;
