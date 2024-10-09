import React, { useState } from "react";
import HomeIcon from "../../icon/homeIcon";
import ClientIcon from "../../icon/clientIcon";
import ChatIcon from "../../icon/chatIcon";
import CustomerLinkIcon from "../../icon/customerLinkIcon";
import ManagerIcon from "../../icon/managerIcon";
import Settingcon from "../../icon/settingIcon";
import { Link } from "react-router-dom";
import LocationIcon from "../../icon/locationIcon";

function Sidebar() {
  const [selectedIcon, setSelectedIcon] = useState("home");

  return (
    <div className="fixed top-5 mt-5 left-0 bottom-0 w-14 bg-[#EAEAED] text-white flex flex-col p-4">
      <div className="flex flex-col space-y-2 mt-16">
        <Link
          to="/home"
          onClick={() => setSelectedIcon("home")}
          className="flex items-center justify-center  rounded"
        >
          <HomeIcon isSelected={selectedIcon === "home"} />
        </Link>
        <Link
          to="/cards"
          onClick={() => setSelectedIcon("cards")}
          className="flex items-center justify-center  rounded"
        >
          <ClientIcon isSelected={selectedIcon === "cards"} />
        </Link>
        <Link
          to="/customers"
          onClick={() => setSelectedIcon("customers")}
          className="flex items-center justify-center  rounded"
        >
          <CustomerLinkIcon isSelected={selectedIcon === "customers"} />
        </Link>
        <Link
          to="/mailings"
          onClick={() => setSelectedIcon("referrals")}
          className="flex items-center justify-center  rounded"
        >
          <ChatIcon isSelected={selectedIcon === "referrals"} />
        </Link>
        <Link
          to="/locations"
          onClick={() => setSelectedIcon("locations")}
          className="flex items-center justify-center  rounded"
        >
          <LocationIcon isSelected={selectedIcon === "locations"} />
        </Link>
        <Link
          to="/manager"
          onClick={() => setSelectedIcon("manager")}
          className="flex items-center justify-center  rounded"
        >
          <ManagerIcon isSelected={selectedIcon === "manager"} />
        </Link>
        <Link
          to="/settings"
          onClick={() => setSelectedIcon("settings")}
          className="flex items-center justify-center  rounded"
        >
          <Settingcon isSelected={selectedIcon === "settings"} />
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
