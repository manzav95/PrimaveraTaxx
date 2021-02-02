import React, { Component } from 'react';
import './style.css';

const closePopup = function () {
  let popupWindow = document.querySelector('.popup-wrapper');
  let body = document.querySelector('body');

  popupWindow.style.position = 'absolute';
  popupWindow.style.visibility = 'hidden';

  popupWindow.style.animation = 'fadeOut 1s forwards';

  body.style.overflow = 'auto';
};

export default class Popup extends Component {
  render() {
    return (
      <div id='popup'>
        <section className='popup-wrapper' onClick={closePopup}>
          <section className='main-popup'>
            <div className='close-section'>
              <i
                className='fas fa-times'
                id='popup-button'
                onClick={closePopup}
              ></i>
            </div>

            <header>
              <h1>COVID-19 Update</h1>
            </header>
            <div className='body-message'>
              <p>
                COVID-19- Your health and safety is our priority. We continue to
                prepare your tax returns but we are avoiding physical contact.
                We have several options so that you can send us your documents
                in a reliable and secure way.
              </p>
              <p>
                1- You can download the{' '}
                <a
                  className='italics'
                  id='taxpass-link'
                  href='https://apps.apple.com/us/app/taxpass/id1256036789'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='Tax Pass'
                >
                  TaxPass
                </a>{' '}
                application and Register using the code{' '}
                <span className='italics'> 'G4MLBWLV'</span> to get access to
                Primavera Taxx. (Make sure you see the name 'Primavera Taxx')
                The information you input will go straight into your file and
                the process of your return will be almost automatically.
              </p>
              <p>
                2-You can fax your documents over to us at{' '}
                <span className='italics' id='fax-number'>
                  (855) 751-5543
                </span>
                . We will start working on your tax return in the order we
                recieve them.
              </p>
              <p>
                3-You can also stop by the office to drop off documents in an
                envelope or bag and we'll give you a call back once your
                documents are ready to be signed. (Please keep in mind, we will
                allow <span className='italics'>24-72</span> hours to pass
                before handling any documents to be safe and preventing the
                spread of COVID-19)
              </p>
              <p>
                For any questions or concerns, feel free to contact us through
                text at
                <a href='sms:+19252484166' className='italics'>
                  {' '}
                  (925) 248-4166{' '}
                </a>
                or by phone at
                <a href='tel:+19255501986' className='italics'>
                  {' '}
                  (925) 550-1986{' '}
                </a>
                .
              </p>
            </div>
          </section>
        </section>
      </div>
    );
  }
}
