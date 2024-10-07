import React from "react";
import PrimaryButton from "../../components/button/primary-button";

function Cards() {
  return (
    <div className="flex items-center ml-5 mt-3">
      <div className="flex flex-col items-center">
        <div className="text-[#87879c]   mb-6 bg-[#eaeaed] px-3  inline-flex justify-center items-center rounded-xl ">
          <span className="h-2 w-2 mr-2 bg-[#1dcd27] rounded-lg text-center inline-block"></span>
          Active
        </div>
        <div>
          <img
            alt="add"
            width={280}
            height={280}
            className="cursor-pointer"
            src="https://app.highlightcards.co.uk/assets/frame-empty-D0erFwVy.svg"
          />
        </div>
        <div>
          <p>Create Card</p>
          <PrimaryButton title={"Template"} />
        </div>
      </div>

      <div className="ml-5 flex flex-col items-center">
        <div className="text-[#87879c] mb-[1.2rem] bg-[#eaeaed] px-3  inline-flex justify-center items-center rounded-xl ">
          <span className="h-2 w-2 mr-2  bg-[#ff0030] rounded-lg text-center inline-block"></span>
          Stamp
        </div>
        <img
          alt="card"
          width={280}
          height={240}
          src="https://app.highlightcards.co.uk/assets/frame-ios2-BzgspNfB.svg"
        />
      </div>
    </div>
  );
}

export default Cards;
