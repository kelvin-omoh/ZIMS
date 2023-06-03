import React, { useState } from "react";
import {AiOutlineDown} from 'react-icons/ai'

const AccodionDetails = (props) => {
  const [item, setItem] = useState(props.datas);
  const handleToggleActive = () => {
    let newActive = item.active === 1 ? 0 : 1;
    setItem({ ...item, active: newActive });
  };

  return (
    <div>
      <div
        className={`bg-[#e9e9e9] p-5 border mt-5 rounded-md  duration-500 group ${item.active === 1 ? `is-active bg-[white]` : ''} `} >
        <div className="flex items-center">
          <div onClick={handleToggleActive} className="w-full text-xl duration-500 group-[.is-active]:font-bold ">
            {item.question}
          </div>
          <div
            onClick={handleToggleActive}
            className=" text-xl rotate-60  duration-500 group-[.is-active]:rotate-[180deg] cursor-pointer"
          >
          <AiOutlineDown />
          </div>
        </div>
        <div className=" overflow-hidden max-h-0 duration-500 group-[.is-active]:max-h-[100px]">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

export default AccodionDetails;
