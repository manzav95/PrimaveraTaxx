import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Info from "../InfoHeader/InfoHeader";

function VanillaNav() {
  return (
    <nav className="vanil-nav">
      <Info />
      <section className="nav-section">
        <h2 className="title-name">Primavera Taxx</h2>

        <ul className="nav-links">
          <Link to="/">
            <li className="linklink">Home</li>
          </Link>
          <Link to="/about">
            <li className="linklink">About</li>
          </Link>
          <Link to="/contact">
            <li className="linklink">Contact</li>
          </Link>
          <Link to="/contact">
            <li className="linklink">Contact</li>
          </Link>
          <Link to="/contact">
            <li className="linklink">Contact</li>
          </Link>
          <Link to="/contact">
            <li className="linklink">Contact</li>
          </Link>
        </ul>
      </section>
    </nav>
  );
}

export default VanillaNav;
