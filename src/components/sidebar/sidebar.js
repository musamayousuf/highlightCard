import React from "react";
import HomeIcon from "../../icon/homeIcon";
import ClientIcon from "../../icon/clientIcon";
import ChatIcon from "../../icon/chatIcon";
import CustomerLinkIcon from "../../icon/customerLinkIcon";
import ManagerIcon from "../../icon/managerIcon";
import { Link } from "react-router-dom";
import Settingcon from "../../icon/settingIcon";

function Sidebar() {
  return (
    <>
      <div class="fixed top-5 mt-5 left-0 bottom-0 w-14 bg-[#EAEAED] text-white flex flex-col p-4">
        <div class="flex flex-col space-y-2 mt-16">
          <a to="/home" class="flex items-center justify-center p-2 rounded ">
            {/* <span class="material-icons mr-2">dashboard</span> */}
            <HomeIcon isSelected={true} />
          </a>
          <Link
            to="/cards"
            class="flex items-center justify-center p-2 rounded hover:bg-gray-700"
          >
            <ClientIcon />
          </Link>
          <Link
            to="/customers"
            class="flex items-center p-2 rounded justify-center hover:bg-gray-700"
          >
            <CustomerLinkIcon />
          </Link>
          <a
            href="#referrals"
            class="flex items-center p-2 rounded justify-center hover:bg-gray-700"
          >
            <ChatIcon />
          </a>
          <Link
            href="#settings"
            class="flex items-center p-2 rounded justify-center hover:bg-gray-700"
          >
            {/* <Location> */}
            <ManagerIcon />
          </Link>
          <Link
            href="#settings"
            class="flex items-center p-2 rounded justify-center hover:bg-gray-700"
          >
            <Settingcon />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
