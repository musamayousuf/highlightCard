import React, { useState } from "react";

function FolderIcon() {
  return (
    <>
      <svg
        className="group-hover:fill-white"
        width="14"
        height="14"
        viewBox="0 0 14 14"
      >
        <path d="M1.8 1.8c-.6 0-1 .5-1 1.1v8.2c0 .6.5 1.1 1 1.1h10.5c.6 0 1.1-.5 1.1-1.1v-6c0-.6-.5-1.1-1.1-1.1H8.4C7.6 4 7 3.3 7 2.5c0-.4-.3-.8-.7-.8H1.8zm0-.8h4.6c.8 0 1.4.7 1.4 1.5 0 .4.3.8.7.8h3.9c1 0 1.8.8 1.8 1.9v6c0 1-.8 1.9-1.8 1.9H1.8c-1 0-1.8-.8-1.8-1.9V2.9C0 1.8.8 1 1.8 1z"></path>
      </svg>
    </>
  );
}

export default FolderIcon;
