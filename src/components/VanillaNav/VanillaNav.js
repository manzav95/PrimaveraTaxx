import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Info from "../InfoHeader/InfoHeader";
import SideBar from "../SideBar/SideBar";

const sideBar = function() {
  let burger = document.querySelector(".burger-toggle");
  let sideNav = document.querySelector(".sidebar-wrapper");

  // document.addEventListener("click", function(e) {
  //   e.preventDefault();

  //   // if (!e.target.matches("#cheeseburger")) return;

  //   sideNav.style.display = "block";

  //   console.log(e.target);
  // });
};

function VanillaNav() {
  return (
    <nav className="vanil-nav box-shadow">
      <section className="nav-wrapper">
        <section className="nav-section">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="title-name">
              <span id="word-primavera">Primavera</span> Taxx
            </h1>
          </Link>

          <ul className="nav-links">
            <Link to="/about" style={{ textDecoration: "none" }}>
              <li className="linklink">About</li>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <li className="linklink">Contact</li>
            </Link>

            <Link to="/reviews" style={{ textDecoration: "none" }}>
              <li className="linklink">Reviews</li>
            </Link>
            <li className="dropdown linklink dropbtn">
              Resources
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
          </ul>
          <div className="burger-toggle">
            <input type="checkbox" id="cheeseburger" onClick={sideBar} />
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>
        <section className="login-container">
          <ul className="login-links">
            <li className="linklinks">
              <a
                className="login-links"
                href="https://login.atomanager.com/ATOM_PRI/webinfodefault.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Returning Clients
              </a>
            </li>
            <h4 id="line-divide"> |</h4>
            <li className="linklinks">
              {/* {" "} */}
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
