import React from "react";
import { Config } from "../types";
import ConfigInput from "./ConfigInput";
import ConfigInputLabel from "./ConfigInputLabel";
import TierConfig from "./TierConfig";
import { ChromePicker } from "react-color";

interface ConfigFormProps {
  config: Config;
  setConfig: React.Dispatch<React.SetStateAction<Config>>;
}

const ConfigForm: React.FC<ConfigFormProps> = ({ config, setConfig }) => {
  return (
    <div>
      <div className="mb-8">
        <h2 className="font-bold mb-2">Core</h2>
        <ConfigInput
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
        <ConfigInput
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
        <ConfigInput
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
        <ConfigInput
          label="Network ID"
          value={String(config.core.networkId)}
          id="networkId"
          isNumeric={true}
          onChange={(e) =>
            setConfig((config) =>
              Object.assign({
                ...config,
                core: {
                  ...config.core,
                  networkId: +e.target.value,
                },
              })
            )
          }
        />
        <ConfigInput
          label="RPC (optional)"
          value={config.core.rpc ?? ""}
          id="rpc"
          onChange={(e) =>
            setConfig((config) =>
              Object.assign({
                ...config,
                core: {
                  ...config.core,
                  rpc: e.target.value,
                },
              })
            )
          }
        />
      </div>

      <div>
        <h2 className="font-bold mb-2">Theme</h2>

        <div>
          {config.theme.tier.map((_, i) => (
            <div key={`tier-${i}`}>
              <TierConfig index={i} config={config} setConfig={setConfig} />
            </div>
          ))}
          <button
            type="button"
            className="text-gray-900 w-full bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            onClick={() => {
              const tier = config.theme.tier;
              tier.push({
                title: "",
                amount: 0,
                image: "",
                basedCurrency: "DEV",
              });
              config.theme.tier = tier;
              setConfig(Object.assign({}, config));
            }}
          >
            + Add Tier
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <ConfigInputLabel text="Base Color" htmlFor="baseColor" />
            <ChromePicker
              color={config.theme.color.base}
              disableAlpha={true}
              onChange={(color) => {
                config.theme.color.base = color.hex;
                setConfig(Object.assign({}, config));
              }}
            />
          </div>
          <div>
            <ConfigInputLabel text="Text Color" htmlFor="textColor" />
            <ChromePicker
              color={config.theme.color.text}
              disableAlpha={true}
              onChange={(color) => {
                config.theme.color.text = color.hex;
                setConfig(Object.assign({}, config));
              }}
            />
          </div>

          <div>
            <ConfigInputLabel text="Link Color" htmlFor="linkColor" />
            <ChromePicker
              color={config.theme.color.link}
              disableAlpha={true}
              onChange={(color) => {
                config.theme.color.link = color.hex;
                setConfig(Object.assign({}, config));
              }}
            />
          </div>

          <div>
            <ConfigInputLabel
              text="Link Hover Color"
              htmlFor="linkHoverColor"
            />
            <ChromePicker
              color={config.theme.color.linkHover}
              disableAlpha={true}
              onChange={(color) => {
                config.theme.color.linkHover = color.hex;
                setConfig(Object.assign({}, config));
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigForm;
