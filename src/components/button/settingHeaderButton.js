import React from "react";

function SettingHeaderButton({ title, width = "w-64" }) {
  return (
    <div
      className={`text-sm  border border-[#83838a] hover:bg-[#2E2E2E] inline-flex ${width} text-white justify-center rounded-sm py-2 items-center bg-[#454545] transition-colors duration-300 cursor-pointer`}
    >
      <div className="block font-light text-center">{title}</div>
    </div>
  );
}

export default SettingHeaderButton;
