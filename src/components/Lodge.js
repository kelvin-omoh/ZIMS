import React from "react";

const Lodge = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-4 px-4 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left side */}
        <div>
          <h3 className="font-bold text-3xl">Lodging</h3>
          <li className="py-1">Bible Guest House Hotel</li>
          <li className="py-1">Fatokun Hotels</li>
          <li className="py-1">Channel 8 Premium Hotel</li>
          <li className="py-1">Tiffany Hotel</li>
          <li className="py-1">Ibadan Hotel</li>
          <li className="py-1">Cosmos city SuitesHotel</li>
          <li className="py-1">Rofel Hotel</li>
          <li className="py-1">E-Exclusive Hotel</li>
          <li className="py-1">Koltol Paradise Hotel</li>
          <li className="py-1">Enike Hotel</li>
          <li className="py-1">Brava Hotel</li>
          <li className="py-1">Adebayo Akande Hotel</li>
        </div>

        {/* Right side */}
        <div className='grid grid-cols-2 col-span-2 gap-4 '>
            <img className='object-cover  rounded-xl  w-full h-[230px]' src="https://plus.unsplash.com/premium_photo-1661886031345-d14bf4e09a07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJlZCUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"alt="" />
            <img className='row-span-2 rounded-xl  object-cover w-full h-[500px]' src="https://images.unsplash.com/photo-1591079381491-cb2c19ce7f15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmVkJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <img className='object-cover  rounded-xl w-full h-[260px]' src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"alt="" />
        </div>
        {/* <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="row-span-3">
            <img
              className="w-[600px] h-[540px] object-cover rounded-xl"
              src="https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="/"
            />
          </div>
          <div className="col-span-2">
            {" "}
            <img
              className=" object-cover rounded-xl"
              src="https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="/"
            />
          </div>
          <div className="row-span-2 col-span-2">
          <img  className='object-cover rounded-xl' src='https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/'/>
            
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Lodge;
