import React from "react";
import Card from "./Card";
function CardsContainer({ cards, sortCards }) {
  //Helper function responsible for rendering list of Card components based on the data passed to it
  const renderCards = (adList, adType) => (
    <ul>
      {sortCards(adList).map((listedCard) => (
        <Card key={listedCard.id} listedCard={listedCard} adType={adType} />
      ))}
    </ul>
  );

  return (
    <>
      {cards.facebook_ads && renderCards(cards.facebook_ads, "facebook_ads")}
      {cards.twitter_ads && renderCards(cards.twitter_ads, "twitter_ads")}
      {cards.snapchat_ads && renderCards(cards.snapchat_ads, "snapchat_ads")}
      {cards.google_analytics &&
        renderCards(cards.google_analytics, "google_analytics")}
    </>
  );
}
export default CardsContainer;
