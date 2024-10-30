import React from "react";
import PrimaryButton from "../../components/button/primary-button";
import SecondaryButton from "../../components/button/secondary-button";
import ActivateIcon from "../../icon/activateIcon";
import DownloadIcon from "../../icon/downloadIcon";
import CopyIcon from "../../icon/copyIcon";
import DeleteIcon from "../../icon/deleteIcon";
import { useNavigate } from "react-router-dom";
import mobileATV from "../../assets/aaaa.PNG";

function Cards() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center ml-5  my-16">
      <div className="flex flex-col items-center w-[300px]">
        <div className="text-[#87879c] mb-6 bg-[#eaeaed] px-3 inline-flex justify-center items-center rounded-xl">
          <span className="h-2 w-2 mr-2 bg-[#1dcd27] rounded-lg text-center inline-block"></span>
          Active
        </div>
        <div>
          <img
            alt="add"
            width="280"
            height="260"
            className="cursor-pointer object-cover"
            onClick={() => navigate("./templates")}
            src="https://app.highlightcards.co.uk/assets/frame-empty-D0erFwVy.svg"
          />
        </div>
        <div className="mb-4" onClick={() => navigate("./templates")}>
          <p className="font  -bold text-center my-4">Create Card</p>
          <PrimaryButton title={"Template"} />
        </div>
        <SecondaryButton title={"From Scratch"} />
      </div>
      <div className="ml-5 flex flex-col items-center w-[300px]">
        <div className="text-[#87879c] mb-[1.2rem] bg-[#eaeaed] px-3 inline-flex justify-center items-center rounded-xl">
          <span className="h-2 w-2 mr-2 bg-[#ff0030] rounded-lg text-center inline-block"></span>
          Stamp
        </div>
        <img alt="card" width="280" className="" src={mobileATV} />
        <div className="mb-4">
          <p className="font-bold text-center my-4">ATV rental</p>
          <div onClick={() => navigate("./create")}>
            <PrimaryButton title={"Open"} />
          </div>
        </div>
        <div className="flex">
          <p className="before-question-mark pr-20"></p>
          <div className="flex items-center space-x-8">
            <ActivateIcon />
            <DownloadIcon />
            <CopyIcon />
            <DeleteIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
