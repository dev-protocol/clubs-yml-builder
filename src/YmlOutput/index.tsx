import React, { useEffect, useState } from "react";
import { Config } from "../types";
import { stringify } from "yaml";
import { FaRegCopy } from "react-icons/fa";

interface YmlOutputProps {
  config: Config;
}

const YmlOutput: React.FC<YmlOutputProps> = ({ config }) => {
  const [yml, setYml] = useState<string>("");
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    setYml(stringify(config));
  }, [config]);

  const copy = () => {
    navigator.clipboard.writeText(yml);
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
      <pre className="text-sm">{yml}</pre>
    </div>
  );
};

export default YmlOutput;
