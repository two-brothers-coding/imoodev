import React from "react";
import "./news.scss"
import figma from "../../images/figma.png";
import toys from "../../images/toys.png";
import koyo from "../../images/koyo.png";
import Ncard from "../news-card/Ncard";
function News() {
  return (
    <div className="news">
        <div className="newstitle">
        <h1>latest news from Imoodev</h1>
        </div>
        <div className="cards">
      <Ncard
        img={figma}
        date="September 9, 2020"
        post="Posted By Admin"
        title="Introducing Uncode 2.3.0 and the WooCommerce Builder"
        text="We are pleased to bring you Uncode 2.3.0 the latest and
         greatest version of our pixel-perfect, creative, multipurpose 
         WordPress . . . ."
      />
       <Ncard
        img={toys}
        date="September 9, 2020"
        post="Posted By Admin"
        title="Introducing Uncode 2.3.0 and the WooCommerce Builder"
        text="We are pleased to bring you Uncode 2.3.0 the latest and
         greatest version of our pixel-perfect, creative, multipurpose 
         WordPress . . . ."
      />
       <Ncard
        img={koyo}
        date="September 9, 2020"
        post="Posted By Admin"
        title="Introducing Uncode 2.3.0 and the WooCommerce Builder"
        text="We are pleased to bring you Uncode 2.3.0 the latest and
         greatest version of our pixel-perfect, creative, multipurpose 
         WordPress . . . ."
      />
      </div>
    </div>
  );
}

export default News;
