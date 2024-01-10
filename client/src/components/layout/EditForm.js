// Dependancies
import React, { useState, useContext } from 'react';
import axios from 'axios';
import AlertContext from '../../context/alert/alertContext';

// Styles
import '../../styles/EditForm.scss';

// Assets
import xMark from '../../assets/icons/x-mark.svg';

// Component
const EditForm = (props) => {
  // Context
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

  // State
  const [lotUpdates, setLotUpdates] = useState();

  // Updates state changes
  const updateFormInfo = (e) => {
    setLotUpdates({ ...lotUpdates, [e.target.name]: e.target.value });
  };

  // Functions

  // Close Modal
  const modalClose = () => {
    const modal = document.getElementsByName(`${props.data._id}`);
    modal[0].close();
  };

  // Update lot sale // PUT Method
  const formSubmit = (formData) => {
    const {} = axios
      .put(`/api/soldLot/${props.data._id}`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setAlert(
          `Lot number: ${res.data.lotNumber} has been updated`,
          'success',
          'regular'
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // Utilities
  const validateAndSubmit = () => {
    formSubmit(lotUpdates);
    modalClose();
  };

  return (
    <dialog id='put-modal' name={props.data._id}>
      <img
        src={xMark}
        alt='close button logo'
        className='close-btn'
        onClick={modalClose}
      />
      <form className='put-modal-form'>
        <div className='id-container'>
          <h6 className='id-header'>Lot Id:</h6>
          <h5 className='id-data'>{props.data._id}</h5>
        </div>
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
            <label htmlFor='unpaid' className='checkbox-label'>
              <input
                onChange={updateFormInfo}
                type='checkbox'
                name='isPaid'
                id='unpaid'
                value='false'
                className='form-inputs'
              />
              {' Unpaid'}
            </label>
            <label htmlFor='paid' className='checkbox-label'>
              <input
                onChange={updateFormInfo}
                type='checkbox'
                name='isPaid'
                id='paid'
                value='true'
                className='form-inputs'
              />
              {' Paid'}
            </label>
          </div>
        </div>
        <div className='input-container'>
          <h5 className='input-header'>Payment Method</h5>
          <div className='checkbox-container'>
            <label htmlFor='cash' className='checkbox-label'>
              <input
                onChange={updateFormInfo}
                type='checkbox'
                name='paymentMethod'
                id='cash'
                value='cash'
                className='form-inputs'
              />
              {' Cash'}
            </label>
            <label htmlFor='check' className='checkbox-label'>
              <input
                onChange={updateFormInfo}
                type='checkbox'
                name='paymentMethod'
                id='check'
                value='check'
                className='form-inputs'
              />
              {' Check'}
            </label>
            <label htmlFor='card' className='checkbox-label'>
              <input
                onChange={updateFormInfo}
                type='checkbox'
                name='paymentMethod'
                id='card'
                value='card'
                className='form-inputs'
              />
              {' Card'}
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
