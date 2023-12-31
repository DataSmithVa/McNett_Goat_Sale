// Dependancies
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import Alerts from './Alert';
import AlertContext from '../../context/alert/alertContext';

// Styles
import '../../styles/List.scss';

// Assets
import refresh from '../../assets/icons/refresh.svg';
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
          const lotSaleContainerAttr = document.createAttribute('class');
          lotSaleContainerAttr.value = 'lot-sale-container';
          lotSaleContainer.setAttributeNode(lotSaleContainerAttr);
          document
            .getElementById('list-container')
            .appendChild(lotSaleContainer);

          // Create info container div, assign className and append
          const lotSaleInfoContainer = document.createElement('div');
          const lotSaleInfoContainerAttr = document.createAttribute('class');
          lotSaleInfoContainerAttr.value = 'lot-sale-info-container';
          lotSaleInfoContainer.setAttributeNode(lotSaleInfoContainerAttr);
          lotSaleContainer.appendChild(lotSaleInfoContainer);

          // // Create lot number div, assign className and append
          const lotNumberContainer = document.createElement('div');
          const lotNumberContainerAttr = document.createAttribute('class');
          lotNumberContainerAttr.value = 'lot-number-container';
          lotNumberContainer.setAttributeNode(lotNumberContainerAttr);
          lotSaleInfoContainer.appendChild(lotNumberContainer);

          // Create lot number label, assign className and append
          const lotNumberLabel = document.createElement('h5');
          const lotNumberAttr = document.createAttribute('class');
          lotNumberAttr.value = 'lot-number-label';
          lotNumberLabel.setAttributeNode(lotNumberAttr);
          lotNumberLabel.innerHTML = 'Lot Number';
          lotNumberContainer.appendChild(lotNumberLabel);

          // Create lot number data, assign className and append
          const lotNumberData = document.createElement('h3');
          const lotNumberDataAttr = document.createAttribute('class');
          lotNumberDataAttr.value = 'lot-number-data';
          lotNumberData.setAttributeNode(lotNumberDataAttr);
          lotNumberData.innerHTML = lotSale.lotNumber;
          lotNumberContainer.appendChild(lotNumberData);

          // Create bidder number div, assign className and append
          const bidderNumberContainer = document.createElement('div');
          const bidderNumberContainerAttr = document.createAttribute('class');
          bidderNumberContainerAttr.value = 'bidder-number-container';
          bidderNumberContainer.setAttributeNode(bidderNumberContainerAttr);
          lotSaleInfoContainer.appendChild(bidderNumberContainer);

          // Create bidder number label, assign className and append
          const bidderNumberLabel = document.createElement('h5');
          const bidderNumberAttr = document.createAttribute('class');
          bidderNumberAttr.value = 'bidder-number-label';
          bidderNumberLabel.setAttributeNode(bidderNumberAttr);
          bidderNumberLabel.innerHTML = 'Bidder Number';
          bidderNumberContainer.appendChild(bidderNumberLabel);

          // Create bidder number data, assign className and append
          const bidderNumberData = document.createElement('h3');
          const bidderNumberDataAttr = document.createAttribute('class');
          bidderNumberDataAttr.value = 'bidder-number-data';
          bidderNumberData.setAttributeNode(bidderNumberDataAttr);
          bidderNumberData.innerHTML = lotSale.bidderNumber;
          bidderNumberContainer.appendChild(bidderNumberData);

          // Create sale price div, assign className and append
          const salePriceContainer = document.createElement('div');
          const salePriceContainerAttr = document.createAttribute('class');
          salePriceContainerAttr.value = 'sale-price-container';
          salePriceContainer.setAttributeNode(salePriceContainerAttr);
          lotSaleInfoContainer.appendChild(salePriceContainer);

          // Create lot sale price label, assign className and append
          const salePriceLabel = document.createElement('h5');
          const salePriceAttr = document.createAttribute('class');
          salePriceAttr.value = 'sale-price-label';
          salePriceLabel.setAttributeNode(salePriceAttr);
          salePriceLabel.innerHTML = 'Sale Price';
          salePriceContainer.appendChild(salePriceLabel);

          // Create bidder number data, assign className and append
          const salePriceData = document.createElement('h3');
          const salePriceDataAttr = document.createAttribute('class');
          salePriceDataAttr.value = 'sale-price-data';
          salePriceData.setAttributeNode(salePriceDataAttr);
          salePriceData.innerHTML = lotSale.salePrice;
          salePriceContainer.appendChild(salePriceData);

          // Create payment status div, assign className and append
          const isPaidContainer = document.createElement('div');
          const isPaidContainerAttr = document.createAttribute('class');
          isPaidContainerAttr.value = 'is-paid-container';
          isPaidContainer.setAttributeNode(isPaidContainerAttr);
          lotSaleInfoContainer.appendChild(isPaidContainer);

          // Create payment status label, assign className and append
          const isPaidLabel = document.createElement('h5');
          const isPaidAttr = document.createAttribute('class');
          isPaidAttr.value = 'is-paid-label';
          isPaidLabel.setAttributeNode(isPaidAttr);
          isPaidLabel.innerHTML = 'Payment Status:';
          isPaidContainer.appendChild(isPaidLabel);

          // Create payment status data, assign className and append
          const isPaidData = document.createElement('h3');
          const isPaidDataAttr = document.createAttribute('class');
          isPaidDataAttr.value = 'is-paid-data';
          isPaidData.setAttributeNode(isPaidDataAttr);
          if (lotSale.isPaid != false) {
            isPaidData.innerHTML = 'Paid';
          } else {
            isPaidData.innerHTML = 'Unpaid';
          }
          isPaidContainer.appendChild(isPaidData);

          // Create edit container div, assign className and append
          const lotSaleEditContainer = document.createElement('div');
          const lotSaleEditContainerAttr = document.createAttribute('class');
          lotSaleEditContainerAttr.value = 'lot-sale-edit-container';
          lotSaleEditContainer.setAttributeNode(lotSaleEditContainerAttr);
          lotSaleContainer.appendChild(lotSaleEditContainer);

          // Create lot sale date info, assign className and append
          const dateLabel = document.createElement('h6');
          const dateAttr = document.createAttribute('class');
          dateAttr.value = 'date-label';
          dateLabel.setAttributeNode(dateAttr);
          dateLabel.innerHTML = lotSale.date;
          lotSaleEditContainer.appendChild(dateLabel);

          // Create edit method img buttons, assign className, onClicks, and alts and append
          const editBtn = document.createElement('img');
          const editBtnSrc = document.createAttribute('src');
          const editBtnAttr = document.createAttribute('class');
          editBtnSrc.value = edit;
          editBtnAttr.value = 'edit-btn';
          editBtn.addEventListener('click', updateLotSale);
          editBtn.setAttributeNode(editBtnSrc);
          editBtn.setAttributeNode(editBtnAttr);
          lotSaleEditContainer.appendChild(editBtn);

          // Create horizonal rule for styling, assign className and append
          const hr = document.createElement('hr');
          const hrAttr = document.createAttribute('class');
          hrAttr.value = 'lot-sale-hr';
          hr.setAttributeNode(hrAttr);
          lotSaleContainer.appendChild(hr);
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
