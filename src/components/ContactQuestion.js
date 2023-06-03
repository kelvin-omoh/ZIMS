import React from "react";
import Elephant from '../assets/ELephant.png'
import { Link } from "react-router-dom";

const Admission = () => {
  return (
    <div className="max-w-[1240px]  mx-auto my-11 py-4 px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className=" flex flex-col  w-full">
        <div>
              <img
          className="  object-cover rounded-xl "
          src={Elephant}
          alt="/"
        />
        </div>
    
        <div className=" h-full grid grid-cols-1   md:grid-cols-2 gap-4 py-5">
          <div className=" ">
            <img  className="rounded-xl  object-cover" src="https://images.unsplash.com/photo-1610429196503-bd6a44252ba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpdmUlMjB0aHJ1fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <div>
            {" "}
            <img className="rounded-xl" src="https://media.istockphoto.com/id/1361427581/photo/a-chimpanzee-family-mahale-mountain-national-park-tanzania.jpg?s=612x612&w=0&k=20&c=EvXMoj1pg2pT9p20mDN_t6iZ6I2bQpe0caqff3dur9M=" alt="" />
          </div>
        </div>
      </div>
      <div className="ml-11 w-fit  self-center">
        {" "}
        <h1>
        Have a Question?
        </h1>
        <p className="py-3 text-[1.1rem]">
        We love answering visitor questions and educating about our amazing animals.
         Fill out our contact form and we will get one of our experts to respond as soon as possible.
        </p>
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
