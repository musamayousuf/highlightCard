import React from "react";
import PrimaryButton from "../../../components/button/primary-button";
import DisableButton from "../../../components/button/disableButton";

function Design() {
  return (
    <div>
      <div className="relative min-h-screen">
        <div className="grid grid-cols-2 ml-2">
          <div className="relative bg-[#f7f7f8] p-7">
            <div className="flex items-center">
              <p className="text-2xl font-semibold text-gray-500">Card Type</p>
            </div>
            <hr className="mt-6 mb-10" />
            <div>
              <div className="grid grid-cols-3 gap-4 text-lg font-medium text-gray-500">
                Logo
              </div>
              <div className="inline-flex"></div>
            </div>

            <div className="mt-8">
              <PrimaryButton title="Continue" width="w-full" />
            </div>

            <div className="absolute top-0 right-0 h-full w-[1px] bg-gray-300"></div>
          </div>

          {/* Right Side - Mobile View */}
          <div className="flex justify-center items-center p-3 sticky top-10 z-10">
            <div className="pl-4">
              <div className="flex flex-col items-center w-[300px]">
                <div className="text-[#87879c] mb-6 bg-[#eaeaed] px-3 inline-flex justify-center items-center rounded-xl">
                  <span className="h-2 w-2 mr-2 bg-[#1dcd27] rounded-lg inline-block"></span>
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
                <div className="mt-5">
                  {/* <SecondaryButton title={"Activate"} /> */}
                </div>
                <div className="mb-4">
                  <p className="text-center text-sm text-gray-500 my-4">
                    You cannot issue more than 10 cards before the card template
                    is activated
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
