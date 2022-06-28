import React from "react";
import { Config } from "../types";
import { isNumberInput } from "../utils";
import ConfigInputLabel from "./ConfigInputLabel";

interface ConfigInputProps {
  label: string;
  value: string;
  id: string;
  isNumeric?: boolean;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const ConfigInput: React.FC<ConfigInputProps> = ({
  label,
  value,
  id,
  onChange,
  isNumeric = false,
  placeholder = "",
}) => {
  return (
    <div className="mb-4">
      <ConfigInputLabel text={label} htmlFor={id} />
      <input
        id={id}
        value={value}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        onChange={(e) => {
          if (!isNumeric || (isNumeric && isNumberInput(e.target.value))) {
            console.log("change is: ", e.target.value);
            onChange(e);
          }
        }}
      />
    </div>
  );
};

export default ConfigInput;
