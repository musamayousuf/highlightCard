import React, { useState } from "react";
import Inputfield from "../../../components/inputField/inputfield";
import PrimaryButton from "../../../components/button/primary-button";
import StampIcon from "../../../icon/stampIcon";
import SecondaryButton from "../../../components/button/secondary-button";
import RewardIcon from "../../../icon/rewardIcon";
import MembershipIcon from "../../../icon/membershipIcon";
import DiscountIcon from "../../../icon/discountIcon";
import CashBackIcon from "../../../icon/cashbackIcon";
import CouponIcon from "../../../icon/couponIcon";
import MultipassIcon from "../../../icon/multipassIcon";
import GiftIcon from "../../../icon/giftIcon";

function CardType() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      label: "Stamp",
      description: "High Retention",
      bgColor: "",
      textColor: "",
      icon: <StampIcon width={29} />,
    },
    {
      label: "Reward",
      description: "High Retention",
      bgColor: "",
      textColor: "",
      icon: <RewardIcon width={29} />,
    },
    {
      label: "Membership",
      description: "High Retention",
      bgColor: "",
      textColor: "",
      icon: <MembershipIcon width={29} />,
    },
    {
      label: "Membership",
      description: "High Retension",
      bgColor: "",
      textColor: "",
      icon: <DiscountIcon width={29} />,
    },
    {
      label: "Stamp",
      description: "High Retension",
      bgColor: "",
      textColor: "",
      icon: <CashBackIcon width={29} />,
    },
    {
      label: "Stamp",
      description: "High Retension",
      bgColor: "",
      textColor: "",
      icon: <CouponIcon width={29} />,
    },
    {
      label: "Stamp",
      description: "Best for acquisition",
      bgColor: "",
      textColor: "",
      icon: <MultipassIcon width={29} />,
    },
    {
      label: "Stamp",
      description: "Best for acquisition",
      bgColor: "",
      textColor: "",
      icon: <GiftIcon width={29} />,
    },
  ];

  return (
    <div>
      <div className="relative min-h-screen">
        <div className="grid grid-cols-2 ml-2">
          <div className="relative bg-[#f7f7f8] p-7">
            <div className="flex items-center">
              <p className="text-2xl font-semibold text-gray-500">Card Type</p>
            </div>
            <hr className="mt-6 mb-10" />
            <div className="grid grid-cols-3 gap-4">
              {items.map((item, index) => {
                const isSelected = selectedItem === index;
                return (
                  <div
                    key={index}
                    onClick={() => setSelectedItem(index)}
                    className={`border border-gray-200 shadow-sm p-6 flex flex-col items-center justify-center cursor-pointer ${
                      isSelected ? "bg-black text-white" : item.bgColor
                    }`}
                  >
                    {/* Only render the icon if it exists */}
                    {item.icon && (
                      <div className={`mb-2 ${isSelected ? "text-white" : ""}`}>
                        {React.cloneElement(item.icon, {
                          className: isSelected ? "text-white" : "",
                        })}
                      </div>
                    )}

                    <p
                      className={`text-center ${
                        isSelected ? "text-white" : item.textColor
                      }`}
                    >
                      {item.label}
                    </p>
                    {item.description && (
                      <p
                        className={`text-center my-3 text-green-500 border-green-500 border text-xs rounded-2xl p-2 ${
                          isSelected
                            ? "bg-green-500 text-white"
                            : item.textColor
                        }`}
                      >
                        {item.description}
                      </p>
                    )}
                  </div>
                );
              })}
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
                  <SecondaryButton title={"Activate"} />
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

export default CardType;
