import "./styles.css";
import React from "react";

import { DGNavBar } from "./components/DGNavBar";
import { DGRouter } from "./components/DGRouter";

export default function App() {
  return (
    <div className="App">
      <DGNavBar />
      <DGRouter />
    </div>
  );
}
