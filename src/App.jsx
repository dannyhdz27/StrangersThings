import { useState } from "react";
import "./App.css";
import fetchData from "./API/api";

function App() {
  return (
    <div className="App">
      <h2>Strangers Things</h2>
    </div>
  );
  {
    fetchData();
  }
}

export default App;
