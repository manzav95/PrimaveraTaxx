import React from 'react';
import { Helmet } from 'react-helmet';
import './style.css';

function myNavFunc(e) {
  // If it's an iPhone..
  e.preventDefault();
  if (
    navigator.platform.indexOf('iPhone') !== -1 ||
    navigator.platform.indexOf('iPod') !== -1 ||
    navigator.platform.indexOf('iPad') !== -1
  )
    window.open('http://maps.apple.com/?q=Primavera+Taxx,+Antioch+CA');
  //Any
  else window.open('http://maps.google.com/?q=Primavera+Taxx,+Antioch+CA');
}

function Contact() {
  return (
    <div className='contact-wrapper-main'>
      <Helmet>
        <title>Contact Us | Primavera Taxx</title>
      </Helmet>
      <div className='service-hours'>
        <div className='hours'>
          {' '}
          <h3>Hours:</h3>
          <div className='hours-container'>
            <div className='season-hours'>
              <h5>Tax Season</h5>
              {/* Need to Edit and change hours to ACTUAL hours */}
              <p>Sunday: Closed</p>
              <p>Monday thru Friday: 9:00am – 7:00pm</p>
              <p>Saturday: 9:00am – 5:00pm</p>
            </div>
            <div className='normal-hours'>
              <h5>Regular</h5>
              <p>Sunday: Closed</p>
              <p>Monday - Friday: 9:00am – 3:00pm</p>
              <p>Saturday and Evenings: By Appointment Only</p>
            </div>
          </div>
        </div>
      </div>
      <div className='map-container'>
        <div className='address'>
          <h3>
            <span>Our</span> Address
          </h3>
          <a
            href='/#'
            target='_blank'
            rel='noopener noreferrer'
            onClick={myNavFunc}
          >
            <p>
              4369 Hillcrest Ave <br />
              Antioch, CA 94531
            </p>
          </a>

          <p>
            <a href='tel:19255501986'>
              <i className='fas fa-phone-alt'></i> (925) 550-1986
            </a>
          </p>
        </div>
        <div className='map'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d786.1946594573868!2d-121.76602617076182!3d37.982294998732634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808557cb5718b5fd%3A0xab0b70feffede59f!2sPrimavera%20Taxx!5e0!3m2!1sen!2sus!4v1590966218553!5m2!1sen!2sus'
            style={{ width: '100%', height: '100%' }}
            frameBorder='0'
            title='map'
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
