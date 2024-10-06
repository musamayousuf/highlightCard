import React from "react";
import HomeIcon from "../../icon/homeIcon";
import ClientIcon from "../../icon/clientIcon";
import ChatIcon from "../../icon/chatIcon";
import CustomerLinkIcon from "../../icon/customerLinkIcon";
import ManagerIcon from "../../icon/managerIcon";
import Settingcon from "../../icon/settingIcon";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import RoiIcon from "../../icon/roiIcon";

const data = [
  { name: "Sep 03", visits: 0 },
  { name: "Sep 04", visits: 0 },
  { name: "Sep 05", visits: 0 },
  { name: "Sep 06", visits: 0 },
  { name: "Oct 02", visits: 1 },
];
function Sidebar() {
  return (
    <>
      <div class="fixed top-5 left-0 bottom-0 w-14 bg-[#EAEAED] text-white flex flex-col p-4">
        <div class="flex flex-col space-y-2 mt-16">
          <a
            href="#dashboard"
            class="flex items-center justify-center p-2 rounded hover:bg-gray-700"
          >
            {/* <span class="material-icons mr-2">dashboard</span> */}
            <HomeIcon />
          </a>
          <a
            href="#customers"
            class="flex items-center justify-center p-2 rounded hover:bg-gray-700"
          >
            <ClientIcon />
          </a>
          <a
            href="#loyalty"
            class="flex items-center p-2 rounded justify-center hover:bg-gray-700"
          >
            <CustomerLinkIcon />
          </a>
          <a
            href="#referrals"
            class="flex items-center p-2 rounded justify-center hover:bg-gray-700"
          >
            <ChatIcon />
          </a>
          <a
            href="#settings"
            class="flex items-center p-2 rounded justify-center hover:bg-gray-700"
          >
            {/* <Location> */}
            <ManagerIcon />
          </a>
          <a
            href="#settings"
            class="flex items-center p-2 rounded justify-center hover:bg-gray-700"
          >
            <Settingcon />
          </a>
        </div>
      </div>
      <div>
        <div class="ml-12 p-4 bg-[#F7F7F8] ">
          <div className="p-4 ">
            <div className="flex justify-between mb-2">
              <div>
                <h2 className="text-2xl font-semibold">Dashboard</h2>
              </div>
              <div className="flex space-x-4 ">
                <p className="bg-[#ffffff] cursor-pointer hover:bg-[#e9e9ec]   flex justify-center items-center  text-[0.75rem] text-[#656565] pr-3 pl-3">
                  Day
                </p>
                <p className="bg-[#ffffff] flex justify-center hover:bg-[#e9e9ec] cursor-pointer  items-center  text-[0.75rem] text-[#656565] pr-3 pl-3">
                  Week
                </p>
                <p className="bg-[#ffffff] flex justify-center hover:bg-[#e9e9ec] cursor-pointer  items-center  text-[0.75rem] text-[#656565] pr-3 pl-3">
                  Month
                </p>
                <p className="bg-[#ffffff] flex justify-center hover:bg-[#e9e9ec] cursor-pointer  items-center  text-[0.75rem] text-[#656565] pr-3 pl-3">
                  Year
                </p>
                <p className="bg-[#ffffff] flex justify-center hover:bg-[#e9e9ec] cursor-pointer   items-center  text-[0.75rem] text-[#656565] pr-3 pl-3">
                  All time
                </p>
                <p className="bg-[#ffffff] flex justify-center hover:bg-[#e9e9ec] cursor-pointer   items-center  text-[0.75rem] text-[#656565] pr-3 pl-3">
                  Period
                </p>
              </div>
            </div>
          </div>

          <div className="custom-box-shadow mx-4">
            <p className="p-4 font-bold text-[#333] flex items-center">
              All time, 02 October 2024 - 06 October 2024
            </p>
            <hr class="h-px  bg-gray-200 border-0 custom-box"></hr>
            <div className="grid grid-cols-[75%_25%] ">
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3  ">
                  <div className="p-4 bg-white border-r-2">
                    <p>Total visits</p>
                    <h3 className="text-2xl ">0</h3>
                  </div>

                  <div className="p-4 bg-white border-r-2">
                    <p>Repeat customers</p>
                    <h3 className="text-2xl">0</h3>
                  </div>

                  <div className="p-4 bg-white ">
                    <p>New members</p>
                    <h3 className="text-2xl text-green-500">1</h3>
                  </div>
                </div>

                <div className="p-4 bg-white  mt-4">
                  <BarChart width={800} height={220} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="visits" fill="#8884d8" />
                  </BarChart>
                </div>
              </div>

              <div className="border-l-2 ">
                <div className="pl-2 ">
                  <div className=" flex items-center justify-between pl-3 pr-12 text-[#333]">
                    <div>
                      <p className="font-medium text-[2.5rem]">0</p>
                    </div>
                    <div className="bg-[#fef1e1] flex justify-center items-center rounded-full w-10 h-10 ">
                      <img
                        className=""
                        src="https://app.highlightcards.co.uk/assets/images/rate/rate-default.svg"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between pb-4">
                    <div class="flex items-center just before:content-[''] pt-4 pl-4  before:block before:w-[.5rem] before:h-[.5rem] before:rounded-full before:bg-[#1e51ce] before:mr-[.8rem]">
                      <div class="text-[0.8rem] leading-[1.66667]  text-[#656565] tracking-[-.024rem]">
                        Repeat customers
                      </div>
                    </div>
                    <div className="pr-16 text-[#ca914b]">0</div>
                  </div>
                </div>
                <hr class="mr-6  bg-gray-200 border-0 custom-box"></hr>
                <div className="pl-2 ">
                  <div className=" flex items-center justify-between pl-3 pr-12 text-[#333]">
                    <div>
                      <p className="font-medium text-[2.5rem]">0</p>
                    </div>
                    <div className="bg-[#fef1e1] flex justify-center items-center rounded-full w-10 h-10 ">
                      <img
                        className=""
                        src="https://app.highlightcards.co.uk/assets/images/rate/rate-default.svg"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between pb-4">
                    <div class="flex items-center just before:content-[''] pt-4 pl-4  before:block before:w-[.5rem] before:h-[.5rem] before:rounded-full before:bg-[#1e51ce] before:mr-[.8rem]">
                      <div class="text-[0.8rem] leading-[1.66667]  text-[#656565] tracking-[-.024rem]">
                        Repeat customers
                      </div>
                    </div>
                    <div className="pr-16 text-[#ca914b]">0</div>
                  </div>
                </div>
                <hr class="mr-6  bg-gray-200 border-0 custom-box"></hr>

                <div className="pl-2 ">
                  <div className=" flex items-center justify-between pl-3 pr-12 text-[#333]">
                    <div>
                      <p className="font-medium text-[2.5rem]">0</p>
                    </div>
                    <div className="bg-[#fef1e1] flex justify-center items-center rounded-full w-10 h-10 ">
                      <img
                        className=""
                        src="https://app.highlightcards.co.uk/assets/images/rate/rate-default.svg"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between pb-4">
                    <div class="flex items-center just before:content-[''] pt-4 pl-4  before:block before:w-[.5rem] before:h-[.5rem] before:rounded-full before:bg-[#1e51ce] before:mr-[.8rem]">
                      <div class="text-[0.8rem] leading-[1.66667]  text-[#656565] tracking-[-.024rem]">
                        Repeat customers
                      </div>
                    </div>
                    <div className="pr-16 text-[#ca914b]">0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ml-12 p-4 bg-[#F7F7F8] ">
          <div className="p-4 ">
            <div className="flex justify-between mb-2">
              <div className="flex items-center">
                <h2 className="text-2xl font-semibold">Loyalty ROI</h2>
                <div className="ml-3">
                  <RoiIcon />
                </div>
                <div className="flex space-x-4  ">
                  <p className="bg-[#ffffff] hover:bg-[#e9e9ec]  mx-2 cursor-pointer flex justify-center items-center  text-[0.75rem] text-[#656565] pr-3 pl-3">
                    Currency
                  </p>
                  <p className="bg-[#ffffff] hover:bg-[#e9e9ec]  mx-2 cursor-pointer flex justify-center items-center  text-[0.75rem] text-[#656565] pr-3 pl-3">
                    Percentage
                  </p>
                </div>
              </div>
              <div className="flex space-x-4 ">
                <p className="bg-[#ffffff]  hover:bg-[#e9e9ec]   cursor-pointer flex justify-center items-center  text-[0.75rem] text-[#656565] pr-3 pl-3">
                  Day
                </p>
                <p className="bg-[#ffffff] hover:bg-[#e9e9ec]  cursor-pointer  flex justify-center items-center  text-[0.75rem] text-[#656565] pr-3 pl-3">
                  Week
                </p>
                <p className="bg-[#ffffff] hover:bg-[#e9e9ec] cursor-pointer   flex justify-center items-center  text-[0.75rem] text-[#656565] pr-3 pl-3">
                  Month
                </p>
                <p className="bg-[#ffffff] hover:bg-[#e9e9ec] cursor-pointer  flex justify-center items-center  text-[0.75rem] text-[#656565] pr-3 pl-3">
                  Year
                </p>
                <p className="bg-[#ffffff] hover:bg-[#e9e9ec] cursor-pointer  flex justify-center items-center  text-[0.75rem] text-[#656565] pr-3 pl-3">
                  All time
                </p>
                <p className="bg-[#ffffff] hover:bg-[#e9e9ec] cursor-pointer  hover flex justify-center items-center  text-[0.75rem] text-[#656565] pr-3 pl-3">
                  Period
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
