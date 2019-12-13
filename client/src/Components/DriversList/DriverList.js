import React, { Fragment, useEffect, useState } from 'react';
import Single from './SingleDriverList';

const DriverList = ({ data }) => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetch('/api/drivers')
      .then(data => {
        return data.json();
      })
      .then(data => setDrivers(data.data));
  }, []);
  const { length } = drivers;

  return (
    <Fragment>
      <div className="driver-list">
        <p className="list-head">Drivers</p>
        {length &&
          drivers.map(driver => {
            return data.driverID === driver.driverID ? (
              <Single driver={driver} key={driver.driverID} current={true} />
            ) : (
              <Single driver={driver} key={driver.driverID} current={false} />
            );
          })}
      </div>
    </Fragment>
  );
};

export default DriverList;
