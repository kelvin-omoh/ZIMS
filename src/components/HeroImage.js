import React, { Component, useEffect, useState } from "react";
import ABoutImg from "../assets/aboutImg.png";
import ABoutImg2 from "../assets/aboutImg2.png";


function HeroImage ({heading}) {
  const [img, setImg] = useState(ABoutImg);

  useEffect(() => {
    setInterval(() => {
      
      setImg((prevImg) =>
     
       prevImg === ABoutImg ? ABoutImg2 : ABoutImg);
    }, 4000);

  
  }, []);
  return (
    <div className="bg-black/40 w-full items-center relative flex flex-col justify-center h-[50vh]  ">
      <div className=" w-full h-full">
        <img
          className=" object-center object-cover h-[50vh] w-full absolute -z-10"
          src={img}
        />
      </div>
      <div className="w-[70%] mx-auto h-[90%] flex flex-col  justify-center px-4 text-white text-center">
        <h1 className="text-4xl md:text-6xl z-[10] mt-10 md:mt-0 w-[60%] md:w-[65%] absolute top-[3em] mx-auto text-center  "> {heading}</h1>
      </div>
    </div>
  );

};


// const HeroImage = () => {
  // const [img, setImg] = useState(ABoutImg);
  // useEffect(() => {
  //   const changeImg = () => {
  //     setInterval(() => {
  //       setImg((prevImg) => (prevImg === ABoutImg ? ABoutImg2 : ABoutImg));
  //     }, 4000);
  //   };
  //   changeImg();
  // }, [setImg]);
 


 
// };

export default HeroImage;
