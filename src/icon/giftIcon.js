import React from "react";

function GiftIcon({ height = "", width = "", color = "currentColor" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32ZM19.2016 9.6H20.0016C21.327 9.6 22.4016 10.6745 22.4016 12C22.4016 12.4418 22.0434 12.8 21.6016 12.8C21.1597 12.8 20.8016 12.4418 20.8016 12C20.8016 11.5582 20.4434 11.2 20.0016 11.2H12.0016C11.5597 11.2 11.2016 11.5582 11.2016 12V13.8123C11.2016 14.2105 11.4943 14.548 11.8884 14.6043L20.341 15.8118C21.5233 15.9807 22.4016 16.9933 22.4016 18.1877V20C22.4016 21.3255 21.327 22.4 20.0016 22.4H19.2016V24.8C19.2016 25.2418 18.8434 25.6 18.4016 25.6C17.9597 25.6 17.6016 25.2418 17.6016 24.8V22.4H14.4016V24.8C14.4016 25.2418 14.0434 25.6 13.6016 25.6C13.1597 25.6 12.8016 25.2418 12.8016 24.8V22.4H12.0016C10.6761 22.4 9.60156 21.3255 9.60156 20C9.60156 19.5582 9.95973 19.2 10.4016 19.2C10.8434 19.2 11.2016 19.5582 11.2016 20C11.2016 20.4418 11.5597 20.8 12.0016 20.8H20.0016C20.4434 20.8 20.8016 20.4418 20.8016 20V18.1877C20.8016 17.7896 20.5088 17.452 20.1147 17.3957L11.6622 16.1882C10.4798 16.0193 9.60156 15.0067 9.60156 13.8123V12C9.60156 10.6745 10.6761 9.6 12.0016 9.6H12.8016V7.2C12.8016 6.75817 13.1597 6.4 13.6016 6.4C14.0434 6.4 14.4016 6.75817 14.4016 7.2V9.6H17.6016V7.2C17.6016 6.75817 17.9597 6.4 18.4016 6.4C18.8434 6.4 19.2016 6.75817 19.2016 7.2V9.6ZM30.4016 16C30.4016 23.9529 23.9545 30.4 16.0016 30.4C8.04866 30.4 1.60156 23.9529 1.60156 16C1.60156 8.0471 8.04866 1.6 16.0016 1.6C23.9545 1.6 30.4016 8.0471 30.4016 16Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export default GiftIcon;