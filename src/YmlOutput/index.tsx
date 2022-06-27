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

  return <pre className="text-black dark:text-white">{yml}</pre>;
};

export default YmlOutput;
