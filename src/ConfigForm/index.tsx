import React, { useEffect } from "react";
import ConfigInput from "./ConfigInput";
import ConfigInputLabel from "./ConfigInputLabel";
import TierConfig from "./TierConfig";
import { ChromePicker } from "react-color";
import { useConfigContext } from "../config/hook";

interface ConfigFormProps {}

const ConfigForm: React.FC<ConfigFormProps> = () => {
  const { input, output } = useConfigContext();
  // const { core, theme } = config;

  useEffect(() => {
    console.log("config form recognizes output change: ");
  }, [output]);

  return (
    <div>
      <div className="mb-8">
        <h2 className="font-bold mb-2">Core</h2>
        <ConfigInput
          label="Site Name"
          value={input.core.siteName}
          id="siteName"
          onChange={(e) => input.core.setSiteName(e.target.value)}
        />
        <ConfigInput
          label="DAO Name"
          value={input.core.daoName}
          id="daoName"
          onChange={(e) => input.core.setDaoName(e.target.value)}
        />
        <ConfigInput
          label="Token Address"
          value={input.core.tokenAddress}
          id="tokenAddress"
          onChange={(e) => input.core.setTokenAddress(e.target.value)}
        />
        <ConfigInput
          label="Network ID"
          value={String(input.core.networkId)}
          id="networkId"
          isNumeric={true}
          onChange={(e) => input.core.setNetworkId(+e.target.value)}
        />
        <ConfigInput
          label="RPC (optional)"
          value={input.core.rpc ?? ""}
          id="rpc"
          onChange={(e) => input.core.setRpc(e.target.value)}
        />
      </div>

      <div>
        <h2 className="font-bold mb-2">Theme</h2>

        <div>
          {input.theme.tiers.map((_, i) => (
            <div key={`tier-${i}`}>
              <TierConfig index={i} theme={input.theme} />
            </div>
          ))}
          <button
            type="button"
            className="text-gray-900 w-full bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            onClick={() => input.theme.addTier()}
          >
            + Add Tier
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <ConfigInputLabel text="Base Color" htmlFor="baseColor" />
            <ChromePicker
              color={input.theme.color.base}
              disableAlpha={true}
              onChange={(color) => {
                input.theme.color.setBase(color.hex);
              }}
            />
          </div>
          <div>
            <ConfigInputLabel text="Text Color" htmlFor="textColor" />
            <ChromePicker
              color={input.theme.color.text}
              disableAlpha={true}
              onChange={(color) => {
                // config.theme.color.text = color.hex;
                // setConfig(Object.assign({}, config));
                input.theme.color.setText(color.hex);
              }}
            />
          </div>

          <div>
            <ConfigInputLabel text="Link Color" htmlFor="linkColor" />
            <ChromePicker
              color={input.theme.color.link}
              disableAlpha={true}
              onChange={(color) => {
                // config.theme.color.link = color.hex;
                // setConfig(Object.assign({}, config));
                input.theme.color.setLink(color.hex);
              }}
            />
          </div>

          <div>
            <ConfigInputLabel
              text="Link Hover Color"
              htmlFor="linkHoverColor"
            />
            <ChromePicker
              color={input.theme.color.linkHover}
              disableAlpha={true}
              onChange={(color) => {
                // config.theme.color.linkHover = color.hex;
                // setConfig(Object.assign({}, config));
                input.theme.color.setLinkHover(color.hex);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigForm;
