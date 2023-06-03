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
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="h-[200px] w-[200px] bg-white p-2 text-black text-center place-items-center">
        <h1>my modal</h1>
        {/* <button onClick={onClose}>x</button> */}
      </div>
    </div>
  );
};

export default Modal;
