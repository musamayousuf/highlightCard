import React from "react";

function HomeIcon({ isSelected }) {
  return (
    <div className="_panelItem_9fug5_1">
      <a className="_panelItem__container_9fug5_11" href="/">
        <span
          className={`inline-flex items-center justify-center p-3 rounded transition-colors ${
            isSelected
              ? "bg-[#454545] text-white"
              : "hover:bg-[#454545] hover:text-white"
          }`}
        >
          <svg
            height="18"
            viewBox="0 0 24 24"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
            className={`fill-current ${
              isSelected ? "text-white" : "text-gray-800"
            }`}
          >
            <path d="m22.6666 10.3146v10.3521c0 1.8409-1.4923 3.3333-3.3333 3.3333h-4c-.3682 0-.6666-.2985-.6666-.6667v-8c0-.3682-.2985-.6666-.6667-.6666h-4c-.36819 0-.66666.2984-.66666.6666v8c0 .3682-.29848.6667-.66667.6667h-3.99999c-1.84095 0-3.33333-1.4924-3.33333-3.3333v-10.3521l-.24286.2c-.284218.2341-.704364.1934-.938425-.0908-.2340604-.2842-.1934012-.70436.090815-.93842l11.33332-9.333333c.2462-.2027292.6014-.2027292.8476 0l11.3333 9.333333c.2842.23406.3249.65422.0908.93842-.234.2842-.6542.3249-.9384.0908zm-1.3243-1.09067-9.3423-7.69363-9.34225 7.69363c.00587.0356.00893.07214.00893.1094v11.33337c0 1.1045.89543 2 2 2h3.33333v-7.3334c0-1.1045.89543-2 1.99999-2h4c1.1046 0 2 .8955 2 2v7.3334h3.3333c1.1046 0 2-.8955 2-2v-11.33337c0-.03726.0031-.0738.009-.1094z"></path>
          </svg>
        </span>
      </a>
    </div>
  );
}

export default HomeIcon;
