import React from "react";
import PrimaryButton from "../../components/button/primary-button";

function Locations() {
  return (
    <div className="">
      <div className="grid grid-cols-2 ml-2 ">
        <div className="relative bg-[#f7f7f8] p-7">
          <div className="flex items-center ">
            <p className="text-2xl font-semibold text-gray-500">Locations</p>
            <div className="text-white text-[0.7rem] ml-6 leading-[1.4rem] bg-blue-500 rounded-full py-[0.18rem] px-[1rem] inline-block relative font-tabular">
              <img
                src="https://app.highlightcards.co.uk/assets/images/chatballoon.svg"
                alt="Chat balloon"
                className="absolute bottom-0 left-[-0.3rem] w-6 h-6 mr-2"
              />
              Geo-push within 100 metres (330 feet)
            </div>
          </div>
          <p className="text-sm text-gray-500 pt-3">
            On your plan{" "}
            <span className="font-semibold">available 1 locations</span>. In 330
            feet radius from location users can see your geo-push message on the
            lock screen.
          </p>
          <hr className="my-10" />
          <div className="">
            <PrimaryButton width="w-full" title={"Add location"} />
          </div>
          {/* Add vertical line */}
          <div className="absolute top-0 right-0 h-full w-[1px] bg-gray-300"></div>
        </div>

        <div className="flex justify-center items-center min-h-screen p-3">
          <div className="pl-4 pt-6">
            <div className="flex flex-col items-center w-[300px]">
              <div className="text-[#87879c] mb-6 bg-[#eaeaed]  px-3 inline-flex justify-center items-center rounded-xl">
                <span className="h-2 w-2 mr-2 bg-[#1dcd27] rounded-lg text-center inline-block"></span>
                Active
              </div>
              <div>
                <img
                  alt="add"
                  width="280"
                  height="260"
                  className="cursor-pointer object-cover"
                  src="https://app.highlightcards.co.uk/assets/frame-ios2-BzgspNfB.svg"
                />
              </div>
              <div className="mb-4">
                <p className=" text-center text-sm text-gray-500 my-4">
                  Geo-push available for iOS devices only
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Locations;
