import React from "react";
import "./style.css";

function SideBar() {
  return (
    <div className="sidebar-wrapper">
      <div className="close-btn">&times;</div>
      <div className="side-content">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/reviews">Reviews</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
