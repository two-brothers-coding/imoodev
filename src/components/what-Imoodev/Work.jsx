import React from "react";
import "./work.scss";
import Card from "../cards/Card";
import olovka from "../../images/pen.png";
import srce from "../../images/heart.png";
import slika from "../../images/picture.png";
import kocka from "../../images/cubic.png";
function Work() {
  return (
    <div>
      <div className="text">
    <div className="left-right">
        <div className="left">
          <h3>What Does Imoodev Do?</h3>
          <h2>Analyzing Target<br/> Customers witha the Right!</h2>
        </div>
        <div className="right">
        <h4>
          Do not miss this opportunity. With our experience, Whello will find
          something
          <br /> unique in your brand. Analyze and try to follow what your
          audience really likes
          <br /> and is looking for, so that your customers will be more loyal
          to you.
        </h4>
        </div>
        </div>
        <div className="cards">
        <div className="cards-left">
          <Card
            img={olovka}
            title="Web Development"
            text="Easy to modify from the provided template settings page without the need for complicated coding skills."
          />
          <Card
            img={srce}
            title="Web Development"
            text="Easy to modify from the provided template settings page without the need for complicated coding skills."
          />
            </div>
            <div className="cards-right">
          <Card
            img={slika}
            title="Web Development"
            text="Easy to modify from the provided template settings page without the need for complicated coding skills."
          />
          <Card
            img={kocka}
            title="Web Development"
            text="Easy to modify from the provided template settings page without the need for complicated coding skills."
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
