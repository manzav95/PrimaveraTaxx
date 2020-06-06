import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const toggleMobileButton = function () {
  let burger = document.querySelector('.burger');
  let mobileMenu = document.querySelector('.mobile-menu');

  burger.classList.toggle('burger-opened');
  mobileMenu.classList.toggle('mobile-menu-opened');
};

function SideBar() {
  return (
    <div className='sidebar-wrapper'>
      <div class='mobile-menu' id='mobile-menu' onClick={toggleMobileButton}>
        <div class='menu-content'>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <p className='linklink link-right'>Home</p>
          </Link>
          <Link to='/about' style={{ textDecoration: 'none' }}>
            <p className='linklink link-left'>About</p>
          </Link>
          <Link to='/contact' style={{ textDecoration: 'none' }}>
            <p className='linklink link-right'>Contact</p>
          </Link>
          <Link to='/reviews' style={{ textDecoration: 'none' }}>
            <p className='linklink link-left'>Reviews</p>
          </Link>
        </div>
      </div>{' '}
    </div>
  );
}

export default SideBar;
