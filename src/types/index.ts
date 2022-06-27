export type Tier = {
  title: string;
  amount: number;
  image?: string;
  basedCurrency: "USD" | "ETH" | "DEV";
};

export type Theme = {
  tier: Tier[];
  color: {
    base: string;
    text: string;
    link: string;
    linkHover: string;
  };
};

export type Core = {
  siteName: string;
  daoName: string;
  tokenAddress: string;
  networkId: number;
  rpc?: string;
};

export type Config = {
  core: Core;
  theme: Theme;
};
