import React from "react";
import { Link } from "react-router-dom";

const Admission = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-4 px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <img
          className=" w-full h-[300px] object-cover rounded-xl "
          src="https://images.unsplash.com/photo-1503919005314-30d93d07d823?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsayUyMHRocnUlMjBpbiUyMGElMjB6b298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="/"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">
          <div>
            <img  className="rounded-xl" src="https://images.unsplash.com/photo-1610429196503-bd6a44252ba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpdmUlMjB0aHJ1fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <div>
            {" "}
            <img className="rounded-xl" src="https://media.istockphoto.com/id/1361427581/photo/a-chimpanzee-family-mahale-mountain-national-park-tanzania.jpg?s=612x612&w=0&k=20&c=EvXMoj1pg2pT9p20mDN_t6iZ6I2bQpe0caqff3dur9M=" alt="" />
          </div>
        </div>
      </div>
      <div className="ml-11">
        {" "}
        <h1 className="text-3xl md:text-4xl">
          <span className="italic text-[#3CCF4E]">General</span> Admission
        </h1>
        <p className="py-3 text-[1.1rem]">
          We offer special rates for parties of 25 or more, unified school
          districts, and tour operators.
        </p>
        <p className="py-3 text-[1.1rem]">Contact us for more information.</p>
        <div className="py-4">
          <button className="bg-orange-500 text-white py-4 font-bold px-11">
            <Link to="/contact">Contact Us</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admission;
