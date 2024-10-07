import React from "react";

function PrimaryButton({ title }) {
  return (
    <div className="text-sm  inline-flex  text-white  px-24 rounded-md py-3 items-center  hover:bg-[#2e2e2e]  transition-colors duration-300 cursor-pointer">
      <div className="block font-bold">{title}</div>
    </div>
  );
}

export default PrimaryButton;
