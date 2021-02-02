import React from 'react';
import './style.css';
// import SocialIcon from "react-social-icons";

const removeCovid = function () {
  let covidBar = document.querySelector('.covid-header');

  setTimeout(function () {
    covidBar.classList.add('animation-class');
  }, 300);

  covidBar.style.visibility = 'hidden';
  covidBar.style.position = 'absolute';
  covidBar.style.top = '-50px';
  covidBar.style.animation = 'fadeOut .4s forwards';
};

function Covid() {
  return (
    <div className='covid-header'>
      <p>
        <span>COVID-19 Response:</span> Due to the global pandemic, our team has
        quickly adapted to a new style of tax preparing. We now offer various
        options when it comes to filing with us in order to minimize close
        contact. <a href='/'>Learn More</a>
      </p>
      <i
        className='fas fa-times info-x'
        id='covid-button'
        onClick={removeCovid}
      ></i>
    </div>
  );
}

export default Covid;
