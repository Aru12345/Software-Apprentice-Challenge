import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function EachCard({ listedCard, adType }) {
  const {
    campaign_name,
    media_buy_name,
    ad_name,
    spend,
    clicks,
    impressions,
    campaign,
    ad_group,
    image_name,
    post_clicks,
    ad_squad_name,
    creative_name,
    cost,
    utm_campaign,
    utm_medium,
    utm_content,
    results,
  } = listedCard;

  const getCardColor = (type) => {
    switch (type) {
      case "facebook_ads":
        return "#3b5998"; // blue
      case "twitter_ads":
        return "#1da1f2"; // lighter blue
      case "snapchat_ads":
        return "#fffc00"; // yellow
      case "google_analytics":
        return "#4CBB17"; // green
      default:
        return "red"; // default
    }
  };

  //Based on background for accessiblity
  const getTextColor = (type) => {
    return ["facebook_ads", "twitter_ads", "google_analytics"].includes(type)
      ? "white"
      : "black";
  };

  return (
    <Card
      sx={{
        border: "1px solid black",
        width: "100%",
        minWidth: "300px",
        minHeight: "180px",
        margin: "0 auto",
        backgroundColor: getCardColor(adType),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
          boxShadow: "10px 10px 15px 0px rgba(0,0,0,0.5)",
        },
      }}
    >
      <CardContent
        sx={{
          fontFamily: "Arial",
          color: getTextColor(adType),
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
        }}
      >
        {adType === "facebook_ads" && (
          <>
            <p>
              <strong>Campaign:</strong> {campaign_name}
            </p>
            <p>
              <strong>Adset:</strong> {media_buy_name}
            </p>
            <p>
              <strong>Creative:</strong> {ad_name}
            </p>
            <p>
              <strong>Spend:</strong> ${spend}
            </p>
            <p>
              <strong>Impressions:</strong> {impressions}
            </p>
            <p>
              <strong>Clicks:</strong> {clicks}
            </p>
          </>
        )}
        {adType === "twitter_ads" && (
          <>
            <p>
              <strong>Campaign:</strong> {campaign}
            </p>
            <p>
              <strong>Adset:</strong> {ad_group}
            </p>
            <p>
              <strong>Creative:</strong> {image_name}
            </p>
            <p>
              <strong>Spend:</strong> ${spend}
            </p>
            <p>
              <strong>Impressions:</strong> {impressions}
            </p>
            <p>
              <strong>Clicks:</strong> {post_clicks}
            </p>
          </>
        )}
        {adType === "snapchat_ads" && (
          <>
            <p>
              <strong>Campaign:</strong> {campaign_name}
            </p>
            <p>
              <strong>Adset:</strong> {ad_squad_name}
            </p>
            <p>
              <strong>Creative:</strong> {creative_name}
            </p>
            <p>
              <strong>Spend:</strong> ${cost}
            </p>
            <p>
              <strong>Impressions:</strong> {impressions}
            </p>
            <p>
              <strong>Clicks:</strong> {post_clicks}
            </p>
          </>
        )}
        {adType === "google_analytics" && (
          <>
            <p>
              <strong>Campaign:</strong> {utm_campaign}
            </p>
            <p>
              <strong>Adset:</strong> {utm_medium}
            </p>
            <p>
              <strong>Creative:</strong> {utm_content}
            </p>
            <p>
              <strong>Results:</strong> ${results}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default EachCard;
