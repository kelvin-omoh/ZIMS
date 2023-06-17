import React from "react";
import { Link } from "react-router-dom";
import ZOO from '../assets/zoologicalgardens.jpg'

const Experience = () => {
  return (
    <div className="max-w-[1400px] mx-auto py-[10px] md:py-[40px] px-4">
      <div>
        <h1 className="font-bold text-3xl md:text-5xl text-center">
          <span className="italic text-[#3CCF4E]">Experience</span> The magic
        </h1>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 py-11">
        <div>
          <img
            className="object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1610429196503-bd6a44252ba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpdmUlMjB0aHJ1fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h3 className="font-bold text-xl py-2">Drive-Thru</h3>
          <p className="pb-2">
            Get up-close to elusive animals while <br /> driving through the
            park.
          </p>
        </div>
        <div>
          <img
            className="object-cover rounded-lg w-full h-[13rem]"
            src={ZOO}
            // src="https://images.unsplash.com/photo-1627981440910-552a0b1d7450?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2FsayUyMHRocnUlMjBpbiUyMGElMjB6b298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h3 className="font-bold text-xl py-2">Walk-Thru</h3>
          <p className="pb-2">
            Stroll through our park exhibits with <br /> hands-on experiences.
          </p>
        </div>
        <div>
          <img
            className="object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1503919005314-30d93d07d823?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsayUyMHRocnUlMjBpbiUyMGElMjB6b298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h3 className="font-bold text-xl py-2">Animal Encounter</h3>
          <p className="pb-2">
            Enjoy unique experiences with animal ambassadors in our Walk-Thru
            Fort.
          </p>
        </div>
        <div>
          <img
            className="object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGluaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h3 className="font-bold text-xl py-2">Dining</h3>
          <p className="pb-2">Dine in our themed restaurant, ZIMS Restaurant.</p>
        </div>
      </div>
      <div className="flex justify-center ">
        <button className="bg-orange-500 text-white py-4 font-bold px-11">
          <Link to="/plan">Plan Your Adventure</Link>
        </button>
      </div>
    </div>
  );
};

export default Experience;
