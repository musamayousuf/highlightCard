import React from "react";

function Inputfield({ title, label, type, placeholder }) {
  return (
    <div>
      <label
        for="first_name"
        class="block mb-2 text-md font-medium text-gray-900 dark:text-white "
      >
        {label}
      </label>
      <input
        type={type}
        id="first_name"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default Inputfield;
