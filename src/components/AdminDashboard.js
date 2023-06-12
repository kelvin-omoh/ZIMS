import React from "react";
import Layout from "./Layout";
import NavDashboard from "./NavDashboard";

const AdminDashboard = () => {
  return (
    <div className="relative w-full h-full flex  ">
      {/* <Layout /> */}
      {/* <NavDashboard /> */}

      <div className="absolute left-[13.5%] w-[86.5%]  mt-24 -z-10">
        {/* <div className="flex justify-center items-center">hbvskjdfhlkhfldzhldszh</div> */}
        <div class="h-[200px] grid grid-cols-1 md:grid-cols-4 gap-11 my-20 p-3 font-bold">
          <div class="bg-zinc-300 p-5 ">Total Animals</div>
          <div class="col-span-2 text-center bg-zinc-300  p-5   ">Total Normal Adult Visitor </div>
          <div class=" bg-zinc-300 p-5  ">
            Total Normal children Visitor{" "}
          </div>
          <div class=" bg-zinc-300 p-5">Today Normal Adult Visitor</div>
          <div class="bg-zinc-300 p-5  ">Today Normal child Visitor </div>
          <div class="bg-zinc-300  p-5  ">Yesterday Normal Adult Visitor </div>
          <div class="bg-zinc-300  p-5  ">yesterday Normal Adult Visitor </div>
          <div class=" text-center  col-span-2 bg-zinc-300  p-5">
            Total Foreigner Adult Visitor{" "}
          </div>
          <div class=" text-center col-span-2 bg-zinc-300 p-5">
            Total Foreigner child Visitor
          </div>
          <div class=" bg-zinc-300 p-5   ">Today Foreigner Adult Visitor</div>
          <div class=" bg-zinc-300 p-5   ">Today Foreigner Child Visitor</div>
          <div class=" bg-zinc-300 p-5   ">
            Yesterday Foreigner Adult Visitor
          </div>
          <div class=" bg-zinc-300 p-5   ">
            Yesterday Foreigner Child Visitor
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
