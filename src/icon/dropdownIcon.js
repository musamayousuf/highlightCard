import React from "react";

const DropdownArrow = () => {
  return (
    <div className=" flex w-6 h-6 rounded-full  bg-[#2e2e2e] hover:bg-gray-700 transition-colors duration-300 items-center justify-center">
      <svg
        viewBox="0 0 8 4"
        className="w-2 h-2 fill-current text-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.91815 0.0772947C7.80788 -0.0257649 7.62871 -0.0257649 7.51845 0.0772947L4.00387 3.36876L0.482394 0.0772947C0.372132 -0.0257649 0.192957 -0.0257649 0.082696 0.0772947C-0.0275653 0.180354 -0.0275653 0.347826 0.082696 0.450886L3.79713 3.92271C3.85226 3.97424 3.92117 4 3.99697 4C4.06589 4 4.14169 3.97424 4.19682 3.92271L7.91125 0.450886C8.02841 0.347826 8.02841 0.180354 7.91815 0.0772947Z"></path>
      </svg>
    </div>
  );
};

export default DropdownArrow;
