import React from "react";
import "./nletter.scss";
import Btn from "../btn/Btn";
function Nletter() {
  return (
    <div className="newsletter">
      <h1>
        Subs Our Newsletter for <br /> Daily Update
      </h1>
      <div className="input">
        <input className="Input" type="email" name="Your email address here" placeholder="Your email address here"/>
        <Btn text="Subscribe" />
      </div>
    </div>
  );
}

export default Nletter;
