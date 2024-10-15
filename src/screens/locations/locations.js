import React, { useState } from "react";
import PrimaryButton from "../../components/button/primary-button";
import Inputfield from "../../components/inputField/inputfield";
import map from "../../assets/map.PNG";

function Locations() {
  const [showlocation, setShowlocation] = useState(false);

  const Open = () => {
    setShowlocation((prev) => !prev);
  };

  return (
    <div className="relative min-h-screen">
      {" "}
      {/* Container for the entire view */}
      <div className="grid grid-cols-2 ml-2">
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
            <span className="font-semibold">available 1 location</span>. In 330
            feet radius from location users can see your geo-push message on the
            lock screen.
          </p>
          <hr className="my-10" />
          <div className="mb-10" onClick={Open}>
            <PrimaryButton
              width="w-full"
              title={showlocation ? "Hide Location Adding" : " Add location"}
            />
          </div>
          {showlocation ? (
            <div className="border border-gray-300">
              <div className="flex justify-between p-3 ">
                <div>
                  <p className="font-semibold">Add location</p>
                </div>
                <div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
              <div className="px-3">
                <Inputfield placeholder={"Location name"} />
                <Inputfield placeholder={"Location Address"} />
              </div>
              <div className="p-3">
                <img src={map} alt="Map" />
              </div>
              <div>
                <p className="text-sm ml-4 my-3 font-light text-gray-500">
                  Apply to cards:
                </p>

                <div className="px-4">
                  <div className="px-3 py-2 bg-white rounded-t-lg dark:bg-gray-800 border border-gray-200">
                    <label htmlFor="comment" className="sr-only">
                      Your comment
                    </label>
                    <textarea
                      id="comment"
                      rows="4"
                      className="w-full px-0 text-sm text-gray-900 bg-white border-0  dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                      placeholder="Nothing selected"
                      required
                    ></textarea>
                  </div>
                </div>
                <p className="text-sm ml-4 my-3 font-light text-gray-500">
                  Apply to cards:
                </p>

                <div className="px-4">
                  <div className="px-3 py-2 bg-white rounded-t-lg dark:bg-gray-800 border border-gray-200">
                    <label htmlFor="comment" className="sr-only">
                      Your comment
                    </label>
                    <textarea
                      id="comment"
                      rows="4"
                      className="w-full px-0 text-sm text-gray-900 bg-white border-0  dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                      placeholder="Push message"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="ml-4 mt-4">
                  <PrimaryButton title={"Add"} width="w-32" />
                </div>
              </div>
            </div>
          ) : null}
          {/* Add vertical line */}
          <div className="absolute top-0 right-0 h-full w-[1px] bg-gray-300"></div>
        </div>

        {/* MOBILE VIEW */}
        <div className="flex justify-center items-center p-3 sticky top-10 z-10">
          {" "}
          {/* Added z-10 for layering */}
          <div className="pl-4 ">
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
