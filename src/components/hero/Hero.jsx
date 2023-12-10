import React from "react";
import Btn from "../btn/Btn";
import "./hero.scss"

function Hero() {
  return (
    <div className="hero-section">
      <h1>
        We are creative agency capable of creating
        <br /> outstanding designs and websites
      </h1>
      <h4>
        with Immodev Reach more customers and grow your business potential
        online by
        <br /> building a website with us
      </h4>
      <div className="butons">
           <Btn text="consult now" />
           <Btn className="about" text="About Us "/>
      </div>
    </div>
  );
}

export default Hero;
