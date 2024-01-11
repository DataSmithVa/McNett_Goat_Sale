import React from 'react';

// Styles
import '../../styles/ListItems.scss';

// Assets
import edit from '../../assets/icons/pencil-alt.svg';
import trash from '../../assets/icons/trash-alt.svg';

// Component Imports
import EditForm from './EditForm';
import DeleteForm from './DeleteForm';

// Component
const ListItem = (props) => {
  // State

  // Functions

  // Open the edit modal for PUT Method
  const openEditModal = () => {
    const modalId = document.getElementsByName(`${props.data._id}`);
    modalId[0].showModal();
  };

  // Open the delete modal for DELETE Method
  const openDeleteModal = () => {
    const modalId = document.getElementsByName(`${props.data.lotNumber}`);
    modalId[0].showModal();
  };

  // Utilities
  const {
    lotNumber,
    bidderNumber,
    salePrice,
    isPaid,
    paymentMethod,
    saleNotes,
    date,
  } = props.data;

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
          <h3 className={'is-paid-data'} id='is-paid-data'>
            {paymentStatus}
          </h3>
        </div>
        <div className='payment-method-container'>
          <h5 className='payment-method-label'>Payment Method:</h5>
          <h3 className='payment-method-data' id='payment-method-data'>
            {paymentMethod}
          </h3>
        </div>
      </div>
      <div className='lot-sale-notes-container'>
        <label htmlFor='lot-sale-notes' className='lot-sale-notes-header'>
          Sale Notes:
        </label>
        <textarea
          name='saleNotes'
          id='lot-sale-notes'
          rows='3'
          className='lot-sale-notes-data'
          readOnly
        >
          {saleNotes}
        </textarea>
      </div>
      <div className='lot-sale-edit-container'>
        <h6 className='date-label'>{date}</h6>
        <img
          src={edit}
          alt='edit icon'
          className='edit-btn'
          onClick={openEditModal}
        />
        <img
          src={trash}
          alt='delete icon'
          className='delete-btn'
          onClick={openDeleteModal}
        />
      </div>
      <hr className='lot-sale-hr' />
      <EditForm data={props.data} key={props.data._id} />
      <DeleteForm data={props.data} key={props.data.lotNumber} />
    </div>
  );
};

export default ListItem;
