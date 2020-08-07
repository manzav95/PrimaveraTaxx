import React from 'react';
import { Helmet } from 'react-helmet';
import PageHeader from '../../components/PageHeader/PageHeader';
import './style.css';

function About(props) {
  return (
    <div className='about-wrapper'>
      <Helmet>
        <title>Contact Us | Primavera Taxx</title>
      </Helmet>

      <div className='main-about'>
        <div className='address'>
          <h1>About Us</h1>
          <p>
            Primavera Taxx was founded on the fundamental basis that our clients
            deserve to be treated as family and not just another tax filing
            process. We're here to provide the TAX HELP you deserve and ensure
            you a friendly and secure environment were you can leave feeling
            relieved from any TAX related event.
          </p>
          <div className='background-img-about'></div>
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

      {/* <PageHeader title='About Us' styling='about' />
      <section className='about-info'>
        <p>
          Primavera Taxx was founded on the fundamental basis that our clients
          deserve to be treated as family and not just another tax filing
          process. We're here to provide the TAX HELP you deserve and ensure you
          a friendly and secure environment were you can leave feeling relieved
          from any TAX related event.
        </p>
      </section> */}
    </div>
  );
}

export default About;
