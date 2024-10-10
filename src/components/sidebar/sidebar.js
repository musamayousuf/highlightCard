import React, { useState } from "react";
import HomeIcon from "../../icon/homeIcon";
import ClientIcon from "../../icon/clientIcon";
import ChatIcon from "../../icon/chatIcon";
import CustomerLinkIcon from "../../icon/customerLinkIcon";
import ManagerIcon from "../../icon/managerIcon";
import SettingIcon from "../../icon/settingIcon";
import { Link } from "react-router-dom";
import LocationIcon from "../../icon/locationIcon";

function Sidebar({ onIconClick }) {
  const [selectedIcon, setSelectedIcon] = useState("home");

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
    console.log("Sidebar icon clicked:", icon); // Debugging to see if the click works
    onIconClick(icon); // Notify the parent component about the clicked icon
  };

  return (
    <div className="fixed top-5 mt-5 left-0 bottom-0 w-14 bg-[#EAEAED] text-white flex flex-col p-4">
      <div className="flex flex-col space-y-2 mt-16">
        <Link
          to="/home"
          onClick={() => handleIconClick("home")}
          className="flex items-center justify-center rounded"
        >
          <HomeIcon isSelected={selectedIcon === "home"} />
        </Link>
        <Link
          to="/cards"
          onClick={() => handleIconClick("cards")}
          className="flex items-center justify-center rounded"
        >
          <ClientIcon isSelected={selectedIcon === "cards"} />
        </Link>
        <Link
          to="/customers"
          onClick={() => handleIconClick("customers")}
          className="flex items-center justify-center rounded"
        >
          <CustomerLinkIcon isSelected={selectedIcon === "customers"} />
        </Link>
        <Link
          to="/mailings"
          onClick={() => handleIconClick("referrals")}
          className="flex items-center justify-center rounded"
        >
          <ChatIcon isSelected={selectedIcon === "referrals"} />
        </Link>
        <Link
          to="/locations"
          onClick={() => handleIconClick("locations")}
          className="flex items-center justify-center rounded"
        >
          <LocationIcon isSelected={selectedIcon === "locations"} />
        </Link>
        <Link
          to="/manager"
          onClick={() => handleIconClick("manager")}
          className="flex items-center justify-center rounded"
        >
          <ManagerIcon isSelected={selectedIcon === "manager"} />
        </Link>
        <Link
          to="/settings"
          onClick={() => handleIconClick("settings")}
          className="flex items-center justify-center rounded"
        >
          <SettingIcon
            size={"white"}
            isSelected={selectedIcon === "settings"}
          />
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
