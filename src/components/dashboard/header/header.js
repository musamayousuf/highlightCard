import React, { useState } from "react";
import DropdownArrow from "../../../icon/dropdownIcon";
import ControlIcon from "../../../icon/notificationIcon";
import HighlightCardLink from "../../../icon/highlightLinkIcon";
import ProfileIcon from "../../../icon/profileIcon";
import RfmIcon from "../../../icon/rfmIcon";
import SettingIcon from "../../../icon/settingIcon";
import PlusCircleIcon from "../../../icon/plusCircleIcon";
import StatisticsIcon from "../../../icon/statisticsIcon";
import ScannerAppIcon from "../../../icon/scannerIcon";
import LogoutIcon from "../../../icon/logIcon";
import SettingsIcon from "../../../icon/settinginsideIcon";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isImplementationDropdownOpen, setIsImplementationDropdownOpen] =
    useState(false);
  const [isControlDropdownOpen, setIsControlDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleisProfileOpen = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleisNotificationOpen = () => {
    setIsControlDropdownOpen(!isControlDropdownOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleImplementationDropdown = () => {
    setIsImplementationDropdownOpen(!isImplementationDropdownOpen);
  };

  return (
    <header className="header-container sticky top-0 z-50 pl-4 pr-6 bg-[#1f1e1f] text-white flex justify-between items-center p-0">
      {/* Left section with logo */}
      <div className="flex">
        <div className="left-section flex items-center">
          <img
            src="https://cdn.digitalwallet.cards/products/149/themes/149/logoLight"
            alt="Logo"
            className="h-8 w-40 object-contain"
          />
        </div>

        {/* Center section with implementation status */}
        <div className="flex items-center ml-5">
          <div
            className={`w-[10rem] text-sm flex pl-4 pr-4 h-[65px] items-center justify-between transition-colors duration-300 cursor-pointer relative ${
              isDropdownOpen ? "bg-[#2e2e2e]" : "hover:bg-[#2e2e2e]"
            }`}
            onClick={toggleDropdown}
          >
            {/* Name section */}
            <div className="flex flex-col">
              <div className="text-[12px]">Hi,</div>
              <span className="block font-bold">Usama</span>
            </div>

            {/* Dropdown arrow on the right */}
            <div className="ml-12">
              <DropdownArrow />
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-[33.5rem] bg-[#2e2e2e] text-white shadow-lg z-50">
                <div className="px-4 py-5 border-b border-gray-600 bg-[#454545]">
                  <span className="font-semibold">
                    <span className="font-light p-2">Trial</span>Start
                  </span>
                </div>
                <div className="flex border-b border-gray-600 bg-[#2e2c2e] p-2">
                  <div className="w-1/2 px-4 py-2">
                    <strong className="text-green-400">Available:</strong>
                    <ul className="text-start list-disc list-inside text-xs text-white mt-2 leading-4">
                      <li>1 loyalty card design</li>
                      <li>Unlimited number of issued cards by promotion</li>
                      <li>1 location</li>
                      <li>Unlimited push messages</li>
                      <li>Checking the customer base for duplicates</li>
                      <li>Stamps and awards accrual</li>
                    </ul>
                  </div>

                  {/* Vertical line separator */}
                  <div className="w-px bg-gray-600 mx-2 my-3"></div>

                  <div className="w-1/2 px-4 py-2">
                    <strong className="text-[#ff3c05]">Unavailable:</strong>
                    <ul className="list-disc list-inside text-xs text-white mt-2 leading-4">
                      <li>Configuring integrations</li>
                      <li>Customizing custom fields</li>
                      <li>Export data from the service</li>
                      <li>Confirming a phone number when issuing a card</li>
                      <li>Referral program</li>
                      <li>Automatic push notifications</li>
                      <li>Custom auto-push</li>
                      <li>Creating managers</li>
                    </ul>
                  </div>
                </div>
                <div className="px-6 py-6 bg-[#454545]">
                  <p className="text-xs">
                    Your plan is
                    <span className="font-bold"> Start (Trial)</span>
                  </p>
                  <p className="text-xs mt-2">
                    If you have a need for more functionality, contact us to
                    find out more about our other plans.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div
            className={`w-[10rem] text-sm flex pl-4 pr-4 h-[65px] items-center justify-between hover:bg-[#2e2e2e] transition-colors duration-300 cursor-pointer relative  ${
              isImplementationDropdownOpen
                ? "bg-[#2e2e2e]"
                : "hover:bg-[#2e2e2e]"
            }`}
            onClick={toggleImplementationDropdown}
          >
            {/* Implementation section */}
            <div className="flex flex-col">
              <div className="text-[12px]">Implementation:</div>
              <div className="block font-bold mt-2">
                <div className="implementation-bar w-16 h-2 bg-black border border-white rounded-sm">
                  <div
                    className="bar-filled bg-orange-500 h-full"
                    style={{ width: "20%" }} // Adjust the width dynamically
                  ></div>
                </div>
              </div>
            </div>

            {/* Dropdown arrow on the right */}
            <div className="ml-7">
              <DropdownArrow />
            </div>

            {/* Implementation Dropdown */}
            {isImplementationDropdownOpen && (
              <div className="absolute top-full left-0 w-[15rem] bg-[#2e2e2e] text-white shadow-lg z-50 ">
                <div className="pl-4 pt-2 pb-5">
                  <p className="font-semibold">
                    Stage: <br />
                    <span className="text-red-500 font-semibold ">Start</span>
                  </p>
                  <p className="text-xs mt-2">
                    Recommendation: <br />
                    <span className=" font-semibold text-sm ">
                      Activate your loyalty card
                    </span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right section with icons and dropdown */}
      <div className="flex items-center">
        <div
          className={`h-[65px] w-[60px]  cursor-pointer  ${
            isControlDropdownOpen ? "bg-[#2e2e2e]" : "hover:bg-[#2e2e2e]"
          }`}
          onClick={toggleisNotificationOpen}
        >
          <ControlIcon />
          {isControlDropdownOpen && (
            <div className="p-5 absolute top-full right-[4.5] w-auto h-32 bg-[#2e2e2e] text-white shadow-lg z-50">
              <p className="mb-4 text-sm">Mailing progress</p>
              <div className="implementation-bar w-56 h-2 bg-black border border-white rounded-sm">
                <div
                  className="bar-filled bg-green-500 h-full"
                  style={{ width: "70%" }} // Adjust the width dynamically
                ></div>
              </div>
              <div className="flex justify-between text-xs">
                <p>0 mail sent</p>
                <p>0</p>
              </div>
            </div>
          )}
        </div>
        <div className="h-[65px] w-[60px] hover:bg-[#2e2e2e] transition-colors duration-300 cursor-pointer">
          <HighlightCardLink />
        </div>
        <div className="h-[65px] w-[60px] hover:bg-[#2e2e2e] transition-colors duration-300 cursor-pointer flex justify-center items-center">
          <a
            className="h-7 w-7 text-sm flex items-center justify-center border border-current rounded-full transition-colors duration-200 cursor-pointer text-white-500"
            href="/"
          >
            <div className="_currentLanguage_xfwsk_1">En</div>
          </a>
        </div>

        {/* Dropdown for profile */}
        <div
          className={`relative h-[65px] w-[60px] hover:bg-[#2e2e2e] transition-colors duration-300 cursor-pointer flex justify-center items-center ${
            isProfileDropdownOpen ? "bg-[#2e2e2e]" : "hover:bg-[#2e2e2e]"
          }`}
          onClick={toggleisProfileOpen}
        >
          <ProfileIcon />

          {/* Dropdown Menu */}
          {isProfileDropdownOpen && (
            <div className="absolute top-full right-[-24px] w-64  pt-2 bg-[#2e2e2e] text-white shadow-lg z-50  ">
              <ul className="">
                <li className="pl-8 py-4 hover:bg-[#454545] flex items-center">
                  <ProfileIcon className={"text-white "} />
                  <span className="ml-4"> My Profile</span>
                </li>
                <hr className=" border-gray-600" />

                <li className="pl-8  px-4 py-4 hover:bg-[#454545] flex items-center">
                  <PlusCircleIcon width="24" className={"text-white "} />

                  <span className="ml-4"> Create Card</span>
                </li>
                <hr className=" border-gray-600" />

                <li className="px-4 pl-8  py-4 hover:bg-[#454545] flex items-center">
                  <StatisticsIcon width="24" className={"text-white "} />

                  <span className="ml-4"> Statistics</span>
                </li>
                <hr className=" border-gray-600" />

                <li className="px-4 pl-8  py-4 hover:bg-[#454545] flex items-center">
                  <SettingsIcon width="24" color="white" />

                  <span className="ml-4"> Settings</span>
                </li>
                <hr className=" border-gray-600" />

                <li className="px-4 pl-8  py-4 hover:bg-[#454545] flex items-center">
                  <ScannerAppIcon width="24" className={"text-white "} />

                  <span className="ml-4"> Scanner App</span>
                </li>
                <hr className=" border-gray-600" />

                <li className="px-4 pl-8  py-4 hover:bg-[#454545] flex items-center">
                  <LogoutIcon width="24" className={"text-white "} />

                  <span className="ml-4"> Log Out</span>
                </li>
                <hr className=" border-gray-600" />
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
