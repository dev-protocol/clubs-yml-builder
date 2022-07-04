import { Dispatch, SetStateAction } from "react";

export type BaseCurrency = "DEV" | "ETH" | "USD";

export interface ITheme {
  tiers: ITier[];
  setTiers: Dispatch<SetStateAction<ITier[]>>;
  color: IColor;
  addTier: () => void;
  removeTier: (index: number) => void;
}

export interface ITier {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  amount: number;
  setAmount: Dispatch<SetStateAction<number>>;
  image: string;
  setImage: Dispatch<SetStateAction<string>>;
  baseCurrency: BaseCurrency;
  setBaseCurrency: Dispatch<SetStateAction<BaseCurrency>>;
}

export interface IColor {
  base: string;
  setBase: Dispatch<SetStateAction<string>>;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  link: string;
  setLink: Dispatch<SetStateAction<string>>;
  linkHover: string;
  setLinkHover: Dispatch<SetStateAction<string>>;
}

export interface ICore {
  siteName: string;
  setSiteName: Dispatch<SetStateAction<string>>;
  daoName: string;
  setDaoName: Dispatch<SetStateAction<string>>;
  tokenAddress: string;
  setTokenAddress: Dispatch<SetStateAction<string>>;
  networkId: number;
  setNetworkId: Dispatch<SetStateAction<number>>;
  rpc: string;
  setRpc: Dispatch<SetStateAction<string>>;
}

export interface IConfig {
  core: ICore;
  theme: ITheme;
}
