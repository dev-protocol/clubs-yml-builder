import React from "react";
import { Config } from "../types";

interface InputProps {
  label: string;
  value: string;
  id: string;
  isNumeric?: boolean;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  id,
  onChange,
  isNumeric = false,
  placeholder = "",
}) => {
  return (
    <div className="mb-4">
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        value={value}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
