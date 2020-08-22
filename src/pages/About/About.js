import React from 'react';
import { Helmet } from 'react-helmet';
import PageHeader from '../../components/PageHeader/PageHeader';
import './style.css';

function About(props) {
  return (
    <div className='about-wrapper-main'>
      <Helmet>
        <title>Contact Us | Primavera Taxx</title>
      </Helmet>
      <div className='about-us-wrapper'>
        <div className='about'>
          <h1>About Us</h1>{' '}
          <p>
            Primavera Taxx was founded on the fundamental basis that our clients
            deserve to be treated as family and not just another tax filing
            process. We're here to provide the TAX HELP you deserve and ensure
            you a friendly and secure environment were you can leave feeling
            relieved from any TAX related event.
          </p>
        </div>
      </div>
      <div className='review-container'>
        <div class='elfsight-app-b5b4cfbc-3455-44be-9d87-55f596917ca2'></div>
      </div>
    </div>
  );
}
// <div className='about-wrapper'>
//   <Helmet>
//     <title>Contact Us | Primavera Taxx</title>
//   </Helmet>

//   <div className='main-about'>
//     <div className='about-info'>
//       <h1>About Us</h1>
      // <p>
      //   Primavera Taxx was founded on the fundamental basis that our clients
      //   deserve to be treated as family and not just another tax filing
      //   process. We're here to provide the TAX HELP you deserve and ensure
      //   you a friendly and secure environment were you can leave feeling
      //   relieved from any TAX related event.
      // </p>
//       <div className='background-img-about'></div>
//     </div>
//   </div>
// </div>
export default About;
