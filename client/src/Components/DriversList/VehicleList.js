import React, { Fragment } from 'react';
import SingleVehicle from './SingleVehicleList';

const VehicleList = ({ details }) => {
  return (
    <Fragment>
      <div className="vehicleDetails">
        {details.map(detail => (
          <SingleVehicle detail={detail} key={detail.vehicleID} />
        ))}
      </div>
    </Fragment>
  );
};

export default VehicleList;
