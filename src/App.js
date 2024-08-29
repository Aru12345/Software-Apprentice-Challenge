import React, { useEffect, useState } from "react";
import CardsContainer from "./components/CardsContainer";
import Search from "./components/Search";
import Sort from "./components/Sort";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("all");

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

  //Filtering the cards based on the search term
  const filteredCards = {
    facebook_ads: cards.facebook_ads?.filter((card) =>
      card.campaign_name.toLowerCase().includes(search.toLowerCase())
    ),
    twitter_ads: cards.twitter_ads?.filter((card) =>
      card.campaign.toLowerCase().includes(search.toLowerCase())
    ),
    snapchat_ads: cards.snapchat_ads?.filter((card) =>
      card.campaign_name.toLowerCase().includes(search.toLowerCase())
    ),
    google_analytics: cards.google_analytics?.filter((card) =>
      card.utm_campaign.toLowerCase().includes(search.toLowerCase())
    ),
  };

  // Sorting logic based on spend
  const sortCards = (adList) => {
    if (sortOrder === "asc") {
      return adList.sort((a, b) => a.spend - b.spend);
    }
    if (sortOrder === "desc") {
      return adList.sort((a, b) => b.spend - a.spend);
    }
    return adList; // Default: "all"
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="heading">BLUE PRINT SOFTWARE APPRENTICE CHALLENGE</h1>
      </header>
      <Search search={search} setSearch={setSearch} />
      <Sort sortOrder={sortOrder} setSortOrder={setSortOrder} />
      <CardsContainer cards={filteredCards} sortCards={sortCards} />
    </div>
  );
}

export default App;
