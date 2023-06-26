import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useFlag } from "@unleash/proxy-client-react";

function App() {
  const featureName =
    new URLSearchParams(window.location.search).get("feature") || "";
  const enabled = useFlag(featureName);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {enabled && <>{featureName}</>}
      </header>
    </div>
  );
}

export default App;
