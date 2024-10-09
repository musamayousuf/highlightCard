import React from "react";

function PrimaryButton({ title, width = "w-64" }) {
  return (
    <div
      className={`text-sm  inline-flex ${width}  text-white justify-center w-64 rounded-md py-3 items-center  bg-[#1f1e1f]  transition-colors duration-300 cursor-pointer`}
    >
      <div className="block font-bold text-center">{title}</div>
    </div>
  );
}

export default PrimaryButton;
