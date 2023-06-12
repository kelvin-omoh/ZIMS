import React from "react";
import { Link } from "react-router-dom";
import ZOO from '../assets/zoologicalgardens.jpg'

const Mission = () => {
  return (
    <div className="max-w-[1240px] mx-auto mt-[100px] pb-11 px-4 grid lg:grid-cols-2 gap-4">
      {/* Left side */}
      <div>
        <img
          className="w-full h-[450px] object-cover rounded-xl"
          src={ZOO}
          // src="https://media.istockphoto.com/id/531467588/photo/black-jaguar-walking-towards-viewer.jpg?s=612x612&w=0&k=20&c=dPEqSbFF3TyroEoxxb4-1S6CAr9Qw8VBrdpwbyDLeE8="
          alt="/"
        />
      </div>
      {/* Right hand */}
      <div className=" flex flex-col justify-center p-4
       ">
        <h1 className="font-bold text-2xl md:text-4xl">
          <span className="italic text-[#3CCF4E]">About</span> ZIMS Wildlife
          Park
        </h1>
        <p className="py-4">
          ZIMS is approximately 160 acres. Visitors will drive through more than
          three miles of Ibadan express way, viewing animals in natural habitats
          when they visit. More animals are exhibited in UI Zoo, a beautiful
          20-acre walk-thru area, along winding paths which is more of a “zoo”
          typesetting.
        </p>
        <div>
        <button className="bg-orange-500 text-white py-3 font-bold px-11">
          <Link to='tickets'>Ticket</Link>
        </button>
        {/* <div className=" ">
        <img className="absolute top-[1120px] right-60 botto-0 w-[330px] h-[300px] rounded-xl" src="https://images.pexels.com/photos/6476618/pexels-photo-6476618.jpeg?auto=compress&cs=tinysrgb&w=600" />
      </div> */}
        </div>  
      </div>
      {/* Bottom */}
      {/* Left */}
      {/* <div>
      <img
          className="w-full h-[350px] object-cover rounded-xl"
          src="https://media.istockphoto.com/id/1001997026/photo/jaguars-timber-was-watching-the-victim.jpg?s=612x612&w=0&k=20&c=ATgxjhjsXT9NljXryZbNGVx4QiwRrCn9LNgjfKeELHI="
          alt="/"
        />
      </div> */}
      {/* right side */}
      {/* <div className="flex flex-col justify-center items-center">
        <h3 className="font-bold text-2xl">Our Mission</h3>
        <p className="text-center p-2">To promote conservation and preservation through memorable and <br/> educational
             encounters with North American Wildlife in a natural environment.</p>
      </div> */}
    </div>
  );
};

export default Mission;
