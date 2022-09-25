import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AgTable from "./agtable/AgTable";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function App() {
  return (
    <div className="App">
      <AgTable />
    </div>
  );
}

export default App;
