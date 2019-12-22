import React, { useState, useEffect } from 'react';
import './Tripspage.css';

const Tripspage = ({ match }) => {
  const [trip, setTrip] = useState([]);

  const { params } = match;
  useEffect(() => {
    if (params.tripID) {
      fetch(`/api/trip/${params.tripID}`)
        .then(data => data.json())
        .then(data => setTrip(data.data));
    }
  }, [params]);

  const lenTrip = trip.length;

  return (
    <div className="trips-table">
      <p>TRIP DETAILS</p>
      <p>
        <span>Driver: </span>
        <span>{params.driverName}</span>
      </p>
      <p>
        <span>Passenger: </span>
        <span>{lenTrip ? trip[0].user.name : ''}</span>
      </p>
      <p>
        <span>Amount: </span>
        <span>&#8358; {lenTrip ? trip[0].billedAmount : ''}</span>
      </p>
      <p>
        <span>PickUp: </span>
        <span>{lenTrip ? trip[0].pickup.address : ''}</span>
      </p>
      <p>
        <span>DropOff: </span>
        <span>{lenTrip ? trip[0].destination.address : ''}</span>
      </p>
      <p>
        <span>Payment: </span>
        {lenTrip ? (trip[0].isCash ? 'Card Payment' : 'Cash Payment') : ''}
      </p>
      <p>
        <span>Date: </span>
        {lenTrip ? trip[0].created.slice(0, 10) : ''}
      </p>
    </div>
  );
};

export default Tripspage;
