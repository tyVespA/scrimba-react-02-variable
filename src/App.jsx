import React from "react";
import "./App.css";
import BusinessCard from "./components/BusinessCard";

function App() {
  return (
    <div className="appContainer">
      <BusinessCard
        theme="white"
        name="Marco Fasulli"
        role="Social Media Manager"
        website="testwebsite.org"
        linkedin="yes"
      />
      <BusinessCard
        theme="dark"
        name="Paolo de Medici"
        role="Agent Manager"
        website="testwebsite.org"
      />
    </div>
  );
}

export default App;
