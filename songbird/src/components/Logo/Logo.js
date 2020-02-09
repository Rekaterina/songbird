import React from 'react';

import './Logo.css';
import logo from '../../image/logo.jpg';

const Logo = () => {
  return (
    <img src={logo} className="logo" alt="logo"/>
  );
}

export default Logo;
