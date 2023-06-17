import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineDocument } from "react-icons/hi";
import { BsChevronBarDown, BsChevronDown, BsFillTicketDetailedFill,BsFillPeopleFill,BsRecordBtn } from "react-icons/bs";
import { GiAnimalSkull } from 'react-icons/gi'
import { GoReport } from "react-icons/go";
import { UserAuth } from "../Context/AuthContext";
// import{RiArrowDropDownLine} from 'react-icons/ri'
// import{BiSolidReport} from 'react-icons/bi'

const SupervisorLayout = () => {
 

  const {logout} = UserAuth();
  const navigate = useNavigate();
   
  const handleLogout = async () => {
      try {
            await logout();
            navigate('/verify');
            // alert('logged out')
      }catch (e) {
        alert(e.message);
      }

  };


  return (
    <div className=" flex  fixed h-full w-full">
      <div className="bg-[#120A22] text-center text-white w-[213px] relative list-none flex p-5 flex-col h-screen ">
        <h1 className="text-center  mt-10 text-[19px]"> ZIMS SUPERVISOR</h1>
        <ul className="list-none flex w-[100%] text-center  h-[100%]  my-[4em] flex-col gap-8">
          <Link
            className=" flex items-center  gap-2 p-4 border  cursor-pointer border-indigo-900 hover:bg-white hover:text-black"
            to="/visitor"
            // className="flex justify-start  items-center gap-2"
          >
            <li className="flex items-center  gap-2">
                <BsFillPeopleFill size={20}/>
                  Visitors{" "}
            </li>
          </Link>

          {/* Drop down */}
          <Link
         
            className="flex p-4 border  cursor-pointer border-indigo-900  hover:bg-white hover:text-black"
            to="/sanimal"
            
          > 
            <li className="flex justify-start items-start  gap-3 ">
                <GiAnimalSkull size={20}/>
                Animals
            </li>
          </Link>
          
{/* 
          <Link
            className="flex p-4 border cursor-pointer border-indigo-900 hover:bg-white hover:text-black"
            to=""
          >
            <li className="flex justify-start items-center gap-2">
              Normal Citizen
            </li>
          </Link>

          <Link
            className="flex p-4  gap-3 border  cursor-pointer border-indigo-900 hover:bg-white hover:text-black"
            to=""
          >
            <li className="flex justify-start items-center gap-3">
             Foreigner
            </li>
          </Link> */}

          <Link
            className="flex  gap-3  cursor-pointer p-4 border border-indigo-900 hover:bg-white hover:text-black"
            to="/pastrecord"
          >
            <li className="flex  justify-start items-center gap-3">
                <BsRecordBtn size={20} />
              Past Record
            </li>
          </Link>

          <li className=" bottom-[2em] cursor-pointer w-full absolute ">
            <button onClick={handleLogout} className=" bg-indigo-700 justify-center flex  items-center w-[70%]">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SupervisorLayout;
