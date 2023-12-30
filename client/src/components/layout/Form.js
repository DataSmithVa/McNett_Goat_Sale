// Dependancies
import React, { useContext, useState } from 'react';
import axios from 'axios';
import Alerts from './Alert';
import AlertContext from '../../context/alert/alertContext';

// Styles
import '../../styles/Form.scss';

// Assets

// Component Imports

// Component
const Form = () => {
  // Context
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

  // State
  const [formInfo, setFormInfo] = useState({
    lotNumber: '',
    bidderNumber: '',
    salePrice: '',
    isPaid: false,
  });

  const updateFormInfo = (e) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  // Functions

  // Submit Lot Sale to DataBase
  const formSubmit = (formData) => {
    // eslint-disable-next-line
    const {} = axios
      .post('/api/soldLot', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setAlert(response.data.msg, 'success', 'regular');
      })
      .catch((error) => {
        console.log(error.response.data.msg);
        setAlert(error.response.data.msg, 'danger', 'regular');
      });
  };

  // Utilities

  const { lotNumber, bidderNumber, salePrice, isPaid } = formInfo;

  const validateAndSubmit = (e) => {
    e.preventDefault();
    if (lotNumber === '') {
      setAlert('Please add a lot number', 'danger', 'regular');
    } else if (bidderNumber === '') {
      setAlert('Please add the bidder number', 'danger', 'regular');
    } else if (salePrice === '') {
      setAlert('Please add the sale price', 'danger', 'regular');
    } else if (isPaid === true) {
      setAlert('isPaid should be false', 'danger', 'regular');
    } else {
      formSubmit(formInfo);
    }
  };

  return (
    <div>
      <Alerts />
      <h2 className='form-header'>
        Please submit all new lot sales in the form below.
      </h2>
      <form className='lot-sale-form'>
        <div className='input-container'>
          <h3 className='input-header'>Lot Number</h3>
          <input
            onChange={updateFormInfo}
            className='form-inputs lot-number-form'
            type='text'
            name='lotNumber'
            id='lot-number'
          />
        </div>
        <div className='input-container'>
          <h3 className='input-header'>Bidder Number</h3>
          <input
            onChange={updateFormInfo}
            className='form-inputs bidder-number-form'
            type='text'
            name='bidderNumber'
            id='bidder-number'
          />
        </div>
        <div className='input-container'>
          <h3 className='input-header'>Sale Price</h3>
          <input
            onChange={updateFormInfo}
            className='form-inputs sale-price-form'
            type='text'
            name='salePrice'
            id='sale-price'
            placeholder='$0.00'
          />
        </div>
        <div className='btn-container'>
          <input
            onClick={validateAndSubmit}
            className='form-submit-btn'
            type='button'
            value='Submit'
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
