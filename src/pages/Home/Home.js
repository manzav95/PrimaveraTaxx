import React from 'react';
import { Helmet } from 'react-helmet';
import './style.css';
import enrolled from '../../images/enrolled.jpg';
import irs from '../../images/irs.jpg';
import nna from '../../images/nna.jpg';
import csea from '../../images/csea.jpg';

function Home() {
  return (
    <div className='home-wrapper-main'>
      <Helmet>
        <title>Antioch, CA | Primavera Taxx</title>
      </Helmet>

      {/* <Popup /> */}
      <section className='home-landing'>
        {' '}
        <div className='landing-overlay'></div>
        <section className='landing-wrapper'>
          <section className='landing-main-text'>
            <h1 className='landing-header'>It's More Than Just Taxes</h1>
            {/* <p className="landing-header">We Take It Personal.</p> */}
            {/* <p className="info">
              <span className="get-started">Contact Us</span> to setup an
              appointment today!
            </p> */}
            <p className='info'>
              Maximized Tax Returns, Done Right The First Time
            </p>
            <a
              id='start-btn'
              href='https://login.atomanager.com/ATOM_PRI/default.aspx?redirect=ProspectMessage.aspx'
              target='_blank'
              rel='noopener noreferrer'
            >
              Get Started
            </a>
          </section>
        </section>
      </section>
      <section className='icons-wrapper'>
        <div className='roll-image'>
          <img src={irs} width='100px' alt='irs provider' />
        </div>
        <div className='roll-image enrolled'>
          <img src={enrolled} width='230px' alt='enrolled agent' />
        </div>
        <div className='roll-image'>
          <img
            src={csea}
            width='150px'
            alt='california society of enrolled agents'
          />
        </div>
        <div className='roll-image nna'>
          <img src={nna} width='200px' alt='national notary association' />
        </div>
      </section>

      <div className='services-section'>
        <div className='services-info'>
          {/* <h2>
            Primavera will always ask the right questions to ensure you get
            every deduction and credit you deserve.
          </h2> */}
          {/* <h2>
            Whether you have a business, or simply want to file with your W-2,
            Primavera Taxx is here to help you with all your tax questions.
          </h2> */}
          <h2>It's Your Money, Take Charge.</h2>
          <p>
            Here at Primavera Taxx, we pride ourselves in being able to break
            down the tax process. You will always know where money is going. Our
            tax preparers will walk you step by step through every deduction and
            credit you deserve.
          </p>
          <p>
            Our wide range of services makes Primavera Taxx the obvious choice.
            Whether you need a skilled bookkeeper, notary public, or simply a
            little advice, just give us a call and we'll take care of you.
          </p>

          {/* <p>
            We are more than happy to let our tax experts tackle any tax related
            events that you may be undergoing. Ensure your family and
            businesse’s fiscal responsibilites are being met by selecting a
            service today. An Enrolled Agent (EA) is a federally-authorized tax
            practitioner who has technical expertise in the field of taxation.
            The EA license is maintained by stringent annual continuing
            education requirements monitored by the IRS.
          </p> */}
        </div>

        <div className='offered-services'>
          <h2>Services Offered</h2>
          <div className='service top'>
            <i className='fas fa-book-open'></i>
            <p>Bookkeeping</p>
          </div>
          <div className='service top'>
            <i className='fas fa-money-check-alt'></i>
            <p>Payroll Services</p>
          </div>
          <div className='service'>
            <i className='fas fa-business-time'></i>
            <p>Business Tax Return</p>
          </div>
          <div className='service'>
            <i className='fas fa-user-clock'></i>
            <p>Individual Tax Return</p>
          </div>
          <div className='bottom service'>
            <i className='fas fa-id-card'></i>
            <p>ITIN Services</p>
          </div>
          <div className='service bottom'>
            <i className='fas fa-file-signature'></i>
            <p>Notary Public</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
