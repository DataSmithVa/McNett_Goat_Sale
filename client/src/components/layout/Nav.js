// Dependancies
import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import '../../styles/Nav.scss';

// Assets
import logo from '../../assets/images/McNettLogo.jpg';

const Nav = () => {
  return (
    <div>
      <div className='nav-container'>
        <Link to='/' className='nav-logo-container'>
          <img src={logo} className='nav-logo' alt='Logo' />
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/clerk' className='link'>
              Clerk
            </Link>
          </li>
          <li>
            <Link to='/cashier' className='link'>
              Cashier
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
