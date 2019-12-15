import React, { Fragment } from 'react';
import VehicleList from './VehicleList';
import VehicleCount from './VehicleCount';

const VehicleDetail = ({ vehicles }) => {
  return vehicles ? (
    <Fragment>
      <div className="vehicleDetail">
        <VehicleCount length={vehicles.length} />
        <VehicleList details={vehicles} />
      </div>
    </Fragment>
  ) : (
    <Fragment>
      <div className="vehicleDetail">
        <VehicleCount />
        <VehicleList details={[]} />
      </div>
    </Fragment>
  );
};

export default VehicleDetail;
