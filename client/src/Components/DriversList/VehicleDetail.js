import React, { Fragment } from 'react';
import VehicleList from './VehicleList';
import VehicleCount from './VehicleCount';

const VehicleDetail = ({ vehicles }) => {
  if (vehicles) {
    const { length } = vehicles;
    return (
      <Fragment>
        <div className="vehicleDetail">
          <VehicleCount length={length} />
          <VehicleList details={vehicles} />
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <div className="vehicleDetail">
          <VehicleCount />
          <VehicleList details={[]} />
        </div>
      </Fragment>
    );
  }
};

export default VehicleDetail;
