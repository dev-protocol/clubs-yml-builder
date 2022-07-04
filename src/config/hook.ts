import { useEffect, useState } from "react";
import { stringify } from "yaml";
import { BaseCurrency, IColor, ICore, ITier } from "./types";

export const useTier = (): ITier => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [image, setImage] = useState("");
  const [baseCurrency, setBaseCurrency] = useState<BaseCurrency>("DEV");

  return {
    title,
    setTitle,
    amount,
    setAmount,
    image,
    setImage,
    baseCurrency,
    setBaseCurrency,
  };
};

const useCore = (build: () => void): ICore => {
  const [siteName, setSiteName] = useState("");
  const [daoName, setDaoName] = useState("");
  const [tokenAddress, setTokenAddress] = useState("");
  const [networkId, setNetworkId] = useState(1);
  const [rpc, setRpc] = useState("");

  useEffect(() => {
    build();
  }, [siteName, daoName, tokenAddress, networkId, rpc]);

  return {
    siteName,
    setSiteName,
    daoName,
    setDaoName,
    tokenAddress,
    setTokenAddress,
    networkId,
    setNetworkId,
    rpc,
    setRpc,
  };
};

const useTheme = (build: () => void) => {
  const [tiers, setTiers] = useState<ITier[]>([useTier()]);
  const color = useColor();

  const addTier = () => {
    setTiers((tiers) => [...tiers, useTier()]);
  };

  const removeTier = (index: number) => {
    const _tiers = tiers.splice(index, 1);
    setTiers(_tiers);
  };

  useEffect(() => {
    build();
  }, [tiers, color]);

  return { tiers, setTiers, color: useColor(), addTier, removeTier };
};

const useColor = (): IColor => {
  const [base, setBase] = useState("#000");
  const [text, setText] = useState("#fff");
  const [link, setLink] = useState("#5b8bf5");
  const [linkHover, setLinkHover] = useState("#96b5fa");

  return {
    base,
    setBase,
    text,
    setText,
    link,
    setLink,
    linkHover,
    setLinkHover,
  };
};

export const useConfigContext = () => {
  const [yml, setYml] = useState("");

  const build = () => {
    setYml(
      stringify({
        core: {
          siteName: config.core.siteName,
          daoName: config.core.daoName,
          tokenAddress: config.core.tokenAddress,
          networkId: config.core.networkId,
          rpc: config.core.rpc,
        },
        theme: {
          color: {
            base: config.theme.color.base,
            text: config.theme.color.text,
            link: config.theme.color.link,
            linkHover: config.theme.color.linkHover,
          },
          tiers: config.theme.tiers.map((_tier) => ({
            title: _tier.title,
            amount: _tier.amount,
            image: _tier.image,
            basedCurrency: _tier.baseCurrency,
          })),
        },
      })
    );
  };

  const config = {
    core: useCore(build),
    theme: useTheme(build),
  };

  return { input: config, output: yml };
};
