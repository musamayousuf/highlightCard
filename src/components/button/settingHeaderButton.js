import React from "react";

const SettingHeaderButton = ({ title, width, onClick, className }) => {
  return (
    <button
      className={`py-2 px-4 rounded border border-neutral-500 bg-[#454545] ${width} ${className}`} // Merge classes
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default SettingHeaderButton;
