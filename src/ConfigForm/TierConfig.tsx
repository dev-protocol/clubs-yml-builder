import React from "react";
import { FaTrash, FaTrashAlt } from "react-icons/fa";
import { Config, Tier } from "../types";
import ConfigInput from "./ConfigInput";
import ConfigInputLabel from "./ConfigInputLabel";

interface TierConfigProps {
  index: number;
  config: Config;
  setConfig: React.Dispatch<React.SetStateAction<Config>>;
}

const TierConfig: React.FC<TierConfigProps> = ({
  index,
  config,
  setConfig,
}) => {
  return (
    <div className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:text-white">
      <div className="relative">
        <button
          onClick={() => {
            config.theme.tier.splice(index, 1);
            setConfig(Object.assign({}, config));
          }}
          className="absolute top-0 right-0 active:text-violet-700"
        >
          <FaTrashAlt />
        </button>
        <ConfigInput
          label={`Tier ${index + 1} Title`}
          value={config.theme.tier[index].title}
          id={`tierTitle${index}`}
          onChange={(e) => {
            const tier = config.theme.tier[index];
            tier.title = e.target.value;
            const newConfig = Object.assign({}, config);
            newConfig.theme.tier[index] = tier;
            setConfig(newConfig);
          }}
        />
        <ConfigInput
          label={`Tier ${index + 1} Amount`}
          value={String(config.theme.tier[index].amount)}
          id={`tierAmount${index}`}
          isNumeric={true}
          onChange={(e) => {
            const tier = config.theme.tier[index];
            tier.amount = +e.target.value;
            const newConfig = Object.assign({}, config);
            newConfig.theme.tier[index] = tier;
            setConfig(newConfig);
          }}
        />
        <ConfigInput
          label={`Tier ${index + 1} Image Path`}
          value={config.theme.tier[index].image ?? ""}
          id={`tierImage${index}`}
          onChange={(e) => {
            const tier = config.theme.tier[index];
            tier.image = e.target.value;
            const newConfig = Object.assign({}, config);
            newConfig.theme.tier[index] = tier;
            setConfig(newConfig);
          }}
        />
        <div>
          <ConfigInputLabel
            text={`Tier ${index + 1} Currency`}
            htmlFor={`tierCurrency${index}`}
          />
          <select
            id={`tierCurrency${index}`}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => {
              const tier = config.theme.tier[index];
              tier.basedCurrency = e.target.value as "DEV" | "ETH" | "USD";
              const newConfig = Object.assign({}, config);
              newConfig.theme.tier[index] = tier;
              setConfig(newConfig);
            }}
          >
            <option value="DEV">DEV</option>
            <option value="ETH">ETH</option>
            <option value="USD">USD</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TierConfig;
