import React from "react";

function PrimaryButton({ title }) {
  return (
    <div className="text-sm  inline-flex  text-white  px-24 rounded-md py-3 items-center  bg-[#1f1e1f]  transition-colors duration-300 cursor-pointer">
      {/* Name section */}
      <div className="block font-bold">{title}</div>
    </div>
  );
}

export default PrimaryButton;
