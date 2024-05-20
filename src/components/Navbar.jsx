import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar d-flex" id="navBar">
      <div className="logoDiv " id="logodiv">
        <img src={logo} className="logo" alt="" />
      </div>
      <div className="NavbarBox " id="Navbarbox">
        <Link to="#">Home</Link>
        <Link to="#">
          Web App<i className="arrow fa-solid fa-arrow-up "></i>
        </Link>
        <Link to="#">
          For Business<i className="arrow fa-solid fa-arrow-up "></i>
        </Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
