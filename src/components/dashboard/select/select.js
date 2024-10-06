import { ErrorMessage, useFormikContext } from "formik";
import React from "react";
import DropdownIcon from "../../../icon/dropdownIcon";

export default function Select({
  name,
  placeholder,
  label,
  options = [],
  onSelect,
  value,
  required,
}) {
  const formik = useFormikContext();
  return (
    <>
      {label ? (
        <label
          for="country"
          class="block mb-2 text-sm font-medium text-gray-900 "
        >
          {label || ""}
          {required ? " *" : ""}
        </label>
      ) : (
        ""
      )}
      <div className="relative w-full">
        <div class="absolute right-2 top-4">
          <DropdownIcon />
        </div>
        <select
          value={value}
          onChange={onSelect}
          placeholder={placeholder || ""}
          {...formik?.getFieldProps(name)}
          className="w-full p-2.5 text-sm text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
        >
          <option disabled selected value={""}>
            {" "}
            {placeholder || "Select option"}
          </option>
          {options?.map((option) => (
            <option disabled={option.disabled} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {name && (
          <ErrorMessage
            name={name || ""}
            component={"div"}
            className="text-xs text-red-500 font-light mt-1"
          />
        )}
      </div>
    </>
  );
}
