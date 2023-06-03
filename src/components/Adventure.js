import React from "react";
import { Link } from "react-router-dom";
import Baboon from "../assets/baboon.png";
import Jaguar from "../assets/jaguar.png";

const Adventure = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-11 px-4">
      <div className="grid sm:grid-cols lg:grid-cols-4 gap-5">
        <div>
          <img className="object-cover" src={Baboon} alt="/" />
        </div>
        <div className="self-center">
          <img className="object-cover" src={Jaguar} alt="/" />
        </div>
        <div className="col-span-2 self-center">
          <h1 className="font-bold text-3xl md:text-5xl text-center">
            <span className="italic text-[#3CCF4E]">Experience</span> The magic
          </h1>
          <p className="text-center text-lg py-4">
            ZIMS is open year-round. Drop by to experience the magic for
            yourself.Our mission to promote conservation and preservation through memorable and  educational
             encounters with North American Wildlife in a natural environment
          </p>
          <div className="flex justify-center ">
            <button className="bg-orange-500 text-white py-4 font-bold px-11">
              <Link to="/plan">Plan Your Adventure</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adventure;
