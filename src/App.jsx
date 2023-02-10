import React from "react";
import "./App.css";
import BusinessCard from "./components/BusinessCard";

function App() {
  return (
    <div>
      <BusinessCard
        bgColor="#1A1B21"
        color="white"
        name="Marco Fasulli"
        role="Social Media Manager"
        website="testwebsite.org"
      />
    </div>
  );
}

export default App;
