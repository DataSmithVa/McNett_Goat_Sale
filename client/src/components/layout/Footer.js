import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import '../../styles/Footer.scss';

// Assets
import logo from '../../assets/images/Goat_Illustration.png';

// Component Imports

// Component
const Footer = () => {
  return (
    <div>
      <div className='footer-container'>
        <Link to='/'>
          <img src={logo} alt='Footer Logo' className='footer-logo' />
        </Link>
        <div className='footer-text-container'>
          <h3 className='footer-text-header'>McNett Farms Goat Sale</h3>
          <h5 className='footer-text'>2023</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
