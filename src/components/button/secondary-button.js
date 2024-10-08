import React from "react";

function SecondaryButton({ title, width = "w-64", className = "" }) {
  return (
    <button
      type="button" // Makes it clear this is a button
      className={`text-sm inline-flex bg-gray-300  items-center justify-center text-gray-500 ${width} rounded-md py-3 border border-[#d5d5dd]  transition-colors duration-300  ${className}`}
    >
      <span className="block text-center">{title}</span>
    </button>
  );
}

SecondaryButton.defaultProps = {
  width: "w-64", // Default width
  className: "", // Default className
};

export default SecondaryButton;
