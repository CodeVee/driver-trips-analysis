import React, { Fragment } from 'react';

const SingleVehicleList = ({
  detail: { manufacturer, plate, acquired, acquiredNew },
}) => {
  return (
    <Fragment>
      <article className="det">
        <p>{manufacturer}</p>
        <p>{plate}</p>
        <p>{acquired}</p>
        <p>{acquiredNew ? 'Acquired New' : 'Fairly Used'}</p>
      </article>
    </Fragment>
  );
};

export default SingleVehicleList;
