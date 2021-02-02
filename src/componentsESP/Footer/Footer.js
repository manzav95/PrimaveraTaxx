import React from 'react';
import './style.css';

function Footer() {
  return (
    <div>
      <div className='footer-main'>
        <div className='footer'>
          <p className='contact-footer'>
            <a href='tel:+19255501986 '> (925) 550-1986 </a>|
            <a
              href='mailto:primaverataxx@gmail.com?Subject=Hello%20Again&body=Hello%20Primavera%20Taxx'
              target='_blank'
              rel='noopener noreferrer'
            >
              primaverataxx@gmail.com
            </a>
          </p>
          <p>
            <a href='privacy.html' target='_blank'>
              Privacy Policy
            </a>
          </p>
          <p>&copy; 2019 PrimaveraTaxx.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
