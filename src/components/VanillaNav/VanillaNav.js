import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Info from "../InfoHeader/InfoHeader";

function VanillaNav() {
  return (
    <nav className="vanil-nav">
      <Info />
      <section className="nav-wrapper">
        <section className="nav-section">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h2 className="title-name">
              <span id="word-primavera">Primavera</span> Taxx
            </h2>
          </Link>

          <ul className="nav-links">
            <Link to="/" style={{ textDecoration: "none" }}>
              <li className="linklink">Home</li>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <li className="linklink">About</li>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <li className="linklink">Contact</li>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <li className="linklink">Contact</li>
            </Link>
          </ul>
        </section>
        <section className="login-container">
          <ul className="login-links">
            <li className="linklink">
              <a
                className="login-links"
                href="https://login.atomanager.com/ATOM_PRI/webinfodefault.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Returning Clients
              </a>
            </li>
            <h4>|</h4>
            <li className="linklink">
              {" "}
              <a
                className="login-links"
                href="https://login.atomanager.com/ATOM_PRI/default.aspx?redirect=ProspectMessage.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                New Clients
              </a>
            </li>
          </ul>
        </section>
      </section>
    </nav>
  );
}

export default VanillaNav;
