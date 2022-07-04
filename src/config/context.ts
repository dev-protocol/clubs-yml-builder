import { createContext, useContext } from "react";
import { IConfig } from "./types";

export const config: IConfig = {
  core: {
    siteName: "",
    setSiteName: () => {},
    daoName: "",
    setDaoName: () => {},
    tokenAddress: "",
    setTokenAddress: () => {},
    networkId: 1,
    setNetworkId: () => {},
    rpc: "",
    setRpc: () => {},
  },
  theme: {
    tiers: [
      {
        title: "",
        setTitle: () => {},
        amount: 0,
        setAmount: () => {},
        image: "",
        setImage: () => {},
        baseCurrency: "DEV",
        setBaseCurrency: () => {},
      },
    ],
    setTiers: () => {},
    color: {
      base: "#000",
      setBase: () => {},
      text: "#fff",
      setText: () => {},
      link: "#5b8bf5",
      setLink: () => {},
      linkHover: "#96b5fa",
      setLinkHover: () => {},
    },
    addTier: () => {},
    removeTier: () => {},
  },
};

export const ConfigContext = createContext({ input: config, output: "" });

export function useProvider(): { input: IConfig; output: string } {
  return useContext(ConfigContext);
}
