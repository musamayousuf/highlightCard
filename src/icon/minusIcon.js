import React from "react";

function MinusIcon({
  height = "16px",
  width = "16px",
  color = "currentColor",
}) {
  return (
    <svg
      viewBox="0 0 14 2"
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      fill={color}
    >
      <path
        d="m1 1h12"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
}

export default MinusIcon;
