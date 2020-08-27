import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const toggleMobileButton = function () {
  let burger = document.querySelector('.burger');
  let mobileMenu = document.querySelector('.mobile-menu');
  let body = document.querySelector('body');

  burger.classList.toggle('burger-opened');
  mobileMenu.classList.toggle('mobile-menu-opened');
  body.classList.toggle('body-no-scroll');
};

function SideBar() {
  return (
    <div className='sidebar-wrapper'>
      <div
        className='mobile-menu'
        id='mobile-menu'
        onClick={toggleMobileButton}
      >
        <div className='menu-content'>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <p className='linklink link-right'>Home</p>
          </Link>
          <Link to='/about' style={{ textDecoration: 'none' }}>
            <p className='linklink link-left'>About</p>
          </Link>
          <Link to='/contact' style={{ textDecoration: 'none' }}>
            <p className='linklink link-right'>Contact</p>
          </Link>
        </div>
      </div>{' '}
    </div>
  );
}

export default SideBar;
