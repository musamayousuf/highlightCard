import React, { useState } from "react";

function DownArrowIcon() {
  return (
    <>
      <svg
        fill="currentColor" // Use 'currentColor' to inherit the text color
        height="9"
        viewBox="0 0 16 9"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
        className="group-hover:fill-white" // This ensures it turns white on hover
      >
        <path d="m15.8363.165392c-.2205-.2205227-.5789-.2205227-.7994 0l-7.02917 7.042948-7.042943-7.042948c-.220523-.2205227-.578872-.2205227-.799395 0-.2205227.220523-.2205227.578873 0 .799396l7.428858 7.428862c.11026.11026.24809.16539.3997.16539.13783 0 .28944-.05513.3997-.16539l7.42885-7.428862c.2343-.220523.2343-.578873.0138-.799396z" />
      </svg>
    </>
  );
}

export default DownArrowIcon;
