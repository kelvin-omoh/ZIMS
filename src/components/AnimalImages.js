import React from "react";
import Data from "./mockData";

const AnimalImages = () => {
  return (
    <div className="max-w-[1240px] mx-[15%] my-20">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 py-11">
        {Data.map((item) => (
          <img
            className="w-full h-[300px] object-cover rounded-2xl cursor-pointer hover:scale-105 ease-in-out duration-300"
            src={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimalImages;
