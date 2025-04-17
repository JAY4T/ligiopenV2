// src/components/Navbar.js
import React from "react";
import logo from "../assets/ligiopen-icon.png"; // Adjust path based on folder structure


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#helo" className="navbar-logo">
        <img src={logo} alt="LigiOpen Logo" className="navbar-logo-img" />

        </a>

        <ul className="navbar-menu">
          <li><a href="#top-section">Home</a></li>
          <li><a href="#fixtures">Fixtures</a></li>


          {/* Uncomment these lines if you want the other links */}
          {/* <li><a href="#fixtures">Fixtures</a></li>
          <li><a href="#players">Players</a></li>
          <li><a href="#news-section">News</a></li>
          <li><a href="#club-news-section">Clubs</a></li>
          <li><a href="#contact">Contact</a></li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
