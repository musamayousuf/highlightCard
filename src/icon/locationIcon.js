import React, { useState } from "react";

function LocationIcon({ isSelected }) {
  return (
    <div className="panel-item">
      <span
        className={`inline-flex items-center justify-center p-3 rounded transition-colors ${
          isSelected
            ? "bg-[#454545] text-white"
            : "hover:bg-[#454545] hover:text-white"
        }`}
      >
        <svg
          height="18"
          viewBox="0 0 18 24"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
          className={`fill-current transition-colors ${
            isSelected ? "text-white" : "text-gray-800 hover:text-white"
          }`}
        >
          <path d="m9 14.6667c-2.84032 0-5.14286-2.3878-5.14286-5.33337 0-2.94552 2.30254-5.33333 5.14286-5.33333 2.8403 0 5.1429 2.38781 5.1429 5.33333 0 2.94557-2.3026 5.33337-5.1429 5.33337zm0-1.3334c2.1302 0 3.8571-1.7908 3.8571-3.99997 0-2.20914-1.7269-4-3.8571-4-2.13024 0-3.85714 1.79086-3.85714 4 0 2.20917 1.7269 3.99997 3.85714 3.99997zm.43604 10.4899c-.24626.2357-.62582.2357-.87208 0-5.69061-5.4474-8.56396-10.2609-8.56396-14.48987 0-5.15465 4.02944-9.33333 9-9.33333 4.9706 0 9 4.17868 9 9.33333 0 4.22897-2.8734 9.04247-8.56396 14.48987zm7.27826-14.48987c0-4.41827-3.4538-8-7.7143-8-4.26048 0-7.71429 3.58173-7.71429 8 0 3.66907 2.55421 8.04717 7.71429 13.08847 5.1601-5.0413 7.7143-9.4194 7.7143-13.08847z"></path>
        </svg>
      </span>
    </div>
  );
}

export default LocationIcon;
