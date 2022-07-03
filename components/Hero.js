import React from "react";
import pGrid from "../src/images/photo-grid.png";

function Hero() {
  return (
    <section>
      <img src={pGrid} alt="pGrid" />
      <h1>Online experiences</h1>
      <p>
        Join unique interactive experiences led by one-of-a-kind hosts-all
        without leaving home
      </p>
    </section>
  );
}

export default Hero;
