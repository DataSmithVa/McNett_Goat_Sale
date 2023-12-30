// Dependancies
import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

// Styles
import '../../styles/Alerts.scss';

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <div
        key={alert.id}
        className={`alert-${alert.style} alert-${alert.type}`}
      >
        {alert.msg}
      </div>
    ))
  );
};

export default Alerts;
