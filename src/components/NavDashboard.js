import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TAMA from "../assets/TAMA.jpg";
import Profile from '../assets/profile.jpg'
import { UserAuth } from "../Context/AuthContext";

const NavDashboard = () => {
  // const menus = ["profile", "settings", "logout"];

  // const [show, setShow] = useState();
  const [open, setOpen] = useState();

  const menuRef = useRef();
  const imgRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setOpen(false);
    }
  });

  const {logout} = UserAuth();
  const navigate = useNavigate();
   
  const handleLogout = async () => {
      try {
            await logout();
            navigate('/verify');
            alert('logged out')
      }catch (e) {
        alert(e.message);
      }

  };

  return (
    <div className="absolute left-[14.2%]  w-[86%] my-20 h-[60px]  bg-zinc-200    ">
      <div className="">
        <div className="flex justify-between   w-full my-0 h-[60px]  bg-zinc-200  items-center py-4 px-7 gap-8 text-bold ">
          <p className="font-bold text-2xl text-indigo-700">
            <Link to="/dashboard">Dashboard</Link>
          </p>

          <div className="bg-red-800 rounded-full w-[3em] h-[3em]">
            <img
              ref={imgRef}
              onClick={() => setOpen(!open)}
              className="cursor-pointer rounded-full w-full h-full object-cover"
              src={Profile}
            />

            {open && (
              <div
                ref={menuRef}
                className="absolute right-6 e top-[4em] bg-white p-5 shadow-lg z-[11]  "
              >
                <ul>
                 <Link to='/profile'><li className="p-2 text-md cursor-pointer rounded hover:bg-zinc-100 ">
                    Profile
                  </li></Link> 
                  <li className="p-2 text-md cursor-pointer rounded hover:bg-zinc-100 ">
                    Settings
                  </li>
                  <li onClick={handleLogout} className="p-2 text-md cursor-pointer rounded hover:bg-zinc-100 ">
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/*           
          <li onClick={()=>setShow(!show)} className=" bg-red-800 rounded-full w-[3em] h-[3em]"><img className="rounded-full w-full h-full object-cover" src={TAMA}/></li>
          { show && <ul className="absolute right-6   top-[4em]">
           <select className=" bg-zinc-50  backdrop-blur-md  rounded-lg text-black p-4">
            <option onClick={()=>Navigate("/profile")}><Link to='/profile'>Profile</Link></option>
            <option>
              <button className=" p-4  text-white ">
               logout
              </button> 
            </option>
           
           </select>
          </ul> } */}
      </div>
    </div>
  );
};

export default NavDashboard;
