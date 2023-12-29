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
      <Link to='/' className='nav-container'>
        <img src={logo} className='nav-logo' alt='Logo' />
      </Link>
    </div>
  );
};

export default Nav;
