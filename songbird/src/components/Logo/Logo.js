import React from 'react';

import './Logo.css';
import logo from '../../image/logo.jpg';

function Logo() {
  return (
    <img src={logo} className="logo" alt="logo"/>
  );
}

export default Logo;
