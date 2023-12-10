import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/Imoodev.png";
import Btn from "../btn/Btn";
import "./navbar.scss"
function Navbar() {
  return (
    <div className="navbar container">
      <img src={logo} alt="" />
      <div className="links">
        <NavLink className="link" to="/">Home</NavLink>
        <NavLink className="link" to="/features">Features</NavLink>
        <NavLink className="link" to="/themes">Themes</NavLink>
        <NavLink className="link" to="/blog">Blog</NavLink>
        <Btn text='Get Started' />
       
      </div>
    </div>
  );
}

export default Navbar;
