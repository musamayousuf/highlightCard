import React from "react";
import HeartIcon from "../../icon/heartIcon";
import SmileIcon from "../../icon/smileIcon";
import RfmIcon from "../../icon/rfmIcon";
import CommunicationIcon from "../../icon/communicationIcon";
import PlusIcon from "../../icon/plusIcon";
import Settingcon from "../../icon/settingIcon";
import FilterIcon from "../../icon/filterIcon";
import FolderIcon from "../../icon/folderIcon";
import Dropdown from "../../components/dropdown/dropdown";
import SearchTextArea from "../../components/searchText/searchTextArea";
import DropdownArrow from "../../icon/dropdownIcon";
import DownArrowIcon from "../../icon/downArrowIcon";
import SecondaryButton from "../../components/button/secondary-button";
import PrimaryButton from "../../components/button/primary-button";

function Customers() {
  return (
    <div className="p-4 bg-[#F7F7F8]">
      <div className=" text-2xl bg-[#F7F7F8]">
        <p>Customer base</p>
      </div>
      <div className="pt-6 font-sans bg-[#F7F7F8]">
        {/* Summary Section */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          <div className=" bg-white p-5 rounded-sm shadow border border-[#d5d5dd]">
            <h2 className="text-4xl  text-start">1</h2>
            <p className="text-start text-sm mt-4 ">Customers total</p>
          </div>
          <div className=" bg-white p-5  rounded-lg shadow border border-[#d5d5dd] ">
            <h2 className="text-4xl  text-start">1</h2>
            <p className="text-start text-sm mt-4 ">Cards installed</p>
          </div>
          <div className="  bg-white p-5  rounded-lg shadow border border-[#d5d5dd]">
            <h2 className="text-4xl  text-start">0</h2>
            <p className="text-start text-sm mt-4">Cards transactions</p>
          </div>
          <div className=" bg-white p-5  rounded-lg shadow border border-[#d5d5dd]">
            <div className="flex justify-start text-yellow-400">★★★★★</div>
            <p className="text-start text-sm mt-4">Feedback rating</p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex pl-7  space-x-4 mb-6 bg-white p-2 rounded-lg shadow border border-[#d5d5dd] ">
          <button className="bg-gray-200 flex items-center py-1 my-3 px-4 rounded-md hover:bg-[#454545] hover:text-white text-xs text-gray-500 group">
            <span className="pr-2">
              <FilterIcon />
            </span>
            My Filters
          </button>
          <button className="bg-gray-200 flex items-center py-1 my-3 px-4 rounded-md hover:bg-[#454545] hover:text-white text-xs text-gray-500 group">
            <span className="pr-2">
              <FolderIcon />
            </span>
            My Segments
          </button>
          <button className="bg-gray-200 flex items-center py-1 my-3 px-4 rounded-md hover:bg-[#454545] hover:text-white text-xs text-gray-500 group">
            <span className="pr-2">
              <SmileIcon />
            </span>
            Loyalty
          </button>
          <button className="bg-gray-200 flex items-center py-1 my-3 px-4 rounded-md hover:bg-[#454545] hover:text-white text-xs text-gray-500 group">
            <span className="pr-2">
              <RfmIcon />
            </span>
            RFM-segments
          </button>
          <button className="bg-gray-200 flex items-center py-1 my-3 px-4 rounded-md hover:bg-[#454545] hover:text-white text-xs text-gray-500 group">
            <span className="pr-2">
              <CommunicationIcon />
            </span>
            Communication
          </button>
          <button className="bg-gray-200 my-3 px-3 py-2 text-center rounded-md hover:bg-[#454545] hover:text-white text-xs text-gray-500 group flex items-center justify-center">
            <PlusIcon />
          </button>
          <button className=" my-3 px-3 py-2 text-center rounded-md hover:bg-[#454545] hover:text-white text-xs text-gray-500 group flex items-center justify-center">
            <Settingcon />
          </button>
        </div>
        <div className="flex items-center space-x-4 my-7">
          <Dropdown title={"Actions"} />
          <SearchTextArea title={"Search"} />
        </div>

        {/* Customer Table */}
        <div className="rounded-lg shadow border border-[#d5d5dd] ">
          <div className="overflow-x-auto mt-5">
            <table className="min-w-full b-2  bg-white  rounded-lg">
              <thead>
                <tr className="bg-white py-2 border-gray-200 border-b">
                  <th className="text-center w-6 bg-white">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="custom-checkbox mt-2 w-7 h-7 ml-2 bg-gray-400 text-green-600 bg-black-100 border-gray-200 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </th>
                  <th className="flex justify-between items-center bg-white text-xs font-medium border-l-2 h-full px-2 py-4">
                    <span>USER NAME</span>
                    <span>
                      <DownArrowIcon />
                    </span>
                  </th>

                  <th className="text-left bg-white text-xs font-medium border-l-2 ">
                    <span className="pl-2">BIRTHDATE</span>
                  </th>
                  <th className="flex justify-between items-center bg-white text-xs font-medium border-l-2  h-full px-2 py-4">
                    <span>CREATED</span>
                    <span>
                      <DownArrowIcon />
                    </span>
                  </th>
                  <th className="text-left bg-white text-xs font-medium border-l-2 ">
                    <span className="pl-2">PHONE</span>
                  </th>
                  <th className="text-left bg-white text-xs font-medium border-l-2 ">
                    <span className="pl-2">FEEDBACK RATING</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Usama Yousuf</td>
                  <td className="py-2 px-4 border-b">02-10-2024 21:07</td>
                  <td className="py-2 px-4 border-b">21-03-1999</td>
                  <td className="py-2 px-4 border-b">+923234343423</td>
                  <td className="py-2 px-4 border-b">
                    <div className="flex justify-center text-yellow-400">
                      ★★★★☆
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-6">
            <SecondaryButton
              title={"Add Customer"}
              width="w-full" // Ensure the button takes full width
              className="my-3" // Add margin for spacing
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-2 gap-6 mt-20">
        {/* Customer Import Section */}
        <div className="bg-white flex justify-between p-6  rounded-lg border border-gray-300">
          <div>
            <div className="">
              <h2 className="text-lg font-medium mb-2">Customer Import</h2>
              <p className="mb-4 text-sm mt-4">
                Import clients via xlsx template
              </p>
            </div>
            <div className="block mt-20">
              <div className="my-4">
                <PrimaryButton title={"Download Import Template"} />{" "}
              </div>
              <div className="my-4">
                <PrimaryButton title={"Import"} />
              </div>
            </div>
          </div>
          <div className=" ">
            <img
              className="w-16"
              src="https://app.highlightcards.co.uk/assets/images/highlights/flash.png"
            />
          </div>
        </div>

        {/* Push Notifications Section */}
        <div className="bg-white flex justify-between p-6  rounded-lg border border-gray-300">
          <div>
            <div className="">
              <h2 className="text-lg font-medium mb-2">Push</h2>
              <p className="mb-4 text-sm mt-4">
                Send push notifications to your customers
              </p>
            </div>
            <div className="block mt-20">
              <div className="my-4">
                <PrimaryButton title={"Download Import Template"} />{" "}
              </div>
              <div className="my-4">
                <PrimaryButton title={"Import"} />
              </div>
            </div>
          </div>
          <div className=" ">
            <img
              className="w-16"
              src="https://app.highlightcards.co.uk/assets/images/highlights/rocket.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
