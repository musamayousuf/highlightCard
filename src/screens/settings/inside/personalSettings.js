import React from "react";
import PlusIcon from "../../../icon/plusIcon";
import Inputfield from "../../../components/inputField/inputfield";
import PrimaryButton from "../../../components/button/primary-button";
import Dropdown from "../../../components/dropdown/dropdown";
import FormDropdown from "../../../components/dropdown/formDropdown";

function PersonalSettings() {
  return (
    <div>
      <div className="text-2xl">Personal Settings</div>
      <div className="grid grid-cols-[30%,70%]">
        <div className=" h-[27rem] mt-5 rounded-sm shadow-md w-[22rem] pt-8 pl-6 pr-6  border border-gray-300 bg-white">
          <div className="">
            <div className="flex justify-center h-full cursor-pointer">
              <div className="border border-[#D5D5DD] bg-[#eaeaed] flex justify-center items-center rounded-full h-72 w-72">
                <PlusIcon color="" />
              </div>
            </div>
            <div className="text-center pt-6">
              <p className="text-2xl text-gray-500"> Usama Yousuf</p>
              <p className="text-xs text-gray-500">usama_dogar3@hotmail.com</p>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <div className="h-full mt-5 rounded-sm shadow-md pt-8 pl-6 pr-6 border border-gray-300 bg-white">
            <div className="grid grid-cols-2 gap-5">
              <Inputfield
                placeholder={"First name"}
                title={"First name"}
                label={"First Name"}
                type={"text"}
              />
              <Inputfield
                placeholder={"Last name"}
                title={"Last name"}
                label={"Last Name"}
                type={"text"}
              />
              <Inputfield
                placeholder={"Email"}
                title={"Email"}
                label={"Email Address"}
                type={"email"}
              />
              <Inputfield
                placeholder={"Phone number"}
                title={"Phone number"}
                label={"Phone Number"}
                type={"text"}
              />
              <Inputfield
                placeholder={"Password"}
                title={"Password"}
                label={"password"}
                type={"password"}
              />
              <Inputfield
                placeholder={"Address"}
                title={"Address"}
                type={"text"}
                label={"Address"}
              />
              <Inputfield
                placeholder={"Address"}
                title={"Address"}
                label={"Address"}
              />
              <FormDropdown label={"Currency"} title={"Currency"} width="40" />
              <Inputfield placeholder={"City"} title={"City"} label={"City"} />
              <FormDropdown label={"Currency"} title={"Currency"} width="40" />
              <FormDropdown label={"Timezone"} title={"Timezone"} width="40" />
            </div>
            <div className="mt-7">
              <PrimaryButton width="w-32" title={"Save"} />
            </div>
          </div>
        </div>
        <div className=""></div>
        <div className="my-3 mb-10 pb-10 rounded-sm shadow-md pt-8 pl-6 pr-6 border border-gray-300 bg-white">
          <div className="font-semibold"> Delete User</div>
          <div className="text-gray-500 text-xs space-y-1 mt-1">
            <p> We’re sorry to see you leave.</p>
            <p>
              Before you delete your account, it would be much appreciated if
              you could provide us
            </p>
            <p>
              with any feedback and/or explain why this service hasn’t helped to
              increase customer loyalty for your business.
            </p>
          </div>
          <div className="flex items-center mt-3 ">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="custom-checkbox  w-7 h-7  bg-gray-400 border border-gray-300 text-green-600 bg-black-100 border-gray-200 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <p className="ml-4 text-gray-500">Struggling to use the service</p>
          </div>
          <div className="flex items-center mt-3 ">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="custom-checkbox  w-7 h-7  bg-gray-400 border border-gray-300 text-green-600 bg-black-100 border-gray-200 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <p className="ml-4 text-gray-500">
              Customers dont't need digital cards
            </p>
          </div>
          <div className="flex items-center mt-3 ">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="custom-checkbox  w-7 h-7  bg-gray-400 border border-gray-300 text-green-600 bg-black-100 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <p className="ml-4 text-gray-500">
              Service does not provide the features I need
            </p>
          </div>
          <div class="mt-6 mb-10 w-full  border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800 border border-gray-200">
              <label for="comment" class="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows="4"
                class="w-full px-0 text-sm text-gray-900 bg-white border-0  dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Write a comment..."
                required
              ></textarea>
            </div>
          </div>
          <div>
            <p className="font-semibold mb-3">Confirmation</p>
            <p className="text-xs text-gray-500 mb-3 ">
              Please fill your password to delete your account and data
            </p>
          </div>
          <div>
            <Inputfield
              placeholder={"Password"}
              title={"Password"}
              type={"password"}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1 mb-3">
            If you delete your account all of personal information and customers
            data will be lost
          </p>
          <div className="mt-7">
            <PrimaryButton width="w-32" title={"Delete"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalSettings;
