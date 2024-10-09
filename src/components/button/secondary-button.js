import React from "react";

function SecondaryButton({ title, width = "w-64", className = "" }) {
  return (
    <button
      type="button" // Makes it clear this is a button
      className={`text-sm inline-flex items-center justify-center text-[#1f1e1f] hover:text-white ${width} rounded-md py-3 border border-[#d5d5dd] hover:bg-[#2e2e2e] transition-colors duration-300 cursor-pointer ${className}`}
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
