import React from "react";
import "./style.css";

const toggleCloseButton = function() {
  let closeBtn = document.querySelector(".close-btn");
  let mobileMenu = document.querySelector(".mobile-menu");

  closeBtn.classList.toggle("close-active");
  mobileMenu.classList.toggle("mobile-menu-opened");
};

function SideBar() {
  return (
    <div className="sidebar-wrapper">
      <div class="mobile-menu" id="mobile-menu">
        <div class="menu-content">
          <a href="#" target="_blank" rel="noopener noreferrer">
            Home
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Contact
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            About{" "}
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Home
          </a>
        </div>
      </div>{" "}
    </div>
  );
}

export default SideBar;
