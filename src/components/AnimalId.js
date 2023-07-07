import React, { useEffect, useState } from "react";

import Data from "./mockData";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import HeroImage from "./HeroImage";
import Footer from "./Footer";
import Carousel from "./Carousel";
const AnimalId = () => {
  //   const data = [
  //     {
  //       name: "a",
  //       id: 1,
  //     },
  //     {
  //       name: "a",
  //       id: 2,
  //     },
  //     {
  //       name: "a",
  //       id: 3,
  //     },
  //   ];
  const { id } = useParams();
  const [current, setCurrent] = useState({});
  // const filter=()=>{
  useEffect(() => {
    const newAnimal = Data.filter((Aid) => {
      if (Aid.id == id) {
        {
          console.log(Aid);
        }
        setCurrent(Aid);
      }
    });
  }, []);

  return (
    <div>
      <Navbar />
      <HeroImage heading="Animal Profile" />
      <div className="w-full max-w-[1240px] mx-auto">
        {/* Details */}
        <div className="mt-10 py-4 px-4 grid grid-cols-1 md:grid-cols-2 gap-7 ">
          <div>
            <img
              className="  w-[100%] h-[70vh] object-cover rounded-2xl"
              src={current.src}
              alt={current.alt}
            />
          </div>

          <div className="h-[70vh] p-3">
            <h2 className="font-bold text-2xl pt-11 pb-3  ">
              {current.description}
            </h2>
            <div className="flex justify-between border-b border-b-gray-400 mb-4  pb-1">
              <p className="w-full font-bold ">{current.commonname}</p>
              <p className="text-thin">{current.answer}</p>
            </div>
            <div className="flex justify-between border-b border-b-gray-400 mb-4  pb-1">
              <p className=" font-bold ">{current.scientific}</p>
              <p className="text-thin">{current.sanswer}</p>
            </div>
            <div className="flex justify-between border-b border-b-gray-400 mb-4  pb-1">
              <p className=" font-bold ">{current.type}</p>
              <p className="text-thin">{current.tanswer}</p>
            </div>
            <div className="flex justify-between border-b border-b-gray-400 mb-4  pb-1">
              <p className=" font-bold ">{current.status}</p>
              <p className="text-thin">{current.ssanswer}</p>
            </div>
            <div className="flex justify-between border-b border-b-gray-400 mb-4  pb-1">
              <p className=" font-bold ">{current.diet}</p>
              <p className="text-thin">{current.danswer}</p>
            </div>
            <div className="flex justify-between gap-3 border-b border-b-gray-400 mb-4  pb-1">
              <p className=" font-bold ">{current.geo}</p>
              <p className="text-thin">{current.ganswer}</p>
            </div>
            <div className="flex justify-between border-b border-b-gray-400 mb-4  pb-1">
              <p className=" font-bold ">{current.lifespan}</p>
              <p className="text-thin">{current.lanswer}</p>
            </div>
            <div className="flex justify-between border-b border-b-gray-400 mb-4  pb-1">
              <p className=" font-bold ">{current.offspring}</p>
              <p className="text-thin">{current.oanswer}</p>
            </div>
          </div>
        </div>

        {/* About the animal*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-20 px-5">
          <div>
            <h1>
              {current.meet}{" "}
              <span className="italic text-[#3CCF4E]">{current.span1}</span>
            </h1>
            <p className="leading-loose py-4 w-full h-full">{current.about}</p>
          </div>
          <div className=" flex justify-center items-center self-center">
            <img
              className="w-[80%] h-[60vh] object-cover rounded-2xl "
              src={current.src}
              alt={current.alt}
            />
          </div>
          {/* <div>
            <img
              className=" h-[70vh] object-cover rounded-2xl"
              src={current.src2}
              alt={current.alt}
            />
          </div> */}
        </div>
        {/* Behaviour of the animal */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-5 px-5">
          <div className="w-full">
            <img
              className=" w-full h-[40vh] object-cover rounded-2xl"
              src={current.src}
              alt={current.alt}
            />
          </div>
          <div className="p-8">
            <h1>
              {current.their}{" "}
              <span className="italic text-[#3CCF4E]">{current.behaviour}</span>
            </h1>
            <p className="pt-5">{current.aboutBehaviour}</p>
          </div>
        </div>
        {/* Did you know */}
        <div className="flex justify-center mt-20 mb-6 px-5">
          <div className="w-[1000px]  h-fit md:h-[180px] bg-[#F0EDD4] rounded-2xl py-11 px-9  text-center">
            <h1>{current.know}</h1>
            <p className="py-7 text-lg">{current.aboutKnow}</p>
          </div>
        </div>
      </div>
      <Carousel />
      <Footer />
    </div>
  );
};

export default AnimalId;
