import React, { useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { useConfigContext } from "../config/hook";

interface YmlOutputProps {}

const YmlOutput: React.FC<YmlOutputProps> = () => {
  const { output } = useConfigContext();
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    console.log("YmlOutput recognizes change: ");
  }, [output]);

  const copy = () => {
    navigator.clipboard.writeText(output);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 1000);
  };

  return (
    <div className="relative rounded-xl bg-gradient-to-r border border-gray-200 dark:border-gray-700 p-2 sm:p-6 dark:bg-gray-800 text-black dark:text-white">
      <div className="absolute top-4 right-4 ">
        {!copySuccess && (
          <button onClick={() => copy()} className="active:text-violet-700">
            <FaRegCopy />
          </button>
        )}
        {copySuccess && (
          <span className="text-sm text-gray-600">YML Copied</span>
        )}
      </div>
      <pre className="text-sm">{output}</pre>
    </div>
  );
};

export default YmlOutput;
