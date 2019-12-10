import React, { Fragment } from 'react';

const DriverInfo = ({ info }) => {
  let details = {
    name: '',
    gender: '',
    agent: '',
    email: '',
    phone: '',
    DOB: '',
    address: '',
  };

  details = info ? info : details;
  return (
    <Fragment>
      <article className="driver-info">
        <span />
        <div className="divider" />
        <p>Name: {details.name}</p>
        <p>Gender: {details.gender}</p>
        <p>Agent: {details.agent}</p>
        <p>Email: {details.email}</p>
        <p>Phone: {details.phone}</p>
        <p>DOB: {details.DOB}</p>
        <p>Add: {details.address}</p>
      </article>
    </Fragment>
  );
};

export default DriverInfo;
