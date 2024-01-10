// Dependancies
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Alerts from './Alert';
import AlertContext from '../../context/alert/alertContext';

// Styles
import '../../styles/List.scss';

// Assets
import refresh from '../../assets/icons/refresh.svg';

// Component Imports
import ListItem from './ListItem';

// Component
const List = () => {
  // Context
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

  // State
  const [fetchedData, setFetchedData] = useState();

  // Functions
  const fetchData = async () => {
    await axios.get('/api/soldLot').then((res) => {
      setFetchedData(res.data);
      setAlert(`${res.data.length} lot sales loaded`, 'success', 'regular');
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios.get('/api/soldLot').then((res) => {
        setFetchedData(res.data);
        setAlert(`${res.data.length} lot sales loaded`, 'success', 'regular');
      });
    };
    fetchData();
  }, []);

  return (
    <div>
      <Alerts />
      <h2 className='list-header'>Lot Sales</h2>
      <img
        src={refresh}
        alt='Refresh Icon'
        className='refresh-btn'
        onClick={fetchData}
      />
      <div className='list-container' id='list-container'>
        {fetchedData?.map((item) => {
          return <ListItem data={item} key={item._id} />;
        })}
      </div>
    </div>
  );
};

export default List;
