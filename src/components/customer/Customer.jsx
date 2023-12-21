import React from "react";
import "./customer.scss";
import CustCard from "../customer-card/CustCard";
import link from "../../images/link.png"
function Customer() {
  return (
    <div className="customers">
      <div className="cusText">
      <h1>We always prioritize customer satisfaction</h1>
      </div>
      <div className="cards">
      <CustCard
        number="01"
        title="expand your business to the online realm"
        text="Amet minim mollit non deserunt ullamco est
         sit aliqua dolor do amet sint.
          Velit officia consequat "
         img={link}
      />
      <CustCard
        number="02"
        title="expand your business to the online realm"
        text="Amet minim mollit non deserunt ullamco est
         sit aliqua dolor do amet sint.
          Velit officia consequat "
        img={link}
      />
      <CustCard
        number="03"
        title="expand your business to the online realm"
        text="Amet minim mollit non deserunt ullamco est
         sit aliqua dolor do amet sint.
          Velit officia consequat "
        img={link}
      />
     </div>
    </div>
  );
}

export default Customer;
