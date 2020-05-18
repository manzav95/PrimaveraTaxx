import React from "react";
import { Helmet } from "react-helmet";
import "./style.css";

function Contact() {
  return (
    <div className="contact-wrapper-main">
      <Helmet>
        <title>Contact Us | Primavera Taxx</title>
      </Helmet>

      <div className="main-contact">
        <h3>Hours:</h3>
        <div className="hours">
          <div className="season-hours">
            <h5>During Tax Season</h5>

            <p>Sunday: Closed</p>
            <p>Monday: 8:00 am – 7:00 pm</p>
            <p>Tuesday: 8:00 am – 7:00 pm</p>
            <p>Wednesday: 9:00 am – 6:00 pm</p>
            <p>Thursday: 8:00 am – 7:00 pm</p>
            <p>Friday: 8:00 am – 7:00 pm</p>
            <p>Saturday: 9:00 am – 6:00 pm</p>
          </div>
          <div className="normal-hours">
            <h5>Regular Hours</h5>

            <p>Sunday: Closed</p>
            <p>Monday: 8:00 am – 7:00 pm</p>
            <p>Tuesday: 8:00 am – 7:00 pm</p>
            <p>Wednesday: 9:00 am – 6:00 pm</p>
            <p>Thursday: 8:00 am – 7:00 pm</p>
            <p>Friday: 8:00 am – 7:00 pm</p>
            <p>Saturday: 9:00 am – 6:00 pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
