// App.js
import React, { Suspense, useEffect, useState, useRef } from "react";
import AppRoutes from "./AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { injectScript } from "./utils/Helpers";
import { GetSpecificAppConfig } from "./common/api/ApiService";

function App() {
  const [appConfigData, setAppConfigData] = useState({});
  const injectedScripts = useRef(new Set());

  useEffect(() => {
    const savedConfig = localStorage.getItem("appConfig");
    if (savedConfig) {
      const parsedConfig = JSON.parse(savedConfig);
      setAppConfigData(parsedConfig);
      injectScriptsFromConfig(parsedConfig);
    }

    (async () => {
      try {
        const response = await GetSpecificAppConfig();
        if (response?.statusCode === 200) {
          const config = response.data;
          setAppConfigData(config);
          localStorage.setItem("appConfig", JSON.stringify(config));
          injectScriptsFromConfig(config);
        }
      } catch (error) {
        console.error("Error fetching app config:", error);
      }
    })();
  }, []);

  const injectScriptsFromConfig = (config) => {
    ["google_analytics", "google_search_console", "meta_pixel"].forEach((key) => {
      if (config?.[key] && !injectedScripts.current.has(key)) {
        injectScript(config[key]);
        injectedScripts.current.add(key);
      }
    });
  };

  return (
    <Suspense fallback={<div className="suspense-loader">Loading...</div>}>
      <AppRoutes />
      <ToastContainer />
    </Suspense>
  );
}

export default App;
