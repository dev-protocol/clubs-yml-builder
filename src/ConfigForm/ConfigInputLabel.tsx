import React from "react";

interface ConfigInputLabelProps {
  text: string;
  htmlFor: string;
}

const ConfigInputLabel: React.FC<ConfigInputLabelProps> = ({
  text,
  htmlFor,
}) => {
  return (
    <label
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      htmlFor={htmlFor}
    >
      {text}
    </label>
  );
};

export default ConfigInputLabel;
