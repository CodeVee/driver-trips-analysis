import React, { useState, useEffect } from 'react';
import './Driverspages.css';
import DriverDisplay from '../../Components/DriversList/DriverDisplay';
import DriverList from '../../Components/DriversList/DriverList';

const Driverspage = ({ match }) => {
  const [driver, setDriver] = useState('');

  const { params } = match;
  useEffect(() => {
    if (params.driverID) {
      fetch(`/api/driver/${params.driverID}`)
        .then(data => data.json())
        .then(data => setDriver(data.data));
    }
  }, [params]);

  return (
    <div className="drivers-page">
      {driver ? <DriverDisplay driver={driver} /> : <DriverDisplay />}
      <DriverList data={driver} />
    </div>
  );
};

export default Driverspage;
