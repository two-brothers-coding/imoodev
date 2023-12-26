import React from 'react'
import "./footer.scss"
import lokacija from "../../images/lokacija.png"
import email from "../../images/email.png"
import telefon from "../../images/telefon.png"
import input from "../../images/input.png"
function Footer() {
  return (
    <div className='footer'>
        <div className='im'>
            <h1>Imoodev</h1>
            <img src={lokacija} alt="img" />
            <img src={email} alt="img" />
            <img src={telefon} alt="img" />
        </div>
        <div>
            <h2>Our Future</h2>
            <h3>Paying off debt</h3>
            <h3>Planning Work</h3>
            <h3>Our Promise</h3>
            <h3>Employee Benefits</h3>
        </div>
        <div>
            <h2>Our Service</h2>
            <h3>Digital Service</h3>
            <h3>Marketing Service</h3>
        </div>
        <div>
            <h2>Join our email</h2>
            <h3>Enter your email address for joined our agency </h3>
            <img src={input} alt="img" />
        </div> 
    </div>
   
  )
}

export default Footer