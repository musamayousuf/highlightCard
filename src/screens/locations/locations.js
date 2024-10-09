import React from "react";
import PrimaryButton from "../../components/button/primary-button";

function Locations() {
  return (
    <div className="p-5">
      <div className="grid grid-cols-2">
        <div className="relative bg-[#f7f7f8]">
          <div className="flex items-center">
            <p className="text-2xl font-semibold">Locations</p>
            <div className="text-white text-[0.7rem] ml-6 leading-[1.4rem] bg-blue-500 rounded-full py-[0.18rem] px-[1rem] inline-block relative font-tabular">
              <img
                src="https://app.highlightcards.co.uk/assets/images/chatballoon.svg"
                alt="Chat balloon"
                className="absolute bottom-0 left-[-0.3rem] w-6 h-6 mr-2"
              />
              Geo-push within 100 metres (330 feet)
            </div>
          </div>
          <p>
            On your plan available 1 locations. In 330 feet radius from location
            users can see your geo-push message on the lock screen.
          </p>
          <hr className="my-10" />
          <PrimaryButton width="full" title={"Add location"} />

          {/* Add vertical line */}
          <div className="absolute top-0 right-0 h-full w-[1px] bg-gray-300"></div>
        </div>

        <div className="pl-4">asdasd</div>
      </div>
    </div>
  );
}

export default Locations;
