import React, { useEffect } from "react";
import Cards from "./components/Cards";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "Challenge-Demo";
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="heading">BLUE PRINT SOFTWARE APPRENTICE CHALLENGE</h1>
      </header>
      <div className="content">
        <Cards />
      </div>
    </div>
  );
}

export default App;
