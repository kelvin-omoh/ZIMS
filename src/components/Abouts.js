import React from "react";

const Abouts = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-11 px-4 ">
      <div className="flex justify-center">
        <div className="w-[1000px]  h-fit md:h-[130px] bg-[#F0EDD4] rounded-2xl py-11 px-9  text-center">
          <p className="font-semibold text-sm md:text-lg">
            Our mission is to promote conservation and preservation through
            memorable and educational encounters with African Wildlife in a
            natural environment.
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 py-11">
        <div className="col-span-2 self-center">
          <h2 className="font-bold text-2xl md:text-4xl">
            <span className="italic text-[#3CCF4E]">About</span> ZIMS Wildlife
            Park{" "}
          </h2>
          <p className="py-3">
            ZIMS Wildlife Park is located on approximately 160 acres in idiroko
            Otta, As a member of the Zoological Association of Nigeria as well
            as the Nigerian Association of Zoo Keepers, ZIMS is dedicated to
            responsible wildlife management, conservation, and
            education.Everyday, visitors can drive through over three miles of
            Ponderosa Pine Forest viewing North American animals in their
            natural habitats.More animals are exhibited in Fort ZIMS, a
            beautiful 20-acre walk-thru area, along winding paths which is more
            of a “zoo” typesetting.
          </p>
        </div>

        <div className="justify-center mx-auto self-center">
          <img
            className="object-cover h-[300px] rounded-xl"
            src="https://images.pexels.com/photos/3284299/pexels-photo-3284299.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="/"
          />
        </div>
        <div>
          <img
            className="object-cover rounded-xl"
            src="https://images.pexels.com/photos/2317536/pexels-photo-2317536.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Abouts;
