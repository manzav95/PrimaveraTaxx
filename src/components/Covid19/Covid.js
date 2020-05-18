import React from "react";
import "./style.css";
// import SocialIcon from "react-social-icons";

const removeCovid = function () {
  let covidBar = document.querySelector(".covid-header");
  let closeCovid = document.getElementById("covid-button");

  covidBar.style.display = "none";
};

function Covid() {
  return (
    <div className="covid-header">
      <p>
        COVID-19 Response: We will be temporarily moving online until further
        notice. Please send in all documents electronically or fax documents and
        photos to (925)248-4166. Thank You.
      </p>
      <i
        className="fas fa-times info-x"
        id="covid-button"
        onClick={removeCovid}
      ></i>
    </div>
  );
}

export default Covid;
