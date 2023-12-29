// Dependancies
import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import '../../styles/Routes.scss';

// Assets
import clerk from '../../assets/icons/gavel.svg';
import cashier from '../../assets/icons/hand-holding-usd.svg';

// Component Imports

// Component
const Routes = () => {
  return (
    <div>
      <div className='routes-container'>
        <h1 className='routes-header'>Which are you?</h1>
        <Link to='/clerk' className='route'>
          <img src={clerk} alt='Clerk Icon' className='route-icon' />
          <h2 className='route-text'>Clerk</h2>
        </Link>
        <Link to='/cashier' className='route'>
          <img src={cashier} alt='Cashier Icon' className='route-icon' />
          <h2 className='route-text'>Cashier</h2>
        </Link>
      </div>
    </div>
  );
};

export default Routes;
