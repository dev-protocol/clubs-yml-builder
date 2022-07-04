import YmlOutput from "./YmlOutput";
import ConfigForm from "./ConfigForm";
import { ConfigContext } from "./config/context";
import { useConfigContext } from "./config/hook";

function App() {
  const configContext = useConfigContext();

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen pb-8">
      <header className="container mx-auto mb-8 py-4 px-2">
        <h1 className="font-bold">Clubs YML Builder</h1>
      </header>
      <main className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-2">
        <ConfigContext.Provider value={configContext}>
          <ConfigForm />
          <div>
            <div className="sticky top-8">
              <YmlOutput />
            </div>
          </div>
        </ConfigContext.Provider>
      </main>
    </div>
  );
}

export default App;
