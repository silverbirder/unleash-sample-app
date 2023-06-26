import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useFlag, useVariant } from "@unleash/proxy-client-react";

function App() {
  const featureName =
    new URLSearchParams(window.location.search).get("feature") || "";
  const flag = useFlag(featureName);
  const variant = useVariant(featureName);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{flag && featureName}</div>
        <div>{variant.enabled && variant.name}</div>
      </header>
    </div>
  );
}

export default App;
