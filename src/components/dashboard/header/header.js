import React, { useState } from "react";
import DropdownArrow from "../../../icon/dropdownIcon";
import ControlIcon from "../../../icon/notificationIcon";
import HighlightCardLink from "../../../icon/highlightLinkIcon";
import ProfileIcon from "../../../icon/profileIcon";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className=" header-container sticky top-0 z-50 pl-4 pr-6 bg-[#1f1e1f] text-white flex justify-between items-center p-0">
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
          <div className="w-[10rem] text-sm flex pl-4 pr-4 h-[65px] items-center justify-between hover:bg-[#2e2e2e] transition-colors duration-300 cursor-pointer">
            {/* Name section */}
            <div className="flex flex-col">
              <div className="text-[12px]">Hi,</div>
              <span className="block font-bold">Usama</span>
            </div>

            {/* Dropdown arrow on the right */}
            <div className="ml-12">
              <DropdownArrow />
            </div>
          </div>
          <div className="w-[10rem] text-sm flex pl-4 pr-4 h-[65px] items-center justify-between hover:bg-[#2e2e2e] transition-colors duration-300 cursor-pointer">
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
          </div>
        </div>
      </div>

      {/* Right section with icons and dropdown */}
      <div className="flex items-center">
        <div className="h-[65px] w-[60px] hover:bg-[#2e2e2e] transition-colors duration-300 cursor-pointer">
          <ControlIcon />
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
        <div className="relative h-[65px] w-[60px] hover:bg-[#2e2e2e] transition-colors duration-300 cursor-pointer flex justify-center items-center">
          <div onClick={toggleDropdown} className="cursor-pointer">
            <div>
              <a
                className="items-center flex justify-center transition-colors duration-300 cursor-pointer"
                href="/"
              >
                <ProfileIcon />
              </a>
            </div>
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg py-2 z-10">
              <div className="px-4 py-2 border-b">
                <span className="font-semibold">Trial Start</span>
              </div>
              <div className="px-4 py-2 border-b">
                <strong>Available:</strong>
                <ul className="list-disc list-inside text-sm text-green-600">
                  <li>Loyalty card designs</li>
                  <li>Unlimited number of issued cards</li>
                  <li>1 location</li>
                  <li>Unlimited push messages</li>
                  <li>Checking customer base for duplicates</li>
                  <li>Stamps and awards accrual</li>
                </ul>
              </div>
              <div className="px-4 py-2 border-b">
                <strong>Unavailable:</strong>
                <ul className="list-disc list-inside text-sm text-red-600">
                  <li>Configuring integrations</li>
                  <li>Customizing custom fields</li>
                  <li>Export data</li>
                  <li>Referral program</li>
                  <li>Automatic push notifications</li>
                  <li>Creating managers</li>
                </ul>
              </div>
              <div className="px-4 py-2">
                <button className="w-full text-sm bg-gray-200 py-1 rounded">
                  Contact us for more
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
