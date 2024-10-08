import React from "react";

function SecondaryButton({ title }) {
  return (
    <div className="text-sm inline-flex  items-center justify-center text-[#1f1e1f] w-64 rounded-md py-3 border border-[#d5d5dd] hover:bg-[#2e2e2e] transition-colors duration-300 cursor-pointer">
      <div className="block text-center">{title}</div>
    </div>
  );
}

export default SecondaryButton;
