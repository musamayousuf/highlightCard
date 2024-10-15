import React, { useState } from "react";
import SettingHeaderButton from "../../components/button/settingHeaderButton";
import SettingsIcon from "../../icon/settinginsideIcon";

function SettingHeader({ onSectionSelect }) {
  const [activeButton, setActiveButton] = useState("plan"); // Default active button

  const handleButtonClick = (section) => {
    setActiveButton(section); // Set the active button
    onSectionSelect(section); // Call the passed function to change the active section
  };

  return (
    <div className="sticky top-[4rem] z-[50] bg-[#2E2E2E] h-16">
      <div className="pl-1 flex items-center pt-2 space-x-6">
        <div>
          <SettingsIcon color={"white"} size={"24"} />
        </div>
        <SettingHeaderButton
          title={"Plan"}
          width="w-20"
          onClick={() => handleButtonClick("plan")}
          className={
            activeButton === "plan" ? "bg-white text-black" : "text-white"
          }
        />
        <SettingHeaderButton
          title={"Personal settings"}
          width="w-40"
          onClick={() => handleButtonClick("personal")}
          className={
            activeButton === "personal" ? "bg-white text-black" : "text-white"
          }
        />
        <SettingHeaderButton
          title={"Integrations"}
          width="w-28"
          onClick={() => handleButtonClick("integrations")}
          className={
            activeButton === "integrations"
              ? "bg-white text-black"
              : "text-white"
          }
        />
        <SettingHeaderButton
          title={"About the agency"}
          width="w-40"
          onClick={() => handleButtonClick("about")}
          className={
            activeButton === "about" ? "bg-white text-black" : "text-white"
          }
        />
        <SettingHeaderButton
          title={"RFM"}
          width="w-20"
          onClick={() => handleButtonClick("rfm")}
          className={
            activeButton === "rfm" ? "bg-white text-black" : "text-white"
          }
        />
      </div>
    </div>
  );
}

export default SettingHeader;
