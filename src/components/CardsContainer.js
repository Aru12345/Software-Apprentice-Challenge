import React from "react";
import { Grid2 } from "@mui/material";
import EachCard from "./EachCard";

function CardsContainer({ cards, sortCards }) {
  // Helper function responsible for rendering list of Card components based on the data passed to it
  const renderCards = (adList, adType) =>
    sortCards(adList).map((listedCard) => (
      <Grid2 item xs={12} sm={6} md={4} lg={3} key={listedCard.id}>
        <EachCard listedCard={listedCard} adType={adType} />
      </Grid2>
    ));

  return (
    <Grid2 container spacing={2} justifyContent="center" alignItems="center">
      {cards.facebook_ads && renderCards(cards.facebook_ads, "facebook_ads")}
      {cards.twitter_ads && renderCards(cards.twitter_ads, "twitter_ads")}
      {cards.snapchat_ads && renderCards(cards.snapchat_ads, "snapchat_ads")}
      {cards.google_analytics &&
        renderCards(cards.google_analytics, "google_analytics")}
    </Grid2>
  );
}

export default CardsContainer;
