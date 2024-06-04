import React from "react";
import assets from "./assets.js";
import "./body.css";

export default function Body() {
  return (
    <div>
      <div className="body-subscription">
        <div className="body-subscription-img">
          <img src={assets.zopeful_sub} alt="Zopeful Climate Logo"></img>
        </div>
        <div className="text-contents-subscription">
          <h2>Carbon Removal Subscription</h2>
          <p>
            Whether you are in the market for the latest tech gadget, a wardrobe
            makeover or booking a much-needed holiday, there is planet-heating
            carbon hidden in everything we buy, consume and do.
          </p>
          <p>No-one asked for it to be there, but there it definitely is!</p>
          <p>
            This year, we encourage everyone to be more intentional in the
            things they choose to purchase and to join us as we put our money
            towards high-quality, science-backed, carbon removal projects.
          </p>
          <button id="bodyButton-1">Find out more</button>
        </div>
      </div>
      <div className="body-every-tonne">
        <div className="text-contents-every-tonne">
          <h2>Every tonne matters</h2>
          <p>
            Our ready-made, curated, portfolio of high quality carbon dioxide
            removal (CDR) solutions is live. It aims for the highest
            permanence-for-the-$-per-tonne that we can find.
          </p>
          <p>
            We're excited to be working with an inspiring group of global CDR
            companies taking the fight to the Climate Crisis. They're doing
            amazing work that holds a tonne - pun intended - of promise.
          </p>
          <button id="bodyButton-2">Discover more</button>
        </div>
        <div className="body-every-tonne-img">
          <img src={assets.zopeful_port} alt="Zopeful Climate Logo"></img>
        </div>
        </div>
    </div>
  );
}