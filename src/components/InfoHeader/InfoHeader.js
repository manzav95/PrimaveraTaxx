import React from "react";
import "./style.css";

function Info() {
  return (
    <div className="infoHeader">
      <ul className="list">
        <li>
          <h4>
            Call Us Now: <a href="tel:+19255501986 ">(925)550-1986 </a>
          </h4>
        </li>
        <li>
          <h4>
            Email Us:{" "}
            <a
              href="mailto:primaverataxx@gmail.com?Subject=Hello%20again"
              target="_blank"
              rel="noopener noreferrer"
            >
              primaverataxx@gmail.com
            </a>
          </h4>
        </li>
        <li>
          <h4>
            <a href="http://maps.google.com/maps?q=4369+Hillcrest+Ave,+Antioch,+CA+94565">
              4369 Hillcrest Ave, Antioch, CA, 94531
            </a>
          </h4>
        </li>
      </ul>
    </div>
  );
}

export default Info;
