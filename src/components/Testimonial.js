import React from "react";
import Damisi from '../assets/damisi.jpeg'
import IFEOLUWA from '../assets/IFEOLUWA.jpg'
import TAMA from '../assets/TAMA.jpg'
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-4 px-4">
      <div className="grid sm:grid-cols lg:grid-cols-3 gap-4">
        {/* Card Container */}
        <div className="flex flex-col border text-left rounded-2xl py-12 px-8 ">
          <div className="items-center text-center">
            <div className="inline-block rounded-full ">
              <img
                className="object-cover w-24 h-24 rounded-full self-center "
                src={TAMA}
                alt="/"
              />
            </div>
          </div>
          <h3 className="text-2xl text-center font-bold py-4 uppercase">
            Favour Zipamor
          </h3>
          <p>
            This is our second time here and we just love it. Such a great
            little park. They have expanded some of the walk through exhibits
            and added a nice restaurant and gift shop since we were there last.
            Highly recommend going through the drive through a few times. We got
            there about 10:30 and some of the animals weren't moving around
            much. Did the walk through part and did one more drive loop on the
            way out and the animals were far more active.
          </p>
          <div className="flex justify-center gap-6 pt-7">
            <AiOutlineStar className=" text-yellow-500" size={25} />
            <AiOutlineStar className=" text-yellow-500" size={25} />
            <AiOutlineStar className=" text-yellow-500" size={25} />
            <AiOutlineStar className=" text-yellow-500" size={25} />
            <AiOutlineStar className=" text-yellow-500" size={25} />
          </div>
        </div>
        <div className="flex flex-col border text-left rounded-2xl py-12 px-8 ">
          <div className="items-center text-center">
            <div className="inline-block rounded-full ">
              <img
                className=" object-cover w-24 h-24 rounded-full self-center "
                src={IFEOLUWA}
                alt="/"
              />
            </div>
          </div>
          <h3 className="text-2xl text-center font-bold py-4 uppercase">
            Ifeoluwa Onu Gift
          </h3>
          <p>
            This is our second time here and we just love it. Such a great
            little park. They have expanded some of the walk through exhibits
            and added a nice restaurant and gift shop since we were there last.
            Highly recommend going through the drive through a few times. We got
            there about 10:30 and some of the animals weren't moving around
            much. Did the walk through part and did one more drive loop on the
            way out and the animals were far more active.
          </p>
          <div className="flex justify-center gap-6 pt-7">
            <AiOutlineStar className=" text-yellow-500" size={25} />
            <AiOutlineStar className=" text-yellow-500" size={25} />
            <AiOutlineStar className=" text-yellow-500" size={25} />
            <AiOutlineStar className=" text-yellow-500" size={25} />
            <AiOutlineStar className=" text-yellow-500" size={25} />
          </div>
        </div>
        <div className="flex flex-col border text-left rounded-2xl py-12 px-8 ">
          <div className="items-center text-center">
            <div className="inline-block rounded-full ">
              <img
                className="object-cover w-24 h-24 rounded-full self-center "
                src={Damisi}
                alt="/"
              />
            </div>
          </div>
          <h3 className="text-2xl text-center font-bold py-4 uppercase">
            Damisi AKINBOUHUNJE
          </h3>
          <p>
            This is our second time here and we just love it. Such a great
            little park. They have expanded some of the walk through exhibits
            and added a nice restaurant and gift shop since we were there last.
            Highly recommend going through the drive through a few times. We got
            there about 10:30 and some of the animals weren't moving around
            much. Did the walk through part and did one more drive loop on the
            way out and the animals were far more active.
          </p>
          <div className="flex justify-center gap-6 pt-7">
            <AiOutlineStar className=" text-yellow-500" size={25} />
            <AiOutlineStar className=" text-yellow-500" size={25} />
            <AiOutlineStar className=" text-yellow-500" size={25} />
            <AiOutlineStar className=" text-yellow-500" size={25} />
            <AiOutlineStar className=" text-yellow-500" size={25} />
          </div>
        </div>
        
        
      </div>
      <div className="flex justify-center items-center py-8">
          <button className="bg-orange-500 text-white py-4 font-bold px-11">
            <Link to="/">More Reviews</Link>
          </button>
        </div>  
    </div>
  );
};

export default Testimonial;
