import React from "react";
import { Config } from "../types";
import Input from "./Input";

interface ConfigFormProps {
  config: Config;
  setConfig: React.Dispatch<React.SetStateAction<Config>>;
}

const ConfigForm: React.FC<ConfigFormProps> = ({ config, setConfig }) => {
  return (
    <div>
      <div>
        <h2 className="font-bold mb-2">Core</h2>
        <Input
          label="Site Name"
          value={config.core.siteName}
          id="siteName"
          onChange={(e) =>
            setConfig((config) =>
              Object.assign({
                ...config,
                core: {
                  ...config.core,
                  siteName: e.target.value,
                },
              })
            )
          }
        />
        <Input
          label="DAO Name"
          value={config.core.daoName}
          id="daoName"
          onChange={(e) =>
            setConfig((config) =>
              Object.assign({
                ...config,
                core: {
                  ...config.core,
                  daoName: e.target.value,
                },
              })
            )
          }
        />
        <Input
          label="Token Address"
          value={config.core.tokenAddress}
          id="tokenAddress"
          onChange={(e) =>
            setConfig((config) =>
              Object.assign({
                ...config,
                core: {
                  ...config.core,
                  tokenAddress: e.target.value,
                },
              })
            )
          }
        />
      </div>

      <div>
        <h2 className="font-bold mb-2">Theme</h2>
      </div>
    </div>
  );
};

export default ConfigForm;
