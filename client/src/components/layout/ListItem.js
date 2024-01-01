import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Styles
import '../../styles/ListItems.scss';

// Assets
import edit from '../../assets/icons/pencil-alt.svg';

// Component Imports
import EditForm from './EditForm';

// Component
const ListItem = (props) => {
  // State

  // Functions

  // Open the edit modal for PUT method
  const openEditModal = () => {
    const modal = document.getElementById('put-modal');
    modal.showModal();
  };

  // Utilities
  const { lotNumber, bidderNumber, salePrice, isPaid, date } = props.data;

  let paymentStatus;
  if (isPaid != false) {
    paymentStatus = 'Paid';
  } else {
    paymentStatus = 'Unpaid';
  }

  return (
    <div className='lot-sale-container'>
      <div className='lot-sale-info-container'>
        <div className='lot-number-container'>
          <h5 className='lot-number-label'>Lot Number</h5>
          <h3 className='lot-number-data'>{lotNumber}</h3>
        </div>
        <div className='bidder-number-container'>
          <h5 className='bidder-number-label'>Bidder Number</h5>
          <h3 className='bidder-number-data'>{bidderNumber}</h3>
        </div>
        <div className='sale-price-container'>
          <h5 className='sale-price-label'>Sale Price</h5>
          <h3 className='sale-price-data'>{salePrice}</h3>
        </div>
        <div className='is-paid-container'>
          <h5 className='is-paid-label'>Payment Status:</h5>
          <h3 className='is-paid-data' id='is-paid-data'>
            {paymentStatus}
          </h3>
        </div>
      </div>
      <div className='lot-sale-edit-container'>
        <h6 className='date-label'>{date}</h6>
        <img
          src={edit}
          alt='edit icon'
          className='edit-btn'
          onClick={openEditModal}
        />
      </div>
      <hr className='lot-sale-hr' />
      <EditForm data={props.data} />
    </div>
  );
};

export default ListItem;
