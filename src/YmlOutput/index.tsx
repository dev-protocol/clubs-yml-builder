import React, { useEffect, useState } from "react";
import { Config } from "../types";
import { stringify } from "yaml";

interface YmlOutputProps {
  config: Config;
}

const YmlOutput: React.FC<YmlOutputProps> = ({ config }) => {
  const [yml, setYml] = useState<string>("");

  useEffect(() => {
    setYml(stringify(config));
  }, [config]);

  return (
    <pre className="rounded-xl bg-gradient-to-r border border-gray-200 dark:border-gray-700 p-2 sm:p-6 dark:bg-gray-800 text-black dark:text-white">
      {yml}
    </pre>
  );
};

export default YmlOutput;
