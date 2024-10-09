import React, { useState } from "react";

function HeartIcon() {
  return (
    <>
      <svg
        className="group-hover:fill-white"
        width="14"
        height="14"
        viewBox="0 0 14 14"
      >
        <path d="M13.2 5.5c0-2.4-1.3-3.8-3.5-3.8-1.1.1-1.9.5-2.4 1.3-.1.3-.5.3-.6 0-.5-.8-1.3-1.2-2.4-1.2C2.1 1.8.8 3.2.8 5.6c0 1.8 2.1 4 6.2 6.7 4.2-2.8 6.2-5 6.2-6.8zM9.7 1C12.3 1 14 2.7 14 5.5c0 2.2-2.3 4.6-6.8 7.4-.1.1-.3.1-.4 0C2.3 10.1 0 7.7 0 5.5 0 2.7 1.7 1 4.3 1c1.2 0 2.1.4 2.7 1.2C7.6 1.4 8.5 1 9.7 1z"></path>
      </svg>
    </>
  );
}

export default HeartIcon;
