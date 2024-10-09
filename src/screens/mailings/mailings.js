import React from "react";
import FilterIcon from "../../icon/filterIcon";
import DownArrowIcon from "../../icon/downArrowIcon";
import SecondaryButton from "../../components/button/secondary-button";
import Dropdown from "../../components/dropdown/dropdown";
import SearchTextArea from "../../components/searchText/searchTextArea";

function Mailings() {
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
        <div className="bg-[#f19319] pl-4 text-white py-2 border border-[#e3860e]">
          <p>
            To create mailings, you need to connect an SMS or Email provider in
            the settings.{" "}
            <span className="underline cursor-pointer">Connect</span>
          </p>
        </div>
        <div className="flex items-center space-x-4 my-7">
          <Dropdown title={"Actions"} />
          <SearchTextArea title={"Search"} />
        </div>

        {/* Customer Table */}
        <div className="rounded-lg shadow border border-[#d5d5dd] ">
          <div className="overflow-x-auto ">
            <table className="min-w-full b-2  bg-white  rounded-lg">
              <thead>
                <tr className="bg-white  border-gray-200 border-b">
                  <th className="text-center w-6 bg-white"></th>
                  <th className="flex justify-between items-center bg-white text-xs font-medium  h-full px-2 py-4">
                    <span>NAME</span>
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
                    <span className="pl-2">Recipients</span>
                  </th>
                  <th className="text-left bg-white text-xs font-medium border-l-2 ">
                    <span className="pl-2">Mailing type </span>
                  </th>
                  <th className="text-left bg-white text-xs font-medium border-l-2 ">
                    <span className="pl-2">Status</span>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mailings;
