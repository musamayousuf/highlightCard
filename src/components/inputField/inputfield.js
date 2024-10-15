import React from "react";

function Inputfield({ title, label, type, placeholder, className }) {
  return (
    <div>
      <label
        htmlFor="first_name" // Changed `for` to `htmlFor` (React specific)
        className={`block mb-2 text-md font-medium text-gray-900 dark:text-white ${className}`} // Use template literals for dynamic className
      >
        {label}
      </label>
      <input
        type={type}
        id="first_name"
        className={`bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`} // Apply dynamic className here as well
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default Inputfield;
