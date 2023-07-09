import React, { useState } from "react";
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

const Modal = ({ visible, onClose }) => {

  const [price,setPrice]=useState('3500')
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;




  const config = {
    public_key: `FLWPUBK-1c46a86a8acd1b72feee728436447289-X`,
    tx_ref: Date.now(),
    amount: price,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'enaikeleomoh@gmail.com',
       phone_number: '09073597660',
      name: 'Enaikele Omoh Kelvin',
    },
    customizations: {
      title: 'ZIMS TICKET',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Pay Now',
    callback: (response) => {
       console.log(response);
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };


  return (
    <div
      onClick={handleOnClose}
      id="container"
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-[10] "
    >
      <div className="h-[500px] w-[500px] bg-white p-5 text-black place-items-center rounded-xl ">
      <form onSubmit={(e)=>e.preventDefault()}  className='flex flex-col'>
            <label className='pt-4' >Full Name</label>
            <input className='rounded-lg  h-12 bg-[#e9e9e9] p-2' type='text' placeholder="Full Name" name=" your name"></input>
            <label className='pt-4' >Email</label>
            <input className='rounded-lg  h-12 bg-[#e9e9e9] p-2' type='text' placeholder="Full Name" name=" your name"></input>
            <label className='pt-4' >Phone No</label>
            <input className='rounded-lg h-12 bg-[#e9e9e9] p-2' type='tel' placeholder="phone no" name="Phone no"></input>
            <label className='pt-4 pb-4'  for="cars">Select Ticket type</label>

              <select onChange={(e)=>{setPrice(e.target.value)
             }} className="bg-[#e9e9e9] h-11 p-2 " name="cars" id="cars">
                <option value={3500} ><p className="text-[1.1rem]">Weekday-Senior normal  (51-62+) - ₦3500</p></option>
                <option value={4000}><p className="text-[1.1rem]">Weekday-Adult normal(18-50) - ₦4000</p> </option>
                <option value={2500}><p className="text-[1.1rem]">Weekday-Child normal(4-17) - ₦2500</p></option>
                <option  value={3500}><p className="text-[1.1rem]">Weekend-Senior normal(51-62+) - ₦4000</p></option>
                <option  value={4000}><p className="text-[1.1rem]">Weekend-Adult normal(18-50) - ₦3500</p></option>
                <option value={2000}><p className="text-[1.1rem]">Weekend-Child normal(4-17) - ₦2000</p></option>
                <option value={3500} ><p className="text-[1.1rem]">Weekday-Senior Foreigner  (51-62+) - $10</p></option>
                <option value={4000}><p className="text-[1.1rem]">Weekday-Adult Foreigner (18-50) - $10</p> </option>
                <option value={2500}><p className="text-[1.1rem]">Weekday-Child  Foreigner(4-17) - $8</p></option>
                <option  value={3500}><p className="text-[1.1rem]">Weekend-Senior Foreigner (51-62+) - $11</p></option>
                <option  value={4000}><p className="text-[1.1rem]">Weekend-Adult Foreigner (18-50) - $11</p></option>
                <option value={2000}><p className="text-[1.1rem]">Weekend-Child Foreigner(4-17) - $8</p></option>


              </select>
              {/* <div className="flex justify-between w-full bg-red-600 py-2 border-b-2 border-zinc-300">
          <p className="text-[1.1rem]">Weekday-Senior (51-62+) Ticket</p>
          <p className="text-[1.1rem] font-thin ">4000</p>
             </div> */}
            
        <FlutterWaveButton className='text-white mt-8  bg-orange-500 py-3  rounded-lg' {...fwConfig} />
          </form>
          
        
        {/* <button onClick={onClose}>x</button> */}
      </div>
    </div>
  );
};

export default Modal;
