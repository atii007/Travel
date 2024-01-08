import React from "react";

import CardItems from "./CardItems";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Checkout these Epic Destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems
              src="../images/img-9.jpg"
              text="Explore the hidden Waterfall deep inside the Amazon Jungle."
              label="Adventure"
              path="/services"
            />
            <CardItems
              src="../images/img-2.jpg"
              text="Travel through the Islands of Bali in a Private Cruise."
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItems
              src="../images/img-3.jpg"
              text="Explore the hidden Creatures deep inside the Ocean."
              label="Adventure"
              path="/services"
            />
            <CardItems
              src="../images/img-4.jpg"
              text="If you love Soccer, Enjoy travelling to the world's best Soccer Stadium."
              label="Adventure"
              path="/services"
            />
            <CardItems
              src="../images/img-5.jpg"
              text="Experience the Luxury Appartments of Moscow."
              label="Luxury"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
