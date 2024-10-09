import React from "react";
import PrimaryButton from "../../components/button/primary-button";
import Manager from "../manager/manager";

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
    <div className="p-8">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-2xl">Plan</p>
        </div>
        <div className="flex space-x-3 ">
          <p className="bg-gray-200 px-3  py-2 text-sm rounded-md">Plan</p>
          <p className="bg-gray-200 p-3 py-2 text-sm rounded-md">
            Payments history
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-5 space-x-5">
        <div>
          <div className="flex p-10 border border-gray-300 rounded-sm">
            <p className="w-2/3 font-semibold">Plan</p>
            <p className="w-1/3 font-semibold">Price</p>
          </div>
          <div className="flex  p-10 border-b-2 border-l-2 border-r-2  rounded-sm">
            <p className="w-2/3 text-4xl">
              Start (Trial)
              <span className="text-sm block text-gray-500 mt-5">
                Annual payment
              </span>
            </p>
            <p className="w-1/3 text-4xl">
              $25
              <span className="text-sm block text-gray-500 mt-5">
                Per month
              </span>
            </p>
          </div>
        </div>
        <div>
          <div className="flex p-10 border border-gray-300 rounded-sm">
            <p className=" font-semibold">Plan payment date</p>
          </div>
          <div className="p-10 border-b-2 border-l-2 border-r-2  rounded-sm">
            <div className="flex ">
              <p className="w-2/3 text-4xl">
                16-10-20... <span>17:43</span>
                <span className="text-sm block text-gray-500 mt-5">
                  Next payment date
                </span>
              </p>
              <p className="w-1/3 text-4xl">
                7
                <span className="text-sm block text-gray-500 mt-5">
                  Days Left
                </span>
              </p>
            </div>
            <div className="mt-6">
              <PrimaryButton width="w-36" title={"Extend"} />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {plan.map((plan, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg p-6 border ${
                index !== 0 ? "md:border-l md:border-gray-200" : ""
              }`}
            >
              <div className="text-left pl-4">
                <img src={plan.image} alt="Start Plan" className="mb-4 w-20" />
                <h2 className="text-3xl ">{plan.name}</h2>
                <p className="text-gray-400 pt-4 text-sm mb-4 min-h-[5rem]">
                  {plan.content}
                </p>
                <p className="text-3xl font-normal  pb-6">
                  <spam className="text-gray-400 text-base"> from </spam>{" "}
                  {plan.price}
                  <span className="text-base font-normal text-gray-400">
                    /month
                  </span>
                </p>
                <PrimaryButton title={"Subscribe"} width="w-full" />
              </div>
              <ul className="mt-6 space-y-2 ml-4 text-gray-500 ">
                <li>{plan.promotion} promotion</li>
                <li>{plan.location} location</li>
                <li>{plan.Manager} managers</li>
                <li>∞ digital cards</li>
                <li>∞ push-notifications</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Settings;
