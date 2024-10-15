import React from "react";
import DownArrowIcon from "../../icon/downArrowIcon";

function FormDropdown({ title, width = "w-64", label }) {
  return (
    <div>
      <label class="block mb-2 text-md font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <div
        className={` bg-white  text-sm flex justify-between px-4 items-center  text-[#1f1e1f] ${width} rounded-md h-10  border border-[#d5d5dd] transition-colors  cursor-pointer`}
      >
        <div className="block text-center pr-3">{title}</div>
        <div>
          <DownArrowIcon />
        </div>
      </div>
    </div>
  );
}

export default FormDropdown;
