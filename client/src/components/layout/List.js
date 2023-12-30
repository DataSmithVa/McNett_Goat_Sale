// Dependancies
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import Alerts from './Alert';
import AlertContext from '../../context/alert/alertContext';

// Styles
import '../../styles/List.scss';

// Assets
import refresh from '../../assets/icons/refresh.svg';
import trash from '../../assets/icons/trash-alt.svg';
import edit from '../../assets/icons/pencil-alt.svg';

// Component Imports

// Component
const List = () => {
  // Context
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

  // State

  // Functions

  // Update a lot sale
  const updateLotSale = () => {
    console.log('update lot sale');
  };

  // Delete a lot sale
  const deleteLotSale = () => {
    console.log('delete lot sale.');
  };

  // Get Lot Sales and create list items with fatched data
  const getLotSales = () => {
    axios
      .get('/api/soldLot')
      .then((response) => {
        // Remove all previously loaded lot sales
        const list = document.getElementById('list-container');
        while (list.firstChild) {
          list.removeChild(list.lastChild);
        }
        // Assign response data to variable
        let lotSaleData = response.data;
        // Unhide list container
        document.getElementById('list-container').style.display = 'block';
        // Loop through response array to create lot sale list items
        lotSaleData.forEach((lotSale) => {
          // Create container div, assign className and append
          const lotSaleContainer = document.createElement('div');
          const lotSaleContainerAttr = document.createAttribute('className');
          lotSaleContainerAttr.value = 'lot-sale-container';
          lotSaleContainer.setAttributeNode(lotSaleContainerAttr);
          document
            .getElementById('list-container')
            .appendChild(lotSaleContainer);
          // Create info container div, assign className and append
          const lotSaleInfoContainer = document.createElement('div');
          const lotSaleInfoContainerAttr =
            document.createAttribute('className');
          lotSaleInfoContainerAttr.value = 'lot-sale-info-container';
          lotSaleInfoContainer.setAttributeNode(lotSaleInfoContainerAttr);
          lotSaleContainer.appendChild(lotSaleInfoContainer);
          // Create lot number label, assign className and append
          const lotNumberLabel = document.createElement('h5');
          const lotNumberAttr = document.createAttribute('className');
          lotNumberAttr.value = 'lot-number-label';
          lotNumberLabel.setAttributeNode(lotNumberAttr);
          lotNumberLabel.innerHTML = 'Lot Number';
          lotSaleInfoContainer.appendChild(lotNumberLabel);
          // Create lot number data, assign className and append
          const lotNumberData = document.createElement('h3');
          const lotNumberDataAttr = document.createAttribute('className');
          lotNumberDataAttr.value = 'lot-number-data';
          lotNumberData.setAttributeNode(lotNumberDataAttr);
          lotNumberData.innerHTML = lotSale.lotNumber;
          lotSaleInfoContainer.appendChild(lotNumberData);
          // Create bidder number label, assign className and append
          const bidderNumberLabel = document.createElement('h5');
          const bidderNumberAttr = document.createAttribute('className');
          bidderNumberAttr.value = 'bidder-number-label';
          bidderNumberLabel.setAttributeNode(bidderNumberAttr);
          bidderNumberLabel.innerHTML = 'Bidder Number';
          lotSaleInfoContainer.appendChild(bidderNumberLabel);
          // Create bidder number data, assign className and append
          const bidderNumberData = document.createElement('h3');
          const bidderNumberDataAttr = document.createAttribute('className');
          bidderNumberDataAttr.value = 'bidder-number-data';
          bidderNumberData.setAttributeNode(bidderNumberDataAttr);
          bidderNumberData.innerHTML = lotSale.bidderNumber;
          lotSaleInfoContainer.appendChild(bidderNumberData);
          // Create lot sale price label, assign className and append
          const salePriceLabel = document.createElement('h5');
          const salePriceAttr = document.createAttribute('className');
          salePriceAttr.value = 'sale-price-label';
          salePriceLabel.setAttributeNode(salePriceAttr);
          salePriceLabel.innerHTML = 'Sale Price';
          lotSaleInfoContainer.appendChild(salePriceLabel);
          // Create bidder number data, assign className and append
          const salePriceData = document.createElement('h3');
          const salePriceDataAttr = document.createAttribute('className');
          salePriceDataAttr.value = 'sale-price-data';
          salePriceData.setAttributeNode(salePriceDataAttr);
          salePriceData.innerHTML = lotSale.salePrice;
          lotSaleInfoContainer.appendChild(salePriceData);
          // Create payment status label, assign className and append
          const isPaidLabel = document.createElement('h5');
          const isPaidAttr = document.createAttribute('className');
          isPaidAttr.value = 'is-paid-label';
          isPaidLabel.setAttributeNode(isPaidAttr);
          isPaidLabel.innerHTML = 'Payment Status:';
          lotSaleInfoContainer.appendChild(isPaidLabel);
          // Create payment status data, assign className and append
          const isPaidData = document.createElement('h3');
          const isPaidDataAttr = document.createAttribute('className');
          isPaidAttr.value = 'is-paid-data';
          isPaidData.setAttributeNode(isPaidDataAttr);
          if (lotSale.isPaid != false) {
            isPaidData.innerHTML = 'Paid';
          } else {
            isPaidData.innerHTML = 'Unpaid';
          }
          lotSaleInfoContainer.appendChild(isPaidData);
          // Create edit container div, assign className and append
          const lotSaleEditContainer = document.createElement('div');
          const lotSaleEditContainerAttr =
            document.createAttribute('className');
          lotSaleEditContainerAttr.value = 'lot-sale-edit-container';
          lotSaleEditContainer.setAttributeNode(lotSaleEditContainerAttr);
          lotSaleContainer.appendChild(lotSaleEditContainer);
          // Create lot sale date info, assign className and append
          const dateLabel = document.createElement('h6');
          const dateAttr = document.createAttribute('className');
          dateAttr.value = 'date-label';
          dateLabel.setAttributeNode(dateAttr);
          dateLabel.innerHTML = lotSale.date;
          lotSaleEditContainer.appendChild(dateLabel);
          // Create edit buttons container div, assign className and append
          const editBtnContainer = document.createElement('div');
          const editBtnContainerAttr = document.createAttribute('className');
          editBtnContainerAttr.value = 'edit-btn-container';
          editBtnContainer.setAttributeNode(editBtnContainerAttr);
          lotSaleEditContainer.appendChild(editBtnContainer);
          // Create edit method img buttons, assign className, onClicks, and alts and append
          const editBtn = document.createElement('img');
          const editBtnSrc = document.createAttribute('src');
          const editBtnAttr = document.createAttribute('className');
          editBtnSrc.value = edit;
          editBtnAttr.value = 'edit-btn';
          editBtn.addEventListener('click', updateLotSale);
          editBtn.setAttributeNode(editBtnSrc);
          editBtn.setAttributeNode(editBtnAttr);
          editBtnContainer.appendChild(editBtn);
          const deleteBtn = document.createElement('img');
          const deleteBtnSrc = document.createAttribute('src');
          deleteBtnSrc.value = trash;
          deleteBtn.addEventListener('click', deleteLotSale);
          deleteBtn.setAttributeNode(deleteBtnSrc);
          editBtnContainer.appendChild(deleteBtn);
        });
        setAlert(
          `${lotSaleData.length} Lot Sale(s) have been loaded.`,
          'success',
          'regular'
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Utilities

  return (
    <div>
      <Alerts />
      <h2 className='list-header'>Lot Sales</h2>
      <img
        src={refresh}
        onClick={getLotSales}
        alt='Refresh Icon'
        className='refresh-btn'
      />
      <div className='list-container' id='list-container'></div>
    </div>
  );
};

export default List;
