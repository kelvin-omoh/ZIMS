    import React from 'react'
    import { Link } from 'react-router-dom';

    const GeneralAdmission = () => {
    return (
        <div className='bg-zinc-100 py-9 mt-10'>
        <div className="max-w-[1240px]  mx-auto py-9 px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h1>
         General Admission
        </h1>
        <p className="py-3 text-[1.1rem]">
          ZIMS is open year-round. The price of admission includes both the
          self-guided drive-thru, the walk-thru, and our various shows.
        </p>
        <p className="py-3 text-[1.1rem]">
          Parking is included in your admission.
        </p>


        <p className="py-3 text-[1.1rem]">
          *ZIMS Barnyard “petting zoo” open Friday-Sunday
        </p>
        <div className="py-4">
          <button
           
            className="bg-orange-500 text-white py-4 font-bold px-11"
          >
            <Link to="/tickets">Buy Tickets Now</Link>
          </button>
        </div>
      </div>

      <div className="bg-zinc-200 py-3 px-5 rounded-xl p-9">
        <div className="flex justify-between py-2 border-b-2 border-zinc-300">
          <p className="text-[1.1rem]">Weekday-Senior (51-62+) Ticket</p>
          <p className="text-[1.1rem] font-thin ">#2000</p>
        </div>
        <div className="flex justify-between py-2 border-b-2 border-zinc-300">
          <p className="text-[1.1rem]">Weekday-Adult (13-61) Ticket</p>
          <p className="text-[1.1rem] font-thin ">#1500</p>
        </div>{" "}
        <div className="flex justify-between py-2 border-b-2 border-zinc-300">
          <p className="text-[1.1rem]">Weekday-child (4-12) Ticket</p>
          <p className="text-[1.1rem] font-thin ">#500</p>
        </div>{" "}
        <div className="flex justify-between py-2 border-b-2 border-zinc-300">
          <p className="text-[1.1rem]">Weekend-Senior (51-62+) Ticket</p>
          <p className="text-[1.1rem] font-thin ">#3000</p>
        </div>{" "}
        <div
          className="flex justify-between py-2 border-b-2 border-zinc-300"
          border-b-2
          border-zinc-300
        >
          <p className="text-[1.1rem]">Weekend-Adult (13-50) Ticket</p>
          <p className="text-[1.1rem] font-thin ">#3500</p>
        </div>
        <div className="flex justify-between py-2 border-b-2 border-zinc-300">
          <p className="text-[1.1rem]">Weekend-child (4-13) Ticket</p>
          <p className="text-[1.1rem] font-thin ">#1000</p>
        </div>
        <div className=" py-2">
          <p className="text-[1.1rem]  text-[#41ba4f]">
            {" "}
            children 3 & under are free{" "}
          </p>
        </div>
      </div>
    </div>
    </div>
    
  );

    }

    export default GeneralAdmission