import React from "react";

const Modal = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;

  return (
    <div
      onClick={handleOnClose}
      id="container"
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-[10] "
    >
      <div className="h-[400px] w-[500px] bg-white p-5 text-black place-items-center rounded-xl ">
      <form  className='flex flex-col'>
            <label className='pt-4' >Your Name</label>
            <input className='rounded-lg  h-12 bg-[#e9e9e9] p-2' type='text' name=" your name"></input>
            <label className='pt-4' >Email</label>
            <input className='rounded-lg h-12 bg-[#e9e9e9] p-2' type='email' name="email"></input>
            
        <button className='text-white mt-8  bg-orange-500 py-3  rounded-lg'>Pay Now</button>
        
          </form>
        {/* <button onClick={onClose}>x</button> */}
      </div>
    </div>
  );
};

export default Modal;
