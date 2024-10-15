import React from "react";
import PrimaryButton from "../../../components/button/primary-button";
import DisableButton from "../../../components/button/disableButton";

function Integration() {
  return (
    <div>
      <p className=" text-2xl"> Integrations</p>
      <div className="grid grid-cols-2 mt-5 space-x-5 ">
        <div className="">
          <div className="flex p-6 border border-gray-300 rounded-sm bg-white">
            <p className="w-2/3 font-semibold">Plan</p>
            <p className="w-1/3 font-semibold">Available</p>
          </div>
          <div className="flex  p-6 border-b-2 border-l-2 border-r-2  rounded-sm bg-white">
            <p className="w-2/3 text-4xl">
              Start
              <span className="text-sm block text-gray-500 mt-5">
                Annual payment
              </span>
            </p>
            <p className="w-1/3 text-4xl">
              0
              <span className="text-sm block text-gray-500 mt-5">
                integrations
              </span>
            </p>
          </div>
        </div>
        <div className="bg-white">
          <div className="flex p-6 border border-gray-300 rounded-sm">
            <p className=" font-semibold">API</p>
          </div>
          <div className="p-6 border-b-2 border-l-2 border-r-2  rounded-sm">
            <div className="flex items-center ">
              <p className="w-2/3 text-4xl">
                -
                <span className="text-sm block text-gray-500 mt-5">
                  Api key
                </span>
              </p>
              <div>
                <DisableButton
                  title={"Copy"}
                  width="w-40"
                  className="py-2  bg-gray-300 text-gray-500 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Integration;
