import React, { useEffect, useState } from "react";
import CardsContainer from "./components/CardsContainer";
import Search from "./components/Search";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/fakeDataSet")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    document.title = "Challenge-Demo";
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="heading">BLUE PRINT SOFTWARE APPRENTICE CHALLENGE</h1>
      </header>
      <Search />
      <CardsContainer cards={cards} />
    </div>
  );
}

export default App;
