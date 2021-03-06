import React from "react";
import "./style.css";

const removeInfo = function () {
  let infoBar = document.querySelector(".info-wrapper");

  infoBar.style.display = "none";
};

function Info() {
  return (
    <div className="info-wrapper">
      <section className="info-links">
        <ul className="list">
          <li>
            <span className="infoContact">
              <i className="fas fa-phone fa-lg"></i> Call Us Now:{" "}
              <a href="tel:+19255501986 "> (925) 550-1986 </a>
            </span>
          </li>
          <li>
            <span className="infoContact">
              <i className="fas fa-envelope fa-lg"></i> Email Us:{" "}
              <a
                href="mailto:primaverataxx@gmail.com?Subject=Hello%20Again&body=Hello%20Primavera%20Taxx"
                target="_blank"
                rel="noopener noreferrer"
              >
                primaverataxx@gmail.com
              </a>
            </span>
          </li>
          <li>
            <span className="infoContact">
              <i className="fas fa-map-marked fa-lg"></i>
              <a
                href="http://maps.google.com/maps?q=4369+Hillcrest+Ave,+Antioch,+CA+94565"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                4369 Hillcrest Ave, Antioch, CA, 94531
              </a>
            </span>
          </li>
        </ul>
      </section>
      <section className="website-links">
        <ul className="site-links">
          <li>
            <a
              href="https://www.facebook.com/Primavera-Taxx-310813666103767/?ref=br_rs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f fa-2x"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.yelp.com/biz/primavera-taxx-antioch-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-yelp fa-2x"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/maria-luisa-hernandez-2abaa393/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in fa-2x"></i>
            </a>
          </li>
          <i
            className="fas fa-times info-x"
            id="close-button"
            onClick={removeInfo}
          ></i>
        </ul>
      </section>
    </div>
  );
}

export default Info;
