import React from 'react';
import { Helmet } from 'react-helmet';
import './style.css';
import maria from '../../images/maria-ea.png';
import juan from '../../images/juanjose.jpeg'
import profileimg from '../../images/profile.jpg';

function About() {
  return (
    <div className='about-wrapper-main'>
      <Helmet>
        <title>About | Primavera Taxx</title>
      </Helmet>
      <div className='about-us-wrapper'>
        <div className='about'>
          <h1>About Us</h1>{' '}
          <p>
            Primavera Taxx was founded on the fundamental basis that our clients
            deserve to be treated as family and not just another tax filing
            process. We're here to provide the tax help you deserve and ensure
            you a friendly and secure environment were you can leave feeling
            relieved from any tax related event.
          </p>
        </div>

        <div className='abou card-wrapper'>
          <ProfileCard
            img={maria}
            title='Founder/ Enrolled Agent'
          />
          <ProfileCard img={juan} name='Juan Jose Hernandez' />
          <ProfileCard name='Teresa Sosa' />
          <ProfileCard name='Laura Estrada' title='Secretary' />
        </div>
      </div>
      <div className='review-container'>
        <div className='elfsight-app-b5b4cfbc-3455-44be-9d87-55f596917ca2'></div>
      </div>
    </div>
  );
}

function ProfileCard(props) {
  return (
    <div className='card'>
      <img src={props.img || profileimg } alt='Avatar' />
      <div className='card-container'>
        <h4>
          <b>{props.name || 'Maria L. Hernandez'}</b>
        </h4>
        <p>{props.title || 'Tax Preparer'}</p>
      </div>
    </div>
  );
}
export default About;
