import React from "react";

function Agency() {
  return (
    <div className="pb-10">
      <div className="pb-4">
        <p className="text-2xl">About the agency</p>
      </div>
      <div
        className="p-6 py-4 border border-gray-300 shadow-md
        "
      >
        <div className="grid grid-cols-2 gap-10">
          <div>
            <p className="font-semibold ">Company name</p>
            <p className="text-sm text-gray-500 mt-3">Highlightcards</p>
          </div>
          <div>
            <p className="font-semibold ">Address</p>
            <p className="text-sm text-gray-500 mt-3">86-90, Paul Street</p>
          </div>
          <div>
            <p className="font-semibold ">Phone</p>
            <p className="text-sm text-gray-500 mt-3">+447438978131</p>
          </div>
          <div>
            <p className="font-semibold ">Postal code</p>
            <p className="text-sm text-gray-500 mt-3">EC2A 4NE</p>
          </div>
          <div>
            <p className="font-semibold ">Email</p>
            <p className="text-sm text-gray-500 mt-3">
              hello@highlightcards.com
            </p>
          </div>
          <div>
            <p className="font-semibold ">City</p>
            <p className="text-sm text-gray-500 mt-3">86-90, Paul Street</p>
          </div>
          <div>
            <p className="font-semibold ">Telegram</p>
            <p className="text-sm text-gray-500 mt-3">-</p>
          </div>
          <div>
            <p className="font-semibold ">Facebook</p>
            <p className="text-sm text-gray-500 mt-3">-</p>
          </div>

          <div>
            <p className="font-semibold ">Instagram</p>
            <p className="text-sm text-gray-500 mt-3">-</p>
          </div>
          <div>
            <p className="font-semibold ">Country</p>
            <p className="text-sm text-gray-500 mt-3">United Kingdom</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agency;
