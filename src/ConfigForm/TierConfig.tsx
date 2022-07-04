import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { ITheme } from "../config/types";
import ConfigInput from "./ConfigInput";
import ConfigInputLabel from "./ConfigInputLabel";

interface TierConfigProps {
  index: number;
  theme: ITheme;

  // config: Config;
  // setConfig: React.Dispatch<React.SetStateAction<Config>>;
}

const TierConfig: React.FC<TierConfigProps> = ({ index, theme }) => {
  return (
    <div className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:text-white">
      <div className="relative">
        <button
          onClick={() => {
            theme.removeTier(index);
          }}
          className="absolute top-0 right-0 active:text-violet-700"
        >
          <FaTrashAlt />
        </button>
        <ConfigInput
          label={`Tier ${index + 1} Title`}
          value={theme.tiers[index].title}
          id={`tierTitle${index}`}
          onChange={(e) => {
            theme.tiers[index].setTitle(e.target.value);
          }}
        />
        <ConfigInput
          label={`Tier ${index + 1} Amount`}
          value={String(theme.tiers[index].amount)}
          id={`tierAmount${index}`}
          isNumeric={true}
          onChange={(e) => {
            theme.tiers[index].setAmount(+e.target.value);
          }}
        />
        <ConfigInput
          label={`Tier ${index + 1} Image Path`}
          value={theme.tiers[index].image ?? ""}
          id={`tierImage${index}`}
          onChange={(e) => {
            theme.tiers[index].setImage(e.target.value);
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
              theme.tiers[index].setBaseCurrency(
                e.target.value as "DEV" | "ETH" | "USD"
              );
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
