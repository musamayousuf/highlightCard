import React from "react";
import DownArrowIcon from "../../icon/downArrowIcon";
import Searchicon from "../../icon/searchicon";

function SearchTextArea({ title }) {
  return (
    <div className=" relative w-full">
      <input
        type="text"
        placeholder={title}
        className="text-sm bg-white  text-[#1f1e1f] w-full rounded-md py-3 pl-3 pr-10 border border-[#d5d5dd] transition-colors duration-300 focus:outline-none focus:border-blue-500"
      />
      <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <Searchicon className="text-gray-400" />
      </span>
    </div>
  );
}

export default SearchTextArea;
