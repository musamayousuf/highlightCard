import React, { useState } from "react";
import SettingHeaderButton from "../../components/button/settingHeaderButton";
import SettingsIcon from "../../icon/settinginsideIcon";
import EditIcon from "../../icon/editIcon";
import Inputfield from "../../components/inputField/inputfield";
import QrCodeIcon from "../../icon/qrcodeIcon";
import QuestionIcon from "../../icon/questionIcon";

function CardHeader({ onSectionSelect }) {
  const [activeButton, setActiveButton] = useState("plan"); // Default active button

  const handleButtonClick = (section) => {
    setActiveButton(section); // Set the active button
    onSectionSelect(section); // Call the passed function to change the active section
  };

  return (
    <div className="sticky top-[4rem] z-[50] bg-[#2E2E2E] h-16">
      <div className="pl-5 flex items-center h-full space-x-6">
        <div className="mr-4">
          <EditIcon width="24" color="white" />
        </div>
        <div>
          <input
            id="first_name"
            className="border bg-transparent border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 w-56 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 leading-none"
            placeholder="Stamp card № 1"
            required
          />
        </div>

        <SettingHeaderButton
          title="Card Type"
          width="w-36"
          onClick={() => handleButtonClick("plan")}
          className={
            activeButton === "plan" ? "bg-white text-black" : "text-white"
          }
        />
        <SettingHeaderButton
          title="Settings"
          width="w-36"
          onClick={() => handleButtonClick("personal")}
          className={
            activeButton === "personal" ? "bg-white text-black" : "text-white"
          }
        />
        <SettingHeaderButton
          title="Design"
          width="w-28"
          onClick={() => handleButtonClick("integrations")}
          className={
            activeButton === "integrations"
              ? "bg-white text-black"
              : "text-white"
          }
        />
        <SettingHeaderButton
          title="Information"
          width="w-36"
          onClick={() => handleButtonClick("about")}
          className={
            activeButton === "about" ? "bg-white text-black" : "text-white"
          }
        />

        <div className="rounded-md border border-gray-400 bg-[#454545]  p-[0.4rem]">
          <QuestionIcon width="25" color="white" />
        </div>
        <SettingHeaderButton
          title="Save and Preview"
          width="w-40"
          onClick={() => handleButtonClick("rfm")}
          className={
            activeButton === "rfm" ? "bg-white text-black" : "text-white"
          }
        />
        <div className="rounded-md border border-gray-600 p-2">
          <QrCodeIcon width="27" color="grey" />
        </div>
      </div>
    </div>
  );
}

export default CardHeader;
