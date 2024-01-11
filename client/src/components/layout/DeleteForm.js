// Dependancies
import React, { useState, useContext } from 'react';
import axios from 'axios';
import AlertContext from '../../context/alert/alertContext';

// Styles
import '../../styles/DeleteForm.scss';

// Component
const DeleteForm = (props) => {
  // Context
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

  // Functions
  const deleteSubmit = () => {
    const {} = axios
      .delete(`/api/soldLot/${props.data._id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
    // const modal = document.getElementsByName(`${props.data.lotNumber}`);
    // modal[0].close();
  };

  // Close Modal
  const modalClose = () => {
    const modal = document.getElementsByName(`${props.data.lotNumber}`);
    modal[0].close();
  };

  return (
    <dialog id='delete-modal' name={props.data.lotNumber}>
      <div className='delete-modal-container'>
        <h2 className='delete-modal-data'>
          Lot Number: {props.data.lotNumber}
        </h2>
        <h3 className='delete-modal-header'>
          Are you sure you want to delete this lot sale?
        </h3>
        <div className='btn-container'>
          <input
            type='button'
            value='No'
            className='delete-btn-no'
            onClick={modalClose}
          />
          <input
            type='button'
            value='Yes'
            className='delete-btn-yes'
            onClick={deleteSubmit}
          />
        </div>
      </div>
    </dialog>
  );
};

export default DeleteForm;
