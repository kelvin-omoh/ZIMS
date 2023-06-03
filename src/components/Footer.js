import React from "react";
import {Link} from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaMailBulk } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="w-full mt-5 bg-black  text-gray-100 py-2 px-4">
      <div className="flex  flex-col md:flex-row justify-between mx-[10%] gap-[1em] md:gap-[14em]   border-b-2 border-gray-600 py-8 px-4">
        <div className=" flex flex-row w-[90%] gap-[2em] md:flex-row md:w-full  justify-between">
        <div>
          <h6 className="font-bold   uppercare pt-8">
            ZIMS Wildlife Park
          </h6>
          <ul className="pt-2">
            <li className="py-1">70-3065-7654</li>
            <li className="py-1">eessien396@gmail.com</li>
            <li className="py-1">Lagos,Nigeria</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold text-xl uppercare pt-8">Quiklinks</h6>
          <ul className="pt-2">
         <li className="py-1"><Link to='/about'>About Us</Link></li>
            <li className="py-1"><Link to='/accodion'>FAQS</Link></li>
            <li className="py-1"><Link to='/contact'>Contact Us</Link></li>
          </ul>
        </div>
        </div>
        <div className=" py-8 md:pt-2">
          <h6 className="font-bold text-xl uppercare pt-8">
            Subscribe To Newsletter
          </h6>
          <p className="py-4">
            Get the latest discounts, promotions, & exclusive benefits delivered
            straight to your inbox
          </p>
          <form className="w-full flex flex-cols sm:flex-row">
            <input
              className="md:w-[400px] p-2 mr-4 rounded-md mb-4 text-black"
              type="email"
              placeholder="Enter email...."
            />
            <button className="p-2 mb-4 rounded-md"><Link to='/'>Subcribe</Link></button>
          </form>
        </div>
      </div>
      <div className="flex flex-col max-w-[1400px] px-2 mx-[10%] justify-between  sm:flex-row text-center">
        <p className="py-4">ZIMS 2023, All right reserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
         <Link to='/'><FaFacebook /></Link> 
          <Link to='/'><FaInstagram /></Link>
          <Link to='/'><FaTwitter /></Link> 
          <Link to='/'><TiSocialPinterest size={30} /></Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
