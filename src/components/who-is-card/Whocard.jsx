import React from "react";
import "./whocard.scss";
import Btn from "../btn/Btn";
function Whocard({ title, text, img, paragraph,direction }) {
  return (
    <div className={`${direction === "left" ? "who-left" :  "who-right"}`}>
      <div className="whoText">
        <h1>{title}</h1>
        <h2>{text}</h2>
        <h3>{paragraph}</h3>
        <Btn text="Consult now" />
      </div>

      <img src={img} alt="image" className="img" />
    </div>
  );
}

export default Whocard;
