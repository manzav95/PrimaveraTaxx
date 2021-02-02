import React from "react";
import "./style.css";
// import SocialIcon from "react-social-icons";

const removeCovid = function () {
  let covidBar = document.querySelector(".covid-header");

  setTimeout(function () {
    covidBar.classList.add("animation-class");
  }, 300);

  covidBar.style.visibility = "hidden";
  covidBar.style.position = "absolute";
  covidBar.style.top = "-50px";
  covidBar.style.animation = "fadeOut .4s forwards";
};

function Covid() {
  return (
    <div className="covid-header">
      <p>
        <span>COVID-19 Response:</span> We will be temporarily moving online
        until further notice. Please send in all documents electronically or fax
        documents and photos to (925) 248-4166. Thank You.
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
