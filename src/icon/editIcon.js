import React from "react";

function EditIcon({ height = "", width = "", color = "currentColor" }) {
  return (
    <svg
      height={height}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <path d="m12.6 9.84853-5.4 5.39997v1.5515h1.55147l5.40003-5.4zm.8485-.84853 1.5515 1.5515 1.5515-1.5515-1.5515-1.55147zm-1.4485 15c-6.62742 0-12-5.3726-12-12 0-6.62742 5.37258-12 12-12 6.6274 0 12 5.37258 12 12 0 6.6274-5.3726 12-12 12zm0-1.2c5.9647 0 10.8-4.8353 10.8-10.8 0-5.96468-4.8353-10.8-10.8-10.8-5.96468 0-10.8 4.83532-10.8 10.8 0 5.9647 4.83532 10.8 10.8 10.8zm3.4243-16.62426 2.4 2.4c.2343.23431.2343.61421 0 .84852l-8.40004 8.40004c-.11252.1125-.26513.1757-.42426.1757h-2.4c-.33137 0-.6-.2686-.6-.6v-2.4c0-.1591.06321-.3117.17574-.4243l8.39996-8.39996c.2344-.23432.6143-.23432.8486 0z"></path>
    </svg>
  );
}

export default EditIcon;
