import React from 'react';
import { Helmet } from 'react-helmet';
import './style.css';

function Contact() {
  return (
    <div className='contact-wrapper-main'>
      <Helmet>
        <title>Contact Us | Primavera Taxx</title>
      </Helmet>
      <div className='service-hours'>
        <h3>Hours:</h3>

        <div className='hours'>
          <div className='season-hours'>
            <h5>During Tax Season</h5>

            <p>Sunday: Closed</p>
            <p>Monday: 8:00 am – 7:00 pm</p>
            <p>Tuesday: 8:00 am – 7:00 pm</p>
            <p>Wednesday: 9:00 am – 6:00 pm</p>
            <p>Thursday: 8:00 am – 7:00 pm</p>
            <p>Friday: 8:00 am – 7:00 pm</p>
            <p>Saturday: 9:00 am – 6:00 pm</p>
          </div>
          <div className='normal-hours'>
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
      <div className='main-contact'>
        <div className='address'>
          <h3>
            <span>Our</span> Address
          </h3>
          <p>4369 Hillcrest Ave</p>
          <p>Antioch, CA 94531</p>
          <p>
            <a href='tel:19255501986'>
              <i className='fas fa-phone-alt'></i> (925) 550-1986
            </a>
          </p>
        </div>
        <div className='map'>
          {/* <MapContainer /> */}

          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d786.1946594573868!2d-121.76602617076182!3d37.982294998732634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808557cb5718b5fd%3A0xab0b70feffede59f!2sPrimavera%20Taxx!5e0!3m2!1sen!2sus!4v1590966218553!5m2!1sen!2sus'
            style={{ width: '100%', height: '100%' }}
            frameBorder='0'
          ></iframe>
        </div>
      </div>
      {/* <div className="main-contact">
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
      </div> */}
    </div>
  );
}

export default Contact;
