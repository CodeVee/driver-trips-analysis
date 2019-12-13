import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const SingleDriverList = ({ driver, current }) => {
  const style = {
    color: 'rgb(0,0,0)',
    fontWeight: 'bold',
    transition: 'all 0.2s linear 0s',
    boxShadow: 'rgb(216,216,216) 0px 0px 14px',
  };

  const { name, phone, driverID } = driver;

  return (
    <Fragment>
      <Link
        to={`/drivers/${driverID}`}
        className="single-list"
        style={current ? style : {}}
      >
        <span className="list-image" />
        <div>
          <span>{name}</span>
          <span>{phone}</span>
        </div>
      </Link>
    </Fragment>
  );
};

export default SingleDriverList;
