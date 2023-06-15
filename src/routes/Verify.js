import React from "react";
import TAMA from "../assets/TAMA.jpg";
import IFEOLUWA from "../assets/IFEOLUWA.jpg";
import { Link } from "react-router-dom";

const Verify = () => {
  return (
    <div className="max-w-[700px] mx-auto py-16 px-4 mt-10">
      <div className="bg-white shadow-2xl p-5 h-[400px] w-full grid grid-cols-2 gap-4">
        {/* Left side */}
        <div className="flex flex-col border border-zinc-400 text-center rounded-2xl py-12 px-8">
          <div className="items-center text-center">
            <div className="inline-block rounded-full">
              <img
                className="object-cover w-28 h-28 rounded-full self-center"
                src={TAMA}
                type="/"
              />
            </div>
          </div>
          <h1 className="text-center text-2xl py-5">ZIMS ADMIN</h1>
          <Link to="/admin">
            <button className="bg-indigo-700 w-full text-white">Login</button>
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col border border-zinc-400 text-center rounded-2xl py-12 px-8">
          <div className="items-center text-center">
            <div className="inline-block rounded-full">
              <img
                className="object-cover w-28 h-28 rounded-full self-center"
                src={IFEOLUWA}
                type="/"
              />
            </div>
          </div>
          <h1 className="text-center text-2xl py-5">ZIMS SUPERVISOR</h1>
          <Link to="/signin">
            <button className="bg-indigo-700 w-full text-white">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Verify;
