// Dependancies
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Styles
import '../../styles/EditForm.scss';

// Assets
import xMark from '../../assets/icons/x-mark.svg';

// Component
const EditForm = (props) => {
  console.log(props);

  // State
  const [lotUpdates, setLotUpdates] = useState();

  // Updates state changes
  const updateFormInfo = (e) => {
    setLotUpdates({ ...lotUpdates, [e.target.name]: e.target.value });
  };

  // useEffect
  //   useEffect(() => {
  //     const spreadState = () => {
  //       setLotUpdates({ ...props.data });
  //     };
  //     spreadState();
  //     console.log(lotUpdates);
  //   }, []);

  // Functions

  // Close Modal
  const modalClose = () => {
    const modal = document.getElementById('put-modal');
    modal.close();
  };

  // Update lot sale // PUT Method
  const formSubmit = (formData) => {
    console.log(props.data._id);
    const {} = axios
      .put(`/api/soldLot/${props._id}`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // Utilities
  const validateAndSubmit = (e) => {
    // e.preventDefault();
    formSubmit(lotUpdates);
    modalClose();
  };

  return (
    <dialog id='put-modal'>
      <img
        src={xMark}
        alt='close button logo'
        className='close-btn'
        onClick={modalClose}
      />
      <form className='put-modal-form'>
        <h5>{props.data._id}</h5>
        <div className='input-container'>
          <h5 className='input-header'>Lot Number</h5>
          <h3 className='input-data'>{props.data.lotNumber}</h3>
        </div>
        <div className='input-container'>
          <h5 className='input-header'>Bidder Number</h5>
          <h4 className='input-data'>{props.data.bidderNumber}</h4>
        </div>
        <div className='input-container'>
          <h5 className='input-header'>Sale Price</h5>
          <input
            onChange={updateFormInfo}
            type='text'
            name='salePrice'
            id='sale-price'
            className='form-inputs'
          />
        </div>
        <div className='input-container'>
          <h5 className='input-header'>Payment Status</h5>
          <div className='checkbox-container'>
            <label htmlFor='unpaid'>
              <input
                onChange={updateFormInfo}
                type='checkbox'
                name='isPaid'
                id='unpaid'
                value='false'
                className='form-inputs'
              />
              Unpaid
            </label>
            <label htmlFor='paid'>
              <input
                onChange={updateFormInfo}
                type='checkbox'
                name='isPaid'
                id='paid'
                value='true'
                className='form-inputs'
              />
              Paid
            </label>
          </div>
        </div>
        <div className='btn-container'>
          <input
            type='button'
            value='Submit'
            className='form-submit-btn'
            onClick={validateAndSubmit}
          />
        </div>
      </form>
    </dialog>
  );
};

export default EditForm;
