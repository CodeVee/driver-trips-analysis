import React, { Fragment } from 'react';

const VehicleCount = ({ length }) => {
  return (
    <Fragment>
      <div className="vehicleCount">
        <div className="vehicleCountIcon" />
        <div className="actualCount">
          {length ? length : ''}
          <p>Vehicle(s)</p>
        </div>
      </div>
    </Fragment>
  );
};

export default VehicleCount;
