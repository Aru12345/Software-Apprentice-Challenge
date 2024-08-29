// Card.js
import React from "react";

function Card({ listedCard, adType }) {
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
  return (
    <div className="card">
      {adType === "facebook_ads" && (
        <>
          <h2>Campaing:{campaign_name}</h2>
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
          <h3>Campaing:{campaign}</h3>
          <p>
            <strong>Adset</strong> {ad_group}
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
          <h3>Campaing :{campaign_name}</h3>
          <p>
            <strong>Adset</strong> {ad_squad_name}
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
          <h3>Campaign:{utm_campaign}</h3>
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
    </div>
  );
}

export default Card;
