import React, { useEffect, useState } from "react";
import CardsContainer from "./components/CardsContainer";
import Search from "./components/Search";
import Sort from "./components/Sort";
import { Grid2 } from "@mui/material";

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
    return adList;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="heading">BLUE PRINT SOFTWARE APPRENTICE CHALLENGE</h1>
      </header>
      <Grid2
        container
        className="functionality"
        spacing={2}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Grid2 item xs={12} sm={12} md={6} lg={6}>
          <Search search={search} setSearch={setSearch} />
        </Grid2>
        <Grid2 item xs={12} sm={12} md={6} lg={6}>
          <Sort
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            sx={{ width: "100%" }}
          />
        </Grid2>
      </Grid2>

      <CardsContainer cards={filteredCards} sortCards={sortCards} />
    </div>
  );
}

export default App;
