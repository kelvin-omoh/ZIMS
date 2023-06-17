import React from "react";
import UpdateAnimal from "./UpdateAnimal";
import Layout from "./Layout";
import NavDashboard from "./NavDashboard";

const AddRemove = () => {
  const handleUpdate = {};

  return (
  
    
    <div className=" ">
        <Layout/>
        <NavDashboard />
        <div className="absolute left-[13.5%] w-[81%] mt-40 ml-11 p-8 bg-zinc-100 z-[10]">
      <div className="relative w-full flex flex-col mb-6 z-[-1]">
        <div className="block bg-transparent w-full overflow-x-auto">
          <h3 className="font-bold py-3 text-xl">Manage Animals</h3>

          <table className="w-full">
            <thead className="bg-zinc-100">
              <tr className="border-b border-gray-400">
                <th className="text-md px-6 py-3">S/N</th>
                <th className="text-md px-6 py-3">Cage Number</th>
                <th className="text-md px-6 py-3">Animal Name</th>
                <th className="text-md px-6 py-3">Feed Number</th>
                <th className="text-md px-6 py-3">Breed</th>
                <th className="text-md px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr className="border-b border-gray-300 items-center">
                <th className="text-md px-6 py-3">1</th>
                <td className="text-md px-6 py-3">232</td>
                <td className="text-md px-6 py-3">Lion</td>
                <td className="text-md px-6 py-3">7</td>
                <td className="text-md px-6 py-3">Lion</td>
                <td className="text-md px-6 py-3 flex justify-center items-center gap-2 text-white">
                  <button className="bg-blue-600 py-1 px-3">Edit</button>
                  <button className="bg-red-600 py-1 px-3">Delete</button>
                </td>
              </tr>

              {/* <tr className="border-b border-gray-300">
                <th className="text-md px-6 py-3">2</th>
                <td className="text-md px-6 py-3">112</td>
                <td className="text-md px-6 py-3">Jaguar</td>
                <td className="text-md px-6 py-3">3</td>
                <td className="text-md px-6 py-3">Lion</td>
                <td className="text-md px-6 py-3 flex justify-center items-center gap-2 text-white">
                  <button className="bg-blue-600 py-1 px-3">Edit</button>
                  <button className="bg-red-600 py-1 px-3">Delete</button>
                </td>
              </tr>

              <tr className="border-b border-gray-300">
                <th className="text-md px-6 py-3">3</th>
                <td className="text-md px-6 py-3">123</td>
                <td className="text-md px-6 py-3">Tiger</td>
                <td className="text-md px-6 py-3">5</td>
                <td className="text-md px-6 py-3 flex justify-center items-center gap-2 text-white">
                  <button className="bg-blue-600 py-1 px-3">Edit</button>
                  <button className="bg-red-600 py-1 px-3">Delete</button>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="text-md px-6 py-3">4</th>
                <td className="text-md px-6 py-3">4320</td>
                <td className="text-md px-6 py-3">Leopard</td>
                <td className="text-md px-6 py-3">5</td>
                <td className="text-md px-6 py-3 flex justify-center items-center gap-2 text-white">
                  <button className="bg-blue-600 py-1 px-3">Edit</button>
                  <button className="bg-red-600 py-1 px-3">Delete</button>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="text-md px-6 py-3">5</th>
                <td className="text-md px-6 py-3">223</td>
                <td className="text-md px-6 py-3">Goat</td>
                <td className="text-md px-6 py-3">5</td>
                <td className="text-md px-6 py-3 flex justify-center items-center gap-2 text-white">
                  <button className="bg-blue-600 py-1 px-3">Edit</button>
                  <button className="bg-red-600 py-1 px-3">Delete</button>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="text-md px-6 py-3">6</th>
                <td className="text-md px-6 py-3">665</td>
                <td className="text-md px-6 py-3">Parrot</td>
                <td className="text-md px-6 py-3">5</td>
                <td className="text-md px-6 py-3 flex justify-center items-center gap-2 text-white">
                  <button className="bg-blue-600 py-1 px-3">Edit</button>
                  <button className="bg-red-600 py-1 px-3">Delete</button>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="text-md px-6 py-3">7</th>
                <td className="text-md px-6 py-3">332</td>
                <td className="text-md px-6 py-3">cobra</td>
                <td className="text-md px-6 py-3">5</td>
                <td className="text-md px-6 py-3 flex justify-center items-center gap-2 text-white">
                  <button className="bg-blue-600 py-1 px-3">Edit</button>
                  <button className="bg-red-600 py-1 px-3">Delete</button>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="text-md px-6 py-3">8</th>
                <td className="text-md px-6 py-3">220</td>
                <td className="text-md px-6 py-3">python</td>
                <td className="text-md px-6 py-3">5</td>
                <td className="text-md px-6 py-3 flex justify-center items-center gap-2 text-white">
                  <button className="bg-blue-600 py-1 px-3">Edit</button>
                  <button className="bg-red-600 py-1 px-3">Delete</button>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
      </div>
      {/* <UpdateAnimal/> */}
    </div>
  );
};

export default AddRemove;
