import React from "react";
import UpdateTicketType from "./UpdateTicketType";
import { Link } from "react-router-dom";

const NormalTicket = () => {
  return (
    <div className="absolute left-[13.5%] w-[81%] mt-40 ml-11 p-8 bg-zinc-100 ">
      <h3 className="font-bold text-xl">View Details of Tickets</h3>
      <div className="w-full">
        <table className="w-full text-center">
          <thead className="bg-zinc-100">
            <tr className="border-b border-gray-400">
              <th className="text-md px-6 py-3">S/N</th>
              <th className="text-md px-6 py-3">Ticket Type</th>
              <th className="text-md px-6 py-3">Price</th>
              <th className="text-md px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300 items-center">
              <th className="text-md px-6 py-3">1</th>
              <td className="text-md px-6 py-3">Normal Adult</td>
              <td className="text-md px-6 py-3">#1000</td>
              <td className="text-md px-6 py-3 flex justify-center items-center gap-2 text-white">
              <Link to='/updatetickets'><button className="bg-blue-600 py-1 px-3">Edit</button></Link>
              </td>
            </tr>

            <tr className="border-b border-gray-300 items-center">
              <th className="text-md px-6 py-3">2</th>
              <td className="text-md px-6 py-3">Normal Child</td>
              <td className="text-md px-6 py-3">#500</td>
              <td className="text-md px-6 py-3 flex justify-center items-center gap-2 text-white">
              <Link to='/updatetickets'><button className="bg-blue-600 py-1 px-3">Edit</button></Link>
              </td>
            </tr> <tr className="border-b border-gray-300 items-center">
              <th className="text-md px-6 py-3">3</th>
              <td className="text-md px-6 py-3">Foreigner Adult</td>
              <td className="text-md px-6 py-3">#3000</td>
              <td className="text-md px-6 py-3 flex justify-center items-center gap-2 text-white">
              <Link to='/updatetickets'><button className="bg-blue-600 py-1 px-3">Edit</button></Link>
              </td>
            </tr> <tr className="border-b border-gray-300 items-center">
              <th className="text-md px-6 py-3">4</th>
              <td className="text-md px-6 py-3">Foreigner Child</td>
              <td className="text-md px-6 py-3">#1000</td>
              <td className="text-md px-6 py-3 flex justify-center items-center gap-2 text-white">
              <Link to='/updatetickets'><button className="bg-blue-600 py-1 px-3">Edit</button></Link>
              </td>
            </tr>
          </tbody>
        </table> 
      </div>

{/* <UpdateTicketType/> */}
    </div>
  );
};

export default NormalTicket;
