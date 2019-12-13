import React, { Fragment, useEffect, useState } from 'react';
import DriverInfo from './DriverInfo';
import VehicleDetail from './VehicleDetail';

const DriverDisplay = ({ driver }) => {
  const [vehicles, setVehicles] = useState('');
  useEffect(() => {
    if (driver) {
      const getVehicle = async () => {
        const arr = driver.vehicleID.map(vehicle => {
          return fetch(`/api/vehicle/${vehicle}`)
            .then(data => data.json())
            .then(data => data.data);
        });
        const resolvedArr = await Promise.all(arr);
        setVehicles('');
        setVehicles(resolvedArr);
      };
      getVehicle();
    }
  }, [driver]);

  if (driver && vehicles) {
    return (
      <Fragment>
        <div className="driver-display">
          <DriverInfo info={driver} />
          <VehicleDetail vehicles={vehicles} />
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <div className="driver-display">
          <DriverInfo />
          <VehicleDetail />
        </div>
      </Fragment>
    );
  }
};

export default DriverDisplay;
