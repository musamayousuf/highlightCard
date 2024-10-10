import React from "react";
import DownArrowIcon from "../../icon/downArrowIcon";

function Dropdown({ title, width = "w-64" }) {
  return (
    <div
      className={` bg-white group text-sm inline-flex items-center justify-center text-[#1f1e1f] hover:text-white ${width} rounded-md py-3 border border-[#d5d5dd] hover:bg-[#2e2e2e] transition-colors duration-300 cursor-pointer`}
    >
      <div className="block text-center pr-3">{title}</div>
      <DownArrowIcon />
    </div>
  );
}

export default Dropdown;
