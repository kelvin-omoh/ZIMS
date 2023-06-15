import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineDocument } from "react-icons/hi";
import { BsChevronBarDown, BsChevronDown, BsFillTicketDetailedFill } from "react-icons/bs";
import { GoReport } from "react-icons/go";
import { UserAuth } from "../Context/AuthContext";
// import{RiArrowDropDownLine} from 'react-icons/ri'
// import{BiSolidReport} from 'react-icons/bi'

const Layout = () => {
  const [showSelect, setShowSelect] = useState(true);
  const [currentText,setCurrentText]=useState("Animal Detail")
  const changeText=(text) => {
  // setCurrentText(text)
  }

  const {logout} = UserAuth();
  const navigate = useNavigate();
   
  const handleLogout = async () => {
      try {
            await logout();
            navigate('/signin');
            // alert('logged out')
      }catch (e) {
        alert(e.message);
      }

  };


  return (
    <div className=" flex  fixed h-full w-full">
      <div className="bg-[#120A22] text-white w-[213px] relative list-none flex p-5 flex-col h-screen ">
        <h1 className="text-center text-[1.7em]"> ZIMS ADMIN</h1>
        <ul className="list-none flex w-[100%] text-start h-[100%]  my-[4em] flex-col gap-8">
          <Link
            className=" flex items-center gap-2 p-4 border cursor-pointer border-indigo-900 hover:bg-white hover:text-black"
            to="/dashboard"
            // className="flex justify-start  items-center gap-2"
          >
            <li className="flex items-center gap-2">
              <RxDashboard size={20} />
              Dashboard{" "}
            </li>
          </Link>

          {/* Drop down */}
          <Link
            onClick={() => setShowSelect(!showSelect)}
            className="flex p-4 border  cursor-pointer border-indigo-900  hover:bg-white hover:text-black"
            to="/animaldetails"
            
          > 
            <li className="flex justify-start items-start  gap-3 ">
            <HiOutlineDocument className="flex items-center" size={25} />
              <ul  className=" w-full flex flex-col items-center gap-4 text-[.9em]">
                
               
                <li className={` ${showSelect ? "block" :'hidden'}`}   onClick={() => setShowSelect(!showSelect)}>{currentText}</li>
                <Link to='/edit'><li className={`block ${showSelect &&'hidden'}`}   onClick={() => changeText("1 DETAIL")}>Edit</li></Link>
                <li className={`block ${showSelect &&'hidden'}`}   onClick={() => changeText("2 DETAIL")}>2 Details</li>
                <li className={`block ${showSelect &&'hidden'}`}   onClick={() => changeText("3 DETAIL")}>3 Details</li>
               
               
                
              </ul>
              
              

              <BsChevronDown className="" size={20}/>
            </li>
          </Link>
          
          {/* <div className="bg-white text-black p-2  flex flex-col items-center cursor-pointer ">
                <ul>
                  <li>Add/Remove </li>
                  <li>Add/Remove </li>
                  <li>Add/Remove </li>

                </ul>
              </div>   */}

          <Link
            className="flex p-4 border cursor-pointer border-indigo-900 hover:bg-white hover:text-black"
            to="/managetickets"
          >
            <li className="flex justify-start items-center gap-2">
              <BsFillTicketDetailedFill size={20} />
              Manage Tickets
            </li>
          </Link>

          <Link
            className="flex p-4  gap-3 border  cursor-pointer border-indigo-900 hover:bg-white hover:text-black"
            to="/report"
          >
            <li className="flex justify-start items-center gap-3">
              <GoReport size={20} />
              Report
            </li>
          </Link>

          <Link
            className="flex  gap-3  cursor-pointer p-4 border border-indigo-900 hover:bg-white hover:text-black"
            to="/search"
          >
            <li className="flex  justify-start items-center gap-3">
              <AiOutlineSearch size={20} /> Search
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

export default Layout;
