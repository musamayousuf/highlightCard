import React from "react";

const HighlightCardLink = () => {
  return (
    <div className="h-full flex items-center justify-center transition-colors duration-300 cursor-pointers">
      <a
        // href="#"
        // target="_blank"
        rel="noreferrer"
        className="_control__icon_g5txz_5"
      >
        <svg
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path d="m13.2 16.8h1.8c.3314 0 .6.2686.6.6s-.2686.6-.6.6h-4.8c-.33137 0-.6-.2686-.6-.6s.26863-.6.6-.6h1.8v-6h-1.8c-.33137 0-.6-.2686-.6-.6 0-.33137.26863-.6.6-.6h2.4c.3314 0 .6.26863.6.6zm-1.2 7.2c-6.62742 0-12-5.3726-12-12 0-6.62742 5.37258-12 12-12 6.6274 0 12 5.37258 12 12 0 6.6274-5.3726 12-12 12zm0-1.2c5.9647 0 10.8-4.8353 10.8-10.8 0-5.96468-4.8353-10.8-10.8-10.8-5.96468 0-10.8 4.83532-10.8 10.8 0 5.9647 4.83532 10.8 10.8 10.8zm-.6-16.8h1.2c.3314 0 .6.26863.6.6v1.2c0 .33137-.2686.6-.6.6h-1.2c-.3314 0-.6-.26863-.6-.6v-1.2c0-.33137.2686-.6.6-.6z" />
        </svg>
      </a>
    </div>
  );
};

export default HighlightCardLink;
