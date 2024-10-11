import React from "react";
import PrimaryButton from "../../components/button/primary-button";
import Manager from "../manager/manager";
import PlusIcon from "../../icon/plusIcon";
import MinusIcon from "../../icon/minusIcon";
import Dropdown from "../../components/dropdown/dropdown";
import SettingsPlan from "./inside/plan";

const ActiveCircle = () => {
  return (
    <div className="p-4 flex justify-center items-center ">
      <div className="bg-[#1dcd27] flex justify-center items-center rounded-full w-10 h-10">
        <PlusIcon width="13px" color="white" />
      </div>
    </div>
  );
};
const DeactiveCircle = () => {
  return (
    <div className="p-4 flex justify-center items-center ">
      <div className="bg-[#ff0030] flex justify-center items-center rounded-full w-10 h-10">
        <MinusIcon width="13px" color="white" />
      </div>
    </div>
  );
};

const plan = [
  {
    name: "Start",
    image: "https://app.highlightcards.co.uk/assets/images/tariffs/plan_1.png",
    content: "For small businesses that plan to become big :)",
    price: "$19",
    location: "1",
    promotion: "3",
    Manager: "10",
  },
  {
    name: "Grow",
    image: "https://app.highlightcards.co.uk/assets/images/tariffs/plan_2.png",
    content: "Suitable for a growing business with several points of sale",
    price: "$36",
    location: "1",
    promotion: "2",
    Manager: "12",
  },
  {
    name: "Business",
    image: "https://app.highlightcards.co.uk/assets/images/tariffs/plan_3.png",
    content: "For advanced businesses that intend to become market leaders",
    price: "$76",
    location: "2",
    promotion: "3",
    Manager: "No",
  },
];

function Settings() {
  return (
    <div className="p-8 bg-[#F7F7F8]">
      <SettingsPlan />
    </div>
  );
}

export default Settings;
