import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';

const toggleMobileButton = function () {
  let burger = document.querySelector('.burger');
  let mobileMenu = document.querySelector('.mobile-menu');
  let body = document.querySelector('body');

  burger.classList.toggle('burger-opened');
  mobileMenu.classList.toggle('mobile-menu-opened');
  body.classList.toggle('body-no-scroll');
};

const VanillaNav = () => {
  return (
    <nav className='vanil-nav box-shadow'>
      <section className='nav-wrapper'>
        <section className='nav-section'>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <h1 className='title-name'>
              {/* <img src={logo} alt="" style={{ width: "70px" }} /> */}
              <span id='word-primavera'>Primavera</span> Taxx
            </h1>
          </Link>

          <ul className='nav-links'>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <li className='linklink' id='home'>
                Home
              </li>
            </Link>
            <Link to='/about' style={{ textDecoration: 'none' }}>
              <li className='linklink' id='about'>
                About
              </li>
            </Link>
            <Link to='/contact' style={{ textDecoration: 'none' }}>
              <li className='linklink' id='contact'>
                Contact
              </li>
            </Link>

            <li className='dropdown linklink dropbtn'>
              Resources
              <div className='dropdown-content'>
                <a href='https://www.irs.gov/payments'>Pay IRS</a>
                <a href='https://covid19.ca.gov/search/?q=taxes#gsc.tab=0&gsc.q=taxes&gsc.page=1'>
                  COVID Tax Info
                </a>
                <a href='https://www.irs.gov/payments'>Link 3</a>
              </div>
            </li>
          </ul>
          <div className='burger' id='burger' onClick={toggleMobileButton}>
            <div className='burger-part'></div>
            <div className='burger-part'></div>
            <div className='burger-part'></div>
          </div>
          <SideBar />
        </section>
        <section className='login-container'>
          <ul className='login-links'>
            <li className='linklinks login'>
              <a
                className='login-link'
                href='https://login.atomanager.com/ATOM_PRI/webinfodefault.aspx'
                target='_blank'
                rel='noopener noreferrer'
                title='Existing Clients'
              >
                Login
              </a>
            </li>
            <h4 id='line-divide'>|</h4>
            <li className='linklinks signup'>
              <a
                className='login-link'
                href='https://login.atomanager.com/ATOM_PRI/default.aspx?redirect=ProspectMessage.aspx'
                target='_blank'
                rel='noopener noreferrer'
                title='New Clients'
              >
                Sign Up
              </a>
            </li>
          </ul>
        </section>
      </section>
    </nav>
  );
};

export default VanillaNav;
