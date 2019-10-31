import React from 'react';
import './../styles/Header.css';

function Header() {
  return (
    <div>
      <span className='logo-style'>LOGO</span>
      <span className='nav-bar'>
          <label className='nav-item'>HOME</label>
          <label className='nav-item'>SERVICES</label>
          <label className='nav-item'>ABOUT</label>
          <label className='nav-item'>OTHER PAGES</label>
          <label className='nav-item'>PRICING</label>
          <label className='nav-item'>BLOG</label>
          <label className='nav-item'>CONTACT</label>
      </span>
    </div>
  );
}

export default Header;
