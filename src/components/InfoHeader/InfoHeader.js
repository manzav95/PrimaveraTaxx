import React from "react";
import "./style.css";
import SocialIcon from "react-social-icons";

function Info() {
  return (
    <div className="infoHeader">
      <section className="info-links">
        <ul className="list">
          <li>
            Call Us Now: <a href="tel:+19255501986 ">(925)550-1986 </a>
          </li>
          <li>
            Email Us:{" "}
            <a
              href="mailto:primaverataxx@gmail.com?Subject=Hello%20again"
              target="_blank"
              rel="noopener noreferrer"
            >
              primaverataxx@gmail.com
            </a>
          </li>
          <li>
            <a href="http://maps.google.com/maps?q=4369+Hillcrest+Ave,+Antioch,+CA+94565">
              4369 Hillcrest Ave, Antioch, CA, 94531
            </a>
          </li>
        </ul>
      </section>
      <section className="website-links">
        <ul className="site-links">
          <li>
            <SocialIcon
              url="https://www.facebook.com/Primavera-Taxx-310813666103767/?ref=br_rs"
              style={{ width: "20px" }}
            />
          </li>
          <li>
            <SocialIcon
              url="https://www.yelp.com/biz/primavera-taxx-antioch-2"
              style={{ width: "20px" }}
            />
          </li>
          <li>
            <SocialIcon
              url="https://www.linkedin.com/in/maria-luisa-hernandez-2abaa393/"
              style={{ width: "20px" }}
            />
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Info;
