import { useState } from "react";
import YmlOutput from "./YmlOutput";
import { Config } from "./types";
import ConfigForm from "./ConfigForm";

function App() {
  const initBuild = (): Config => ({
    core: {
      siteName: "",
      daoName: "",
      tokenAddress: "",
      networkId: 1,
      rpc: "",
    },
    theme: {
      tier: [
        {
          title: "",
          amount: 0,
          image: "",
          basedCurrency: "DEV",
        },
      ],
      color: {
        base: "#000",
        text: "#fff",
        link: "#5b8bf5",
        linkHover: "#96b5fa",
      },
    },
  });

  const [config, setConfig] = useState<Config>(initBuild());

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen pb-8">
      <header className="container mx-auto mb-8 py-4 px-2">
        <h1 className="font-bold">Clubs YML Builder</h1>
      </header>
      <main className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-2">
        <ConfigForm config={config} setConfig={setConfig} />
        <div>
          <div className="sticky top-8">
            <YmlOutput config={config} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
