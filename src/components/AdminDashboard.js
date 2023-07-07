import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import NavDashboard from "./NavDashboard";
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../firebase";

const AdminDashboard = () => {
  const [data,setData]=useState([])
  const[supeerVisorData,setSuperVisorData]=useState([])
  useEffect(()=>{

   const ReadingAnimalDetails=async()=>{
    const querySnapshot = await getDocs(collection(db, "AnimalDetails"));
    const animalDetail=[]
    querySnapshot.forEach((doc) => {
      animalDetail.push({...doc.data(),id:doc.id})
      console.log(doc.data());
    });
    setData(animalDetail)
    console.log(animalDetail);
    // console.log(data,"ee");
  
   
 
  }



  

   ReadingAnimalDetails()

  },[])

  useEffect(()=>{
    const ReadingSupervisorDetails=async()=>{
      const querySnapshot = await getDocs(collection(db, "SupervisorDetail"));
      const superv=[]
      querySnapshot.forEach((doc) => {
        superv?.push({...doc?.data()})
        console.log(doc.data());
      });
      setSuperVisorData(superv)
      console.log(supeerVisorData,"ee");
      // console.log(supeerVisorData[1].ForeignerAdult
        // );
    
     
   
    }
    ReadingSupervisorDetails()
  },[data])
  return (
    <div className="relative w-full h-full flex  ">

      <div className="absolute left-[13.5%] w-[86.5%]  mt-24 -z-10">
      
        <div class="h-[200px] grid grid-cols-1 md:grid-cols-4 gap-11 my-20 p-3 font-bold">
          <div class="bg-zinc-300 p-5 ">Total Animals <p className="text-red-700">{data.length}</p></div>
          <div class="col-span-2 text-center bg-zinc-300  p-5   ">Total Normal Adult Visitor
           <p className="text-indigo-700">{ supeerVisorData.length>0 &&supeerVisorData.reduce((total, obj) => total + parseInt(obj.NormalAdult || 0), 0)}</p>
           </div>
          <div class=" bg-zinc-300 p-5  ">
            Total Normal children Visitor <p className="text-indigo-700"> {supeerVisorData.length>0 ?supeerVisorData.reduce((total, obj) => total + parseInt(obj.NormalChild || 0), 0):0}</p>
          </div>

          <div class=" bg-zinc-300 p-5">Today Normal Adult Visitor  <p className="text-green-700">{supeerVisorData.length>0 ? supeerVisorData[4].NormalAdult :0}</p> </div>
          <div class="bg-zinc-300 p-5  ">Today Normal child Visitor  <p className="text-green-700">{supeerVisorData.length>0? supeerVisorData[1].NormalChild:0}</p></div>
          <div class="bg-zinc-300  p-5  ">Yesterday Normal Adult Visitor  <p className="text-red-700">{supeerVisorData.length>0?supeerVisorData[0].NormalAdult:0}</p></div>
          <div class="bg-zinc-300  p-5  ">yesterday Normal child Visitor <p className="text-red-700">{supeerVisorData.length>0?supeerVisorData[0 ].NormalChild:0}</p> </div>

          <div class=" text-center  col-span-2 bg-zinc-300  p-5">
            Total Foreigner Adult Visitor <p className="text-indigo-700"> {supeerVisorData.length>0 ?supeerVisorData.reduce((total, obj) => total + parseInt(obj.ForeignerAdult || 0), 0):0}</p>
          </div>
          <div class=" text-center col-span-2 bg-zinc-300 p-5">
            Total Foreigner child Visitor  <p className="text-indigo-700">{supeerVisorData.length>0 ?supeerVisorData.reduce((total, obj) => total + parseInt(obj.ForeignerChild || 0), 0):0}</p>
          </div>

          <div class=" bg-zinc-300 p-5   ">Today Foreigner Adult Visitor <p className="text-green-700"> {supeerVisorData.length>0 ?supeerVisorData[1].ForeignerAdult:0}</p></div>
          <div class=" bg-zinc-300 p-5   ">Today Foreigner Child Visitor <p className="text-green-700"> {supeerVisorData.length>0 ?supeerVisorData[1].ForeignerChild:0}</p></div>
          <div class=" bg-zinc-300 p-5   ">
            Yesterday Foreigner Adult Visitor <p className="text-red-700">{supeerVisorData.length>0 ?supeerVisorData[0].ForeignerAdult:0}</p>
          </div>
          <div class=" bg-zinc-300 p-5   ">
            Yesterday Foreigner Child Visitor <p className="text-red-700">{supeerVisorData.length>0?supeerVisorData[0].ForeignerChild:0}</p>

          </div>
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;
