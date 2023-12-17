import React from "react";
import "./who-is.scss";
import Whocard from "../who-is-card/Whocard";
import image1 from "../../images/who-image2.png"
import image2 from "../../images/who-image.png"
function Who() {
  return (
    <div className="who">
      <Whocard
        title="Who is Imoodev?"
        text="we are a service engaged  in digital marketing"
        paragraph="Do not miss this opportunity. With our experience, Whello will find something 
        unique in your brand. Analyze and try to follow what your audience really likes
         and is looking for, so that your customers will be more loyal to you."
        img={image1}
      />
       <Whocard
        direction="left"
        text="expand your business by  building a website online"
        paragraph="Do not miss this opportunity. With our experience, Whello will find something 
        unique in your brand. Analyze and try to follow what your audience really likes
         and is looking for, so that your customers will be more loyal to you."
        img={image2}
      />
    </div>
  );
}

export default Who;
