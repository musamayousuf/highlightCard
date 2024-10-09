import React from "react";
import DownloadButtonIcon from "../../icon/downloadbuttonIcon";
import Dropdown from "../../components/dropdown/dropdown";
import SearchTextArea from "../../components/searchText/searchTextArea";
import SecondaryButton from "../../components/button/secondary-button";
import DownArrowIcon from "../../icon/downArrowIcon";
import PrimaryButton from "../../components/button/primary-button";

function Manager() {
  return (
    <div className=" p-10 bg-[#f7f7f8]">
      <div className="flex space-x-5">
        <p className=" text-2xl">Managers</p>
        <div className="bg-gray-200 cursor-pointer rounded-md hover:bg-gray-50 inline-block p-3">
          <DownloadButtonIcon />
        </div>
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
                <th className="text-center w-6 bg-white mr-3">
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
          </table>
        </div>
        <div className="px-6">
          <SecondaryButton
            title={"Tariff limit reached"}
            width="w-full" // Ensure the button takes full width
            className="my-3" // Add margin for spacing
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-20">
        {/* Customer Import Section */}
        <div className="bg-white flex justify-between p-6  rounded-lg border border-gray-300">
          <div>
            <div className="">
              <h2 className="text-lg font-medium mb-2">Customer Import</h2>
              <p className="mb-4 w-64 text-sm mt-4 text-gray-500">
                Create managers to separate tracking their activity by issuing
                loyalty cards and drive loyalty program. Managers can be divided
                by sales points or by shifts.
              </p>
            </div>
            <div className="block mt-28">
              <div className="my-4">
                <SecondaryButton
                  title={"Tariff limit reached"}
                  width="w-72" // Ensure the button takes full width
                  className="my-3" // Add margin for spacing
                />
              </div>
            </div>
          </div>
          <div className=" ">
            <img
              className="w-14"
              src="https://app.highlightcards.co.uk/assets/images/highlights/manager.png"
            />
          </div>
        </div>

        {/* Push Notifications Section */}
        <div className="bg-white flex justify-between p-6  rounded-lg border border-gray-300">
          <div>
            <div className="">
              <h2 className="text-lg font-medium mb-2">Push</h2>
              <p className="mb-4 text-sm mt-4 w-72 text-gray-500">
                The scanner app allows managers to scan and award stamps/rewards
                to customers at the point of sale. No app installation is
                required, as the scanner works directly from your mobile
                browser.
              </p>
            </div>
            <div className="block mt-28">
              <div className="my-4">
                <PrimaryButton width="w-72" title={"Open"} />
              </div>
            </div>
          </div>
          <div className=" ">
            <img
              className=""
              width={50}
              src="https://app.highlightcards.co.uk/assets/images/highlights/app.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manager;
