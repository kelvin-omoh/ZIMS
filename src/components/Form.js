import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4cpxr4e",
        "template_vbrns8q",
        form.current,
        "KMLLi2Oc3lysuFJTS"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");

        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name=" your name" />
    //   <label>Email</label>
    //   <input type="email" name="email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>

    <div className='max-w-[1240px] mx-auto mt-9 py-4 px-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
      {/* Left side */}
      <div>
        <h1 className="text-5xl md:5xl">Get In Touch</h1>
        <p className='text-sm md:text-lg py-2'>We would love to hear from you!</p>
        <div className='flex flex-col gap-4'>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col'>
            <label className='pt-4' >Your Name</label>
            <input className='rounded-lg  h-12 bg-[#e9e9e9] p-2' type='text' name=" your name"></input>
            <label className='pt-4' >Email</label>
            <input className='rounded-lg h-12 bg-[#e9e9e9] p-2' type='email' name="email"></input>
            <label className='pt-4' >Details</label>
            <textarea className='bg-[#e9e9e9]   rounded-lg p-3' rows='6' placeholder='Type a short message here' name="message"/>
            
        <input className='text-white mt-4  bg-orange-500 py-3  rounded-lg  hover:scale-105 ease-in-out duration-300' type="submit" value="Send"/>

        
          </form>
        </div>
       
      </div>
      {/* Right side */}
      <div className='w-full h-full'>
     <iframe className='w-full h-full' class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=900&amp;height=400&amp;hl=en&amp;q=lagos ojota &amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      </div>

    </div>
  );
};

export default Form;
